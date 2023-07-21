const User = require("../models/UserModel.js");
const nodemailer = require("nodemailer");
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

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
    const newUser = await User.create(req.body);

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
                                              <p>Dear ${newUser.username},</p><br>
                                              <p style="font-size:15px; color:#455056; margin:8px 0 0; line-height:24px;">
                                                  Your account has been created on the Susipwin Admin. Below are your system generated credentials, <br><strong>Please change
                                                      the password immediately after login</strong>.</p>
                                              <span
                                                  style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                              <p
                                                  style="color:#455056; font-size:18px;line-height:20px; margin:0; font-weight: 500;">
                                                  <strong
                                                      style="display: block;font-size: 13px; margin: 0 0 4px; color:rgba(0,0,0,.64); font-weight:normal;">Email</strong>${newUser.email}
                                                  <strong
                                                      style="display: block; font-size: 13px; margin: 24px 0 4px 0; font-weight:normal; color:rgba(0,0,0,.64);">Password</strong>${newUser.password}
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
    sendEmail(newUser,"New Account Information in Encode99",ms);
    sendSMS(newUser, `Welcome to Susipwin Tuition Institute! Here are your login details- Username: ${newUser.email}, Temp Password: ${newUser.password} - Please change your password upon login for security. Susipwin Tuition Institute`);

    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};





exports.updateUser = async (req, res) => {
  try {
    const newUser = req.body;
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
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
                                                      style="display: block; font-size: 13px; margin: 24px 0 4px 0; font-weight:normal; color:rgba(0,0,0,.64);">Password</strong>${newUser.password}
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
    sendSMS(newUser, `You update the your profile! Here are your login details- Username: ${newUser.email}, Password: ${newUser.password}`);
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
