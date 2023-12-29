// clearJWTToken.js
import axios from 'axios';
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';

const clearJWTToken = async () => {
  try {
    // Make a POST request to the logout endpoint
    await axios.post(`${apiUrl}/applicant/applicantsignOut`);

    // If the request is successful, you can clear the token from local storage or wherever you store it
    localStorage.removeItem('jwtToken'); // Example: Remove the token from local storage
    localStorage.removeItem('user');
    // You can also perform other cleanup tasks if needed
  } catch (error) {
    console.error('Error logging out:', error);
    // Handle errors, such as showing a message to the user
    throw new Error('Logout failed');
  }
};

export default clearJWTToken;
