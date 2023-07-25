const User = require("../models/UserModel.js");
const Payment = require("../models/PaymentModel.js");
const Salarypresent = require("../models/SalarypresentModel.js");
const Course = require("../models/CourseModel.js");
const { CourseData } = require("./CourseController.js");

exports.getAdminDashboardData = async (req, res) => {
    try {
        const stcount = await User.count({
            where: {
                role: 4,
            },
        });
        const tecount = await User.count({
            where: {
                role: 3,
            },
        });
        const cocount = await Course.count();

        res.status(200).json({ stcount, tecount, cocount });
    } catch (error) {
        console.log(error.message);
    }
};

// Calculate the total income for role ID 1 in a specific month
exports.calculateIncomeForRole1 = async (req, res) => {
    try {
        const id = req.params.id;

        // Get the payments for a specific month
        const payments = await Payment.findAll({
            where: { month:id },
        });

        // Get the salary percentage for role ID 1
        const salaryPercentage = await Salarypresent.findOne({
            where: { userrole: '1' },
        });

        const coursedata = await Course.findAll();

        if (!salaryPercentage) {
            return res.status(404).json({ error: "Salary percentage not found for role ID 1" });
        }

        let coursecount = 0;
        let payst = 0;

        // Calculate total income for role ID 1
        let totalIncome = 0;
        payments.forEach((payment) => {
            coursedata.forEach((course) => {
                if(payment.cid == course.id){
                    totalIncome = totalIncome + parseInt(course.courseprice);
                    coursecount = coursecount+1;
                }
            });
            payst = payst + 1;
        });

        const income = totalIncome*(salaryPercentage.presentage/100);

        res.status(200).json({ income, payments, salaryPercentage, coursedata, coursecount, payst, totalIncome });
    } catch (error) {
        console.log(error.message);
    }
};