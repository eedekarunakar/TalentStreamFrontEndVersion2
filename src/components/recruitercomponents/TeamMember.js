import React from 'react'

function TeamMember() {

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