import React, { useEffect } from 'react';
import clearJWTToken from './clearJWTToken';

const Logout = ({ onLogout }) => {
  useEffect(() => {
    const logoutUser = async () => {
      try {
        // Assuming you have a function to clear the JWT token
        await clearJWTToken();

        // Call the callback function to handle redirection
        onLogout();
      } catch (error) {
        console.error('Logout failed', error);
      }
    };

    logoutUser();
  }, [onLogout]);

  return <div>Logging out...</div>;
};

export default Logout;