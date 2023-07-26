const PaymentPay = require("../models/PaymentPayModel");
const Course = require("../models/CourseModel");
const User = require("../models/UserModel");
const nodemailer = require("nodemailer");
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const sendEmail = require('../mail/email.js');
const sendSMS = require('../mail/sms.js');
const ParentStudent = require('../models/ParentStudentModel.js');
const Payment = require('../models/PaymentModel.js');



exports.getAllPaymentRecords = async (req, res) => {
    try {
        const paymentRecords = await PaymentPay.findAll({
            include: [
                { model: Course, attributes: ['coursename'] },
                { model: User, attributes: ['username'] },
            ],
        });
        res.status(200).json(paymentRecords);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch payment records' });
    }
};

exports.getAllPendingPaymentRecords = async (req, res) => {
    try {
        const paymentRecords = await PaymentPay.findAll({
            where: { state: 'Pending' },
            include: [
                { model: Course, attributes: ['coursename'] },
                { model: User, attributes: ['username'] },
            ],
        });
        res.status(200).json(paymentRecords);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch pending payment records' });
    }
};

exports.createPayment = async (req, res) => {
    try {
        const { refNumber, payment, month, courseId, userId } = req.body;
        const paymentPay = await PaymentPay.create({
            refNumber,
            payment,
            month,
            courseId,
            userId,
        });
        res.status(201).json(paymentPay);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create payment record' });
    }
};

exports.updatePaymentState = async (req, res) => {
    try {
        const { id, state } = req.body;
        const paymentPay = await PaymentPay.findByPk(id, {
            include: [
                Course,User
            ],
        });

        const parentStudent = await ParentStudent.findOne({
            where: { studentId: paymentPay.user.id },
            include: [
              {
                model: User,
                as: 'parent', 
              },
            ],
          });
      
          const parentData = parentStudent.parent;



        if (!paymentPay) {
            return res.status(404).json({ error: 'Payment record not found' });
        }

        const previousState = paymentPay.state;
        paymentPay.state = state;
        await paymentPay.save();

        // Send SMS and email only when the state changes to 'Approved'
        if (state === 'Approved') {
            const user = parentData;
            const { username, phone, email } = paymentPay.user;
            const coursename = paymentPay.course.coursename;
            const ms = `Dear ${user.username}, your payment for the course ${coursename} has been approved, Thank you for your payment!`;

            let cid = paymentPay.course.id;
            let suid = paymentPay.user.id;
            let mon = new Date(paymentPay.month).getMonth()+1;
            let month = mon;

            const payment = await Payment.create({
                cid,
                suid,
                month,
            });


            // Send SMS and email
            sendEmail(user, "Payment Approved", ms);
            sendSMS(user, ms);
        }

        if (state === 'Rejected') {
            const user = paymentPay.user;
            const { username, phone, email } = paymentPay.user;
            const coursename = paymentPay.Course.coursename;
            const ms = `Dear ${username}, your payment for the course ${coursename} has been Rejected, Make sure you enterd data`;

            // Send SMS and email
            sendEmail(user, "Payment Rejected", ms);
            sendSMS(user, ms);
        }

        res.status(200).json(paymentPay);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update payment state' });
    }
};
