const cloudinary = require('../clouds/cloudinary.js');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Gallery = require('../models/GalleryModel.js');
const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const { QueryTypes } = require("sequelize");
const db = require("../config/Database.js");

exports.getGalleries = async (req, res) => {
  try {
    const response = await Gallery.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}


exports.getGallery = async (req, res) => {
  try {
    const response = await Gallery.findOne({ where: { location: req.params.id } });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}


exports.createGallery = async (req, res) => {
  try {
    await Gallery.create(req.body);
    res.status(201).json({ msg: "Gallery Created" });
  } catch (error) {
    console.log(error.message);
  }
}

exports.deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findOne({ where: { id: req.params.id } });
    if (!gallery) {
      return res.status(404).json({ msg: 'Gallery not found' });
    }

    const files = gallery.files;
    console.log('filesToDelete', files);
    if (files) {
      const publicIdsWithExtensions = files.split(',');
      const publicIds = publicIdsWithExtensions.map(publicId =>
        path.join('uploads', 'galleries', publicId)
      );
      const public_ids = publicIdsWithExtensions.map(publicId => `Susipwan_BackupData/Galleries/${publicId}`);
      const BackupPublic_Ids = publicIdsWithExtensions.map(backupPublicId => `Susipwan_BackupData/Galleries/Backup/${backupPublicId}`);
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

    await gallery.destroy();
    return res.status(200).json({ msg: 'Gallery deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

exports.viewGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const galleryone = await Gallery.findByPk(id);
    res.status(200).json(galleryone);
  } catch (error) {
    console.log(error.message);
  }
}
