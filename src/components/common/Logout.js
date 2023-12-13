import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useHistory hook from React Router
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate(); // Get access to the history object

  useEffect(() => {
    const signOutUser = async () => {
      try {
        const response = await fetch(`${apiUrl}/applicant/applicantsignOut`, {
          method: 'POST',
          credentials: 'include', // Include cookies if needed
        });

        if (response.status === 204) {
          setIsLoggedOut(true);

          // Redirect to the home page after logging out
          navigate('/');
          console.log('Redirecting to the home page...');
        } else {
          // Handle the error, e.g., display an error message
          console.error('Sign-out request failed.');
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error signing out:', error);
      }
    };

    signOutUser();
  }, []);

  return (
    <div>
     
      {isLoggedOut ? (
        <p>You have been successfully logged out. Redirecting to the home page...</p>
      ) : (
        <p>Logging out...</p>
      )}
  
    </div>
  );
};

export default Logout;
