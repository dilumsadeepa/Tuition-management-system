const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const sendSMS = async (user, ms) => {
  try {
    const userid = process.env.USERID;
    const apiKey = process.env.APIKEY;
    const apiEndpoint = process.env.APIEND;
    const tel = user.tel;

    const payload = {
      user_id: process.env.USERID,
      api_key: process.env.APIKEY,
      sender_id: process.env.SENDERID,
      to: user.tel,
      message: `Welcome to Susipwin Tuition Institute! Here are your login details:
      Username: ${user.email}
      Temp Password: ${user.password}
      
      Please change your password upon login for security.
      
      Susipwin Tuition Institute`,
    };

    const response = await axios.get(apiEndpoint, {
      params: {
        user_id: userid,
        api_key: apiKey,
        sender_id: process.env.SENDERID,
        to: tel,
        message: ms,
      },
    });

    // Handle the API response
    console.log(response.data);
  } catch (error) {
    // Handle any errors
    console.error('Error sending SMS:', error.message);
  }
};

module.exports = sendSMS;
