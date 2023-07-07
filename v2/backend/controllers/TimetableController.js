const cloudinary = require('../clouds/cloudinary.js');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Timetable = require('../models/TimetablepostModel.js');
const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');

exports.getTimetables = async (req, res) => {
  try {
    const response = await Timetable.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

exports.getTimetableGallery = async (req, res) => {
  try {
    const response = await Timetable.findAll({ where: { location: req.params.id } });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

exports.createTimetable = async (req, res) => {
  try {
    await Timetable.create(req.body);
    res.status(201).json({ msg: "Timetable Created" });
  } catch (error) {
    console.log(error.message);
  }
}

exports.deleteTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.findOne({ where: { id: req.params.id } });
    if (!timetable) {
      return res.status(404).json({ msg: 'Timetable not found' });
    }

    const files = timetable.files;
    console.log('filesToDelete', files);
    if (files) {
      const publicIdsWithExtensions = files.split(',');
      const publicIds = publicIdsWithExtensions.map(publicId =>
        path.join('uploads', 'timetables', publicId)
      );
      const public_ids = publicIdsWithExtensions.map(publicId => `Susipwan_BackupData/Timetables/${publicId}`);
      const BackupPublic_Ids = publicIdsWithExtensions.map(backupPublicId => `Susipwan_BackupData/Timetables/Backup/${backupPublicId}`);
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

    await timetable.destroy();
    return res.status(200).json({ msg: 'Timetable deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

exports.viewTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const Noticew = await Timetable.findByPk(id);
    res.status(200).json(Noticew);
  } catch (error) {
    console.log(error.message);
  }
}
