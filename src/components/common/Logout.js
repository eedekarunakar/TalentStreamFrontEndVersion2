import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const signOutUser = async () => {
      try {
        const response = await fetch(`${apiUrl}/applicant/applicantsignOut`, {
          method: 'POST',
          credentials: 'include',
        });

        if (response.status === 204) {
          // Redirect to the home page after logging out
          navigate('/');
          console.log('Redirecting to the home page...');

          // Use setTimeout to ensure that localStorage is cleared after the redirect
          setTimeout(() => {
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('userType');
          }, 0);
        } else {
          console.error('Sign-out request failed.');
        }
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };

    signOutUser();
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;