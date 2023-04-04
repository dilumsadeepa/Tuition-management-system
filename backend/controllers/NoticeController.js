import cloudinary from '../clouds/cloudinary.js';
import { CloudinaryStorage } from "multer-storage-cloudinary";
import Notice from '../models/NoticeModel.js';
import fs from 'fs';
import path from 'path';




 
export const getNotices = async(req, res) =>{
    try {
        const response = await Notice.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createNotice = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "Notice Created"});
    } catch (error) {
        console.log(error.message);
    }
}

// export const deleteNotice = async(req, res) =>{
//     try {
//         const {id} = req.params;
//         await Notice.destroy({where: {id:id}});
//         res.status(200).json({msg: "Notice Deleted"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }


// export const deleteNotice = async (req, res) => {
//     try {
//       const notice = await Notice.findOne({ where: { id: req.params.id } });
//       if (!notice) {
//         return res.status(404).json({ msg: 'Notice not found' });
//       }
  
//       const cloudOnly = notice.cloudOnly;
//       console.log("cloudOnlyDelete",cloudOnly);
//       if (cloudOnly) {
//         const urls = cloudOnly.split(',');
//         for (const url of urls) {
//           const public_id = url.split('/').slice(-1)[0].split('.')[0];
//           console.log("publicidsss: ",public_id)
//           await cloudinary.uploader.destroy(public_id);
//         }
//       }
  
//       await notice.destroy();
//       return res.status(200).json({ msg: 'Notice deleted' });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ msg: 'Server error' });
//     }
//   };




// export const deleteNotice = async (req, res) => {
//     try {
//       const notice = await Notice.findOne({ where: { id: req.params.id } });
//       if (!notice) {
//         return res.status(404).json({ msg: 'Notice not found' });
//       }
  
//       const cloudOnly = notice.cloudOnly;
//       console.log("cloudOnlyDelete",cloudOnly);
//       if (cloudOnly) {
//         const urls = cloudOnly.split(',');
//         for (const url of urls) {
//           const public_id = url.split('/').slice(-1)[0];
//           console.log("publicidsss: ",public_id)
//           await cloudinary.uploader.destroy(public_id);
//         }
//       }
  
//       await notice.destroy();
//       return res.status(200).json({ msg: 'Notice deleted' });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ msg: 'Server error' });
//     }
//   };


// export const deleteNotice = async (req, res) => {
//     try {
//       const notice = await Notice.findOne({ where: { id: req.params.id } });
//       if (!notice) {
//         return res.status(404).json({ msg: 'Notice not found' });
//       }
  
//       const files = notice.files;
//       console.log("filesToDelete", files);
//       if (files) {
//         const publicIds = files.split(',');
//         console.log("publicIds to delete", publicIds);
//         for (const public_id of publicIds) {
//             console.log("publicId : ", public_id);
//           await cloudinary.uploader.destroy(`${public_id}`);
//         }
//       }
  
//       await notice.destroy();
//       return res.status(200).json({ msg: 'Notice deleted' });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ msg: 'Server error' });
//     }
//   };


// export const deleteNotice = async (req, res) => {
//     try {
//       const notice = await Notice.findOne({ where: { id: req.params.id } });
//       if (!notice) {
//         return res.status(404).json({ msg: 'Notice not found' });
//       }
  
//       const files = notice.files;
//       console.log("filesToDelete", files);
//       if (files) {
//         const publicIds = files.split(',');
//         console.log("publicIds to delete", publicIds);
//         for (const public_id of publicIds) {
//           console.log("publicId : ", public_id);
//           await cloudinary.uploader.destroy(`${public_id}`, { folder: 'Susipwan_BackupData/Notices' });
//         }
//       }
  
//       await notice.destroy();
//       return res.status(200).json({ msg: 'Notice deleted' });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ msg: 'Server error' });
//     }
//   };


// export const deleteNotice = async (req, res) => {
//     try {
//       const notice = await Notice.findOne({ where: { id: req.params.id } });
//       if (!notice) {
//         return res.status(404).json({ msg: 'Notice not found' });
//       }
  
//       const files = notice.files;
//       console.log("filesToDelete", files);
//       if (files) {
//         const public_ids = Array.from(files.split(','));
//         // const publicIdsWithExtensions = files.split(',');
//         // const public_ids = publicIdsWithExtensions.map(publicId => publicId.replace(/\.[^/.]+$/, ''));
//         console.log(Array.isArray(public_ids));
//         console.log("publicIds to delete", public_ids);
//         try {
//           const result = await cloudinary.api.delete_resources(public_ids, {
//             resource_type: "raw",
//             // folder: "Susipwan_BackupData/Notices",
//           });
//           console.log(result);
//         } catch (error) {
//           console.log(error);
//         }
//       }
  
//       await notice.destroy();
//       return res.status(200).json({ msg: 'Notice deleted' });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ msg: 'Server error' });
//     }
//   };



// export const deleteNotice = async (req, res) => {
//     try {
//       const notice = await Notice.findOne({ where: { id: req.params.id } });
//       if (!notice) {
//         return res.status(404).json({ msg: 'Notice not found' });
//       }
  
//       const files = notice.files;
//       console.log("filesToDelete", files);
//       if (files) {
//         const publicIdsWithExtensions = files.split(',');
//         const public_ids = publicIdsWithExtensions.map(publicId => `Susipwan_BackupData/Notices/${publicId}`);
//         console.log(Array.isArray(public_ids));
//         console.log("publicIds to delete", public_ids);
//         try {
//           const result = await cloudinary.api.delete_resources(public_ids, {
//             resource_type: "raw"
//           });
//           console.log(result);
//         } catch (error) {
//           console.log(error);
//         }
//       }
  
//       await notice.destroy();
//       return res.status(200).json({ msg: 'Notice deleted' });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ msg: 'Server error' });
//     }
//   };





export const deleteNotice = async (req, res) => {
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




export const viewNotice = async(req, res) =>{
    try {
        const {id} = req.params;
        // const Notice = await Notice.findOne({where: {id:id}});
        const Noticew = await Notice.findByPk(id);
        res.status(200).json(Noticew);
    } catch (error) {
        console.log(error.message);
    }
}
 