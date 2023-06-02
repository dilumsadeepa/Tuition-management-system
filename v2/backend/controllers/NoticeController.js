const cloudinary = require('../clouds/cloudinary.js');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Notice = require('../models/NoticeModel.js');
const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');

const getNotices = async (req, res) => {
  try {
    const response = await Notice.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getNoticesCount = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours to 00:00:00 to get notices from the start of the day
    const count = await Notice.count({
      where: {
        createdAt: {
          [Op.gte]: today,
        },
      },
    });
    res.status(200).json({ count });
  } catch (error) {
    console.log(error.message);
  }
};

const getTodaysNotices = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours to 00:00:00 to get notices from the start of the day
    const response = await Notice.findAll({
      where: {
        createdAt: {
          [Op.gte]: today,
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const createNotice = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "Notice Created" });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findOne({ where: { id: req.params.id } });
    if (!notice) {
      return res.status(404).json({ msg: 'Notice not found' });
    }

    const files = notice.files;
    console.log('filesToDelete', files);
    if (files) {
      const publicIdsWithExtensions = files.split(',');
      const publicIds = publicIdsWithExtensions.map(publicId =>
        path.join('uploads', 'notices', publicId)
      );
      const public_ids = publicIdsWithExtensions.map(publicId => `Susipwan_BackupData/Notices/${publicId}`);
      const BackupPublic_Ids = publicIdsWithExtensions.map(backupPublicId => `Susipwan_BackupData/Notices/Backup/${backupPublicId}`);
      console.log(Array.isArray(public_ids));
      console.log('files to delete', public_ids);
      console.log('Backupfiles to delete', BackupPublic_Ids);

      try {
        const result = await cloudinary.api.delete_resources(public_ids, {
          resource_type: 'raw',
        });
        const backupResult = await cloudinary.api.delete_resources(BackupPublic_Ids, {
          resource_type: 'raw',
        });
        console.log(result);
        console.log(backupResult);

        // Delete local files
        publicIds.forEach(publicId => {
          fs.unlink(publicId, err => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(`Deleted ${publicId}`);
          });
        });
      } catch (error) {
        console.log(error);
      }
    }

    await notice.destroy();
    return res.status(200).json({ msg: 'Notice deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Server error' });
  }
};

const viewNotice = async (req, res) => {
  try {
    const id = req.params.id;
    const Noticew = await Notice.findByPk(id);
    res.status(200).json(Noticew);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getNotices,
  getNoticesCount,
  getTodaysNotices,
  createNotice,
  deleteNotice,
  viewNotice
};