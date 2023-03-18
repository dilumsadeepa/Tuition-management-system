const express = require('express');
const router = express.Router();
const { NoticeModel } = require("../models");


// insert a notice
router.post('/notice', async (req, res) => {
    try {
        const notice = await NoticeModel.create(req.body);
        res.status(201).json(notice);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router; 