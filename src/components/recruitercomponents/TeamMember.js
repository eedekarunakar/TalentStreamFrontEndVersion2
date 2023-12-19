import React, { useState, useEffect } from 'react';
import { useUserContext } from '../common/UserProvider';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import axios from "axios";
import AddTeamMemberPopup from './AddTeamMemberPopup';

function TeamMember() {
    const { user } = useUserContext();

    const [teamMembers, setTeamMembers] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
   
    useEffect(() => {
        
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
        }
    
        // Fetch team members data
        axios
          .get(`${apiUrl}/team/get/teammembers/${user.id}`)
          .then((response) => {
            setTeamMembers(response.data);
    
          })
          .catch((error) => {
            console.error('Error fetching team members:', error);
          });
      }, [user.id]);

      const handleAddTeamMember = (formData) => {
        // Handle adding a team member here
      };
    
      const handleDeleteTeamMember = (teamMemberId) => {
        // Send a DELETE request to delete the team member
        axios
          .delete(`${apiUrl}/team/delete/${teamMemberId}`)
          .then((response) => {
            // Update the state to reflect the deletion
            window.alert('Team member deleted successfully');
    
            setTeamMembers((prevTeamMembers) =>
              prevTeamMembers.filter((member) => member.id !== teamMemberId)
                      );
          })
          .catch((error) => {
            console.error('Error deleting team member:', error);
          });
      };
    

return (
  <div className="dashboard__content">
    <section className="page-title-dashboard">
      <div className="themes-container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="title-dashboard">
              <div className="title-dash flex2">Team Member</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="flat-dashboard-setting bg-white">
      <div className="themes-container">
<button onClick={() => setShowPopup(true)}>Add Team Member</button>
          <Table data={teamMembers} handleDelete={handleDeleteTeamMember} />
          <AddTeamMemberPopup
            show={showPopup}
            handleClose={() => setShowPopup(false)}
            handleAddTeamMember={handleAddTeamMember}
            userId={user.id}
          />
 
    </div>
    </section>
     </div>
  );
}

const Table = ({ data, handleDelete }) => {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((teamMember, index) => (
              <tr key={index}>
                <td>{teamMember.name}</td>
                <td>{teamMember.role}</td>
                <td>{teamMember.email}</td>
                <td>{teamMember.mobilenumber}</td>
                <td>{teamMember.password}</td>
                <td>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(teamMember.id); // Call the delete function
                    }}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default TeamMember;