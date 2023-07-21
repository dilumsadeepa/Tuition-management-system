const User = require("../models/UserModel.js");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();

// Function to send email
const sendEmail = async (user, subject, message) => {
  try {
    // Create a transporter object with your email service provider details
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT,
      secure: true,
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Prepare the email content
    const mailOptions = {
      from: process.env.MAIL,
      to: user.email,
      subject: subject,
      html: message,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log("Error sending email:", error);
  }
};

module.exports = sendEmail;
