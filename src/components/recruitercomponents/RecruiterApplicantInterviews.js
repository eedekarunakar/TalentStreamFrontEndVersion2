import React, { useState, useEffect,useRef } from 'react';
import { useUserContext } from '../common/UserProvider';
import { apiUrl } from '../../services/ApplicantAPIService';
import axios from 'axios';
import $ from 'jquery';
 
function formatDateTime(dateTimeArray) {
  const [year, month, day, hour, minute] = dateTimeArray;
 
  const formattedDate = new Date(year, month - 1, day).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short', 
    year: 'numeric',
  });
 
  const formattedTime = new Date(year, month - 1, day, hour, minute).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
 
  return `${formattedDate} ${formattedTime}`;
}
 
function RecruiterApplicantInterviews() {
  const [applicants, setApplicants] = useState([]);
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  const [filterOption, setFilterOption] = useState('all'); 
  const { user } = useUserContext();
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const isMounted = useRef(true);
  const tableref=useRef(null);
  const handleCancelButtonClick = async (applicant) => {
    const { id: scheduleInterviewId } = applicant;
    const confirmation = window.confirm('Do you want to cancel the interview?');
    if (confirmation) {
      try {
        await axios.delete(`${apiUrl}/applyjob/scheduleInterview/${scheduleInterviewId}`);
        alert('Interview cancelled successfully');
        window.location.reload();
      } catch (error) {
        console.error('Error cancelling interview:', error);
      }
    }
  };
  
  const fetchInterviewDetails = async () => {
    try {
      const response = await axios.get(`${apiUrl}/applyjob/recruiter/${user.id}/interviews/interviewing`);
    const applicantsArray = Object.values(response.data).flat();
        setApplicants(applicantsArray);
        const $table= window.$(tableref.current);
          const timeoutId = setTimeout(() => {  
           $table.DataTable().destroy();
            $table.DataTable({responsive:true});
                  }, 500);
         return () => {
            isMounted.current = false;
         };
    } catch (error) {
      console.error('Error fetching applicants:', error);
    }
  };
 
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    }
    fetchInterviewDetails();
  }, [user.id]);

  const todayApplicants = applicants.filter(applicant => {
    const [year, month, day, hour, minute] = applicant.timeAndDate;
    const interviewTimestamp = new Date(year, month - 1, day, hour, minute).getTime();
    const todayTimestamp = new Date().setHours(0, 0, 0, 0);
    return interviewTimestamp >= todayTimestamp && interviewTimestamp < todayTimestamp + 24 * 60 * 60 * 1000;
  });
  const thisWeekApplicants = applicants.filter(applicant => {
    const [year, month, day, hour, minute] = applicant.timeAndDate;
    const interviewTimestamp = new Date(year, month - 1, day, hour, minute).getTime();
    const today = new Date();
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const startOfWeekTimestamp = startOfWeek.getTime();
 
    return interviewTimestamp >= startOfWeekTimestamp && interviewTimestamp < startOfWeekTimestamp + 7 * 24 * 60 * 60 * 1000;
  });
  const thisMonthApplicants = applicants.filter(applicant => {
    const [year, month, day, hour, minute] = applicant.timeAndDate;
    const interviewTimestamp = new Date(year, month - 1, day, hour, minute).getTime();
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const startOfMonthTimestamp = startOfMonth.getTime();
 
    return interviewTimestamp >= startOfMonthTimestamp && interviewTimestamp < startOfMonthTimestamp + 30 * 24 * 60 * 60 * 1000; // Assuming a month has 30 days
  });
 
  useEffect(() => {
    switch (filterOption) {
      case 'today':
        setFilteredApplicants(todayApplicants);
        break;
      case 'thisWeek':
        setFilteredApplicants(thisWeekApplicants);
        break;
      case 'thisMonth':
        setFilteredApplicants(thisMonthApplicants);
        break;
      default:
        setFilteredApplicants(applicants);
    }
  }, [filterOption, todayApplicants, thisWeekApplicants, thisMonthApplicants, applicants]);
  return (
    <div>
      <div className="dashboard__content">
  <section className="page-title-dashboard">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="title-dashboard">
            <div className="title-dash flex2">Scheduled Interviews</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-setting bg-white">
  <div className="themes-container">
  <div className="row">
        <div className="col-lg-12 col-md-12 ">
  <div className="profile-setting bg-white">
  <div className="filterContainer">
        <label htmlFor="filterSelect">Filter by:</label>
        <select id="filterSelect" value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="thisWeek">This Week</option>
          <option value="thisMonth">This Month</option>
        </select>
      </div>
      {applicants.length > 0 ? (
          <ScheduleInterviewTable
            interview={applicants}
            setSelectedApplicant={setSelectedApplicant}
            handleCancelButtonClick={handleCancelButtonClick}
            ref={tableref}
          />
        ) : (
          <p>No Interviews are Scheduled</p>
        )}
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
  );
} 
export default RecruiterApplicantInterviews;
function ScheduleInterviewTable({  interview, setSelectedApplicant, handleCancelButtonClick,tableref } ) {
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  }
    return (
      <div className="table-responsive">
        <table ref={tableref} className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Applicant Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Job Title</th>
              <th>Date & Time</th>
              <th>Location</th>
              <th>Mode of Interview</th>
              <th>Round</th>
              <th>Interviewer Link</th>
              <th>Interviewer Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {interview.map((applicant, index) => (
              <tr key={index}>
                <td>{applicant.name}</td>
                <td>{applicant.email}</td>
                <td>{applicant.mobilenumber}</td>
                <td>{applicant.jobTitle}</td>
                <td>{formatDateTime(applicant.timeAndDate)}</td>
                <td>{applicant.location}</td>
                <td>{applicant.modeOfInterview}</td>
                <td>{applicant.round}</td>
                <td>
                  <a href={applicant.interviewLink} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </td>
                <td>{applicant.interviewPerson}</td>
                <td>
                <a href="#" style={{color:'red'}}
  onClick={() => {
    handleCancelButtonClick(applicant);
  }}
>
  Cancel Interview
</a>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }