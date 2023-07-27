const User = require("../models/UserModel.js");
const nodemailer = require("nodemailer");
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcryptjs');
const crypto = require("crypto");

const sendEmail = require('../mail/email.js');
const sendSMS = require('../mail/sms.js');

exports.getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        email: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getparent = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        email: req.params.id,
      },
    });
    res.status(200).json([response]); // Wrap the response in an array
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};


// exports.createUser = async (req, res) => {
//   try {
//     await User.create(req.body);
//     res.status(201).json({ msg: "User Created" });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

exports.createUser = async (req, res) => {
  try {
    const suser = req.body;
    const password = req.body.password;
    const newUser = req.body;

    const response = await User.findOne({
      where: {
        email: req.body.email,
        tel: req.body.tel
      },
    });

    if(response){
     return res.status(404).json({ msg: "Email Or Phone number is already used" });
    }
    
    
    // Hash the password before storing it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashedPassword; 

    const user = await User.create(newUser);
    

    // Send email to the user
    let ms = `
    <!doctype html>
      <html lang="en-US">

      <head>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          
          <meta name="description" content="New Account Created">
          <style type="text/css">
              a:hover {text-decoration: underline !important;}
          </style>
      </head>

      <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
          <!-- 100% body table -->
          <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
              style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
              <tr>
                  <td>
                      <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
                          align="center" cellpadding="0" cellspacing="0">
                          <tr>
                              <td style="height:80px;">&nbsp;</td>
                          </tr>
                          <tr>
                              <td style="text-align:center;">
                                  <a href="https://encode99.org.lk" title="logo" target="_blank">
                                  <img width="150" src="https://encode99.org.lk/encodelogo.jpg" title="logo" alt="logo">
                                </a>
                              </td>
                          </tr>
                          <tr>
                              <td style="height:20px;">&nbsp;</td>
                          </tr>
                          <tr>
                              <td>
                                  <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                      style="max-width:670px; background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                      <tr>
                                          <td style="height:40px;">&nbsp;</td>
                                      </tr>
                                      <tr>
                                          <td style="padding:0 35px;">
                                              <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">New Account Information
                                              </h1>
                                              <p>Dear ${suser.username},</p><br>
                                              <p style="font-size:15px; color:#455056; margin:8px 0 0; line-height:24px;">
                                                  Your account has been created on the Susipwin Admin. Below are your system generated credentials, <br><strong>Please change
                                                      the password immediately after login</strong>.</p>
                                              <span
                                                  style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                              <p
                                                  style="color:#455056; font-size:18px;line-height:20px; margin:0; font-weight: 500;">
                                                  <strong
                                                      style="display: block;font-size: 13px; margin: 0 0 4px; color:rgba(0,0,0,.64); font-weight:normal;">Email</strong>${suser.email}
                                                  <strong
                                                      style="display: block; font-size: 13px; margin: 24px 0 4px 0; font-weight:normal; color:rgba(0,0,0,.64);">Password</strong>${password}
                                              </p>

                                              <a href="susipwin.encode99.org.lk/login"
                                                  style="background:#20e277;text-decoration:none !important; display:inline-block; font-weight:500; margin-top:24px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Login
                                                  to your Account</a>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="height:40px;">&nbsp;</td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                          <tr>
                              <td style="height:20px;">&nbsp;</td>
                          </tr>
                          <tr>
                              <td style="text-align:center;">
                                  <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>https://encode99.org.lk</strong> </p>
                              </td>
                          </tr>
                          <tr>
                              <td style="height:80px;">&nbsp;</td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
          <!--/100% body table-->
      </body>

      </html>
    `
    sendEmail(suser,"New Account Information in Susipwin",ms);
    sendSMS(suser, `Welcome to Susipwin Tuition Institute! Here are your login details- Username: ${suser.email}, Temp Password: ${password} - Please change your password upon login for security. Susipwin Tuition Institute`);

    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ msg: error.message+" email or phone number is alredy used" });
  }
};





exports.updateUser = async (req, res) => {
  try {
    const newUser = req.body;
    const password = req.body.password;
    
    const updatedUser = req.body;

    // If the password field is present in the request body, hash the new password
    if (updatedUser.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(updatedUser.password, salt);
      updatedUser.password = hashedPassword;
    }

    await User.update(updatedUser, {
      where: {
        id: req.params.id,
      },
    });

    console.log('====================================');
    console.log(password);
    console.log('====================================');
    let ms = `
    <!doctype html>
      <html lang="en-US">

      <head>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          
          <meta name="description" content="Account Updated">
          <style type="text/css">
              a:hover {text-decoration: underline !important;}
          </style>
      </head>

      <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
          <!-- 100% body table -->
          <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
              style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
              <tr>
                  <td>
                      <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
                          align="center" cellpadding="0" cellspacing="0">
                          <tr>
                              <td style="height:80px;">&nbsp;</td>
                          </tr>
                          <tr>
                              <td style="text-align:center;">
                                  <a href="https://encode99.org.lk" title="logo" target="_blank">
                                  <img width="150" src="https://encode99.org.lk/encodelogo.jpg" title="logo" alt="logo">
                                </a>
                              </td>
                          </tr>
                          <tr>
                              <td style="height:20px;">&nbsp;</td>
                          </tr>
                          <tr>
                              <td>
                                  <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                      style="max-width:670px; background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                      <tr>
                                          <td style="height:40px;">&nbsp;</td>
                                      </tr>
                                      <tr>
                                          <td style="padding:0 35px;">
                                              <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">New Account Information
                                              </h1>
                                              <p>Dear ${newUser.username},</p><br>
                                              <p style="font-size:15px; color:#455056; margin:8px 0 0; line-height:24px;">
                                                  Your account has been Updated. Below are the updated credentials.</p>
                                              <span
                                                  style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                              <p
                                                  style="color:#455056; font-size:18px;line-height:20px; margin:0; font-weight: 500;">
                                                  <strong
                                                      style="display: block;font-size: 13px; margin: 0 0 4px; color:rgba(0,0,0,.64); font-weight:normal;">Email</strong>${newUser.email}
                                                  <strong
                                                      style="display: block; font-size: 13px; margin: 24px 0 4px 0; font-weight:normal; color:rgba(0,0,0,.64);">Password</strong>${password}
                                              </p>

                                              <a href="susipwin.encode99.org.lk/login"
                                                  style="background:#20e277;text-decoration:none !important; display:inline-block; font-weight:500; margin-top:24px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Login
                                                  to your Account</a>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="height:40px;">&nbsp;</td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                          <tr>
                              <td style="height:20px;">&nbsp;</td>
                          </tr>
                          <tr>
                              <td style="text-align:center;">
                                  <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>hhtps://encode99.org.lk</strong> </p>
                              </td>
                          </tr>
                          <tr>
                              <td style="height:80px;">&nbsp;</td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
          <!--/100% body table-->
      </body>

      </html>
    `
    sendEmail(newUser,"Account Updated",ms);
    sendSMS(newUser, `You update the your profile! Here are your login details- Username: ${newUser.email}, Password: ${password}`);
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        email: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Generate reset token and expiration timestamp
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // Token expires in 1 hour

    // Save reset token and expiry in the database
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = new Date(resetTokenExpiry);
    await user.save();

    // Send password reset email to the user
    const resetURL = `https://susipwin.encode99.org.lk/reset-password/${resetToken}`;
    const ms = `Click the following link to reset your password: <a href="${resetURL}">${resetURL}</a>`;
    

    sendEmail(user,"Password Reset",ms);
    sendSMS(user, `Click the following link to reset your password: ${resetURL}`);

    res.status(200).json({ message: "Password reset email sent." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send password reset email." });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    const user = await User.findOne({ where: { resetPasswordToken: token } });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired reset token." });
    }

    // Check if the token has expired
    if (user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({ error: "Reset token has expired." });
    }

    // Update user's password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();

    res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to reset password." });
  }
};
