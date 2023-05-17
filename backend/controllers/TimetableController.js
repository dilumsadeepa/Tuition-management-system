import cloudinary from '../clouds/cloudinary.js';
import { CloudinaryStorage } from "multer-storage-cloudinary";
import Timetable from '../models/TimetablepostModel.js';
import fs from 'fs';
import path from 'path';
import { Op } from 'sequelize';


 
export const getTimetables = async(req, res) =>{
    try {
        const response = await Timetable.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}



export const createTimetable = async(req, res) =>{
    try {
        await Timetable.create(req.body);
        res.status(201).json({msg: "Timetable Created"});
    } catch (error) {
        console.log(error.message);
    }
}







export const deleteTimetable = async (req, res) => {
    try {
      const notice = await Timetable.findOne({ where: { id: req.params.id } });
      if (!notice) {
        return res.status(404).json({ msg: 'Timetable not found' });
      }
  
      const files = notice.files;
      console.log('filesToDelete', files);
      if (files) {
        const publicIdsWithExtensions = files.split(',');
        const publicIds = publicIdsWithExtensions.map(publicId =>
          path.join('uploads', 'notices', publicId)
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
  
      await notice.destroy();
      return res.status(200).json({ msg: 'Timetable deleted' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'Server error' });
    }
  };




export const viewTimetable = async(req, res) =>{
    try {
        const {id} = req.params;
        // const Notice = await Notice.findOne({where: {id:id}});
        const Noticew = await Timetable.findByPk(id);
        res.status(200).json(Noticew);
    } catch (error) {
        console.log(error.message);
    }
}
 