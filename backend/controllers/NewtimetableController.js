import Timetable from '../models/NewtimetableModel.js';
import { Op } from 'sequelize';


 
export const getNewTimetables = async(req, res) =>{
    try {
        const response = await Timetable.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}



export const createNewTimetable = async(req, res) =>{
    try {
        await Timetable.create(req.body);
        res.status(201).json({msg: "Timetable Created"});
    } catch (error) {
        console.log(error.message);
    }
}







export const deleteNewTimetable = async (req, res) => {
    try {
      const notice = await Timetable.findOne({ where: { id: req.params.id } });
      if (!notice) {
        return res.status(404).json({ msg: 'Timetable not found' });
      }
  
      await notice.destroy();
      return res.status(200).json({ msg: 'Timetable deleted' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'Server error' });
    }
  };




export const viewNewTimetable = async(req, res) =>{
    try {
        const {id} = req.params;
        // const Notice = await Notice.findOne({where: {id:id}});
        const Noticew = await Timetable.findByPk(id);
        res.status(200).json(Noticew);
    } catch (error) {
        console.log(error.message);
    };
}

export const timecourseId = async (req, res) => {
        try {
          const timeId = req.params.id;
          console.log("cousrseidddd"+timeId);
          const course = await Timetable.findOne({ where: { id: timeId } });
          if (course) {
            res.status(200).json({ courseId: course.cunit });
          } else {
            res.status(404).json({ message: 'Course ID not found' });
          }
        } catch (error) {
          console.log('Error in fetching course:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      
}
 