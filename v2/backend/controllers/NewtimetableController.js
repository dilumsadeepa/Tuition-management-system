const Timetable = require('../models/NewtimetableModel.js');
const Course = require("../models/CourseModel.js");
const User = require("../models/UserModel.js");
const { Op } = require('sequelize');
const { QueryTypes } = require("sequelize");
const db = require("../config/Database.js");
 
const currentDate = new Date(); // Get the current date
const currentYear = currentDate.getFullYear(); // Get the current year
const currentMonth = currentDate.getMonth() + 1; // Get the current month (add 1 because months are zero-based)
const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1; // Get the previous month accounting for January (1) edge case
const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1; // Get the next month accounting for December (12) edge case



exports.getNewTimetables = async (req, res) => {

  const sesql =
    "SELECT t.*, c.coursename, c.courseid, u.fullname FROM timetable t INNER JOIN courses c ON t.cunit = c.id INNER JOIN users u ON u.id = c.userId Order BY t.createdAt DESC";


  try {
    const response = await db.query(sesql, { type: QueryTypes.SELECT });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


exports.getNewTimetablesThreeMonths = async (req, res) => {


const sesql = `
SELECT t.*, c.coursename, c.courseid, u.fullname
FROM timetable t
INNER JOIN courses c ON t.cunit = c.id
INNER JOIN users u ON u.id = c.userId
WHERE (YEAR(t.cdate) = ${currentYear} AND MONTH(t.cdate) = ${prevMonth})
  OR (YEAR(t.cdate) = ${currentYear} AND MONTH(t.cdate) = ${currentMonth})
  OR (YEAR(t.cdate) = ${currentYear} AND MONTH(t.cdate) = ${nextMonth})
ORDER BY t.createdAt DESC
`;


  try {
    const response = await db.query(sesql, { type: QueryTypes.SELECT });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};



exports.getNewStudentTimetables = async (req, res) => {
  const { id } = req.params;
  console.log("user iddd: "+id);

  // const sesql =
  //   "SELECT t.*, c.coursename, c.courseid, u.fullname FROM coursestudents s INNER JOIN timetable t ON t.cunit = s.courseId INNER JOIN courses c ON c.id = t.cunit INNER JOIN users u ON u.id = s.userId WHERE s.userId = '" +
  //   id +
  //   "' AND s.aprovel='1' ORDER BY t.createdAt DESC;";

  const sesql = `
  SELECT t.*, c.coursename, c.courseid, u.fullname
  FROM coursestudents s
  INNER JOIN timetable t ON t.cunit = s.courseId
  INNER JOIN courses c ON c.id = t.cunit
  INNER JOIN users u ON u.id = c.userId
  WHERE s.userId = '${id}' AND s.aprovel = '1'
    AND (
      (YEAR(t.cdate) = ${currentYear} AND MONTH(t.cdate) = ${prevMonth} AND DAY(t.createdAt) >= 1)
      OR (YEAR(t.cdate) = ${currentYear} AND MONTH(t.cdate) > ${prevMonth})
      OR (YEAR(t.cdate) = ${currentYear} + 1 AND MONTH(t.cdate) <= ${currentMonth})
    )
    ORDER BY t.createdAt DESC
  `;

  try {
    const response = await db.query(sesql, { type: QueryTypes.SELECT });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// exports.getNewTimetables = async (req, res) => {
//   try {
//     const response = await Timetable.findAll({
//       inclide: [Course],
//     });
//     console.log(response);
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

exports.createNewTimetable = async (req, res) => {
  try {
    await Timetable.create(req.body);
    res.status(201).json({ msg: "Timetable Created" });
  } catch (error) {
    console.log(error.message);
  }
}

exports.deleteNewTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.findOne({ where: { id: req.params.id } });
    if (!timetable) {
      return res.status(404).json({ msg: 'Timetable not found' });
    }

    await timetable.destroy();
    return res.status(200).json({ msg: 'Timetable deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Server error' });
  }
};

exports.viewNewTimetable = async (req, res) => {
  const { id } = req.params;

  const sqlquery =
  "SELECT t.*, c.coursename, c.courseid, u.fullname FROM timetable t INNER JOIN courses c ON t.cunit = c.id INNER JOIN users u ON u.id = c.userId WHERE t.id = '" +
  id +
  "';";

  try {
      const selectedtimetable = await db.query(sqlquery, { type: QueryTypes.SELECT });
      
      if (selectedtimetable) {
        res.status(200).json({selectedtimetable});
        console.log(selectedtimetable);
      } else {
        res.status(404).json({ message: 'Course ID not found' });
      }
  } catch (error) {
    console.log(error.message);
  }
};



exports.viewPublicNewTimetable = async (req, res) => {
  const { id } = req.params;
  console.log("courseid: " + id);

  // const sqlquery =
  // "SELECT t.*, c.coursename, c.courseStream, c.coursesubject, u.fullname FROM timetable t INNER JOIN courses c ON t.cunit = c.id INNER JOIN users u ON u.id = c.userId WHERE c.courseStream LIKE '%" +
  // id +
  // "%';";

  const sqlquery = `
    SELECT t.*, c.coursename, c.courseStream, c.coursesubject, u.fullname
    FROM timetable t
    INNER JOIN courses c ON t.cunit = c.id
    INNER JOIN users u ON u.id = c.userId
    WHERE c.courseStream LIKE '%${id}%'
      AND (
        (YEAR(t.cdate) = ${currentYear} AND MONTH(t.cdate) = ${currentMonth} AND DAY(t.cdate) >= ${currentDate.getDate()})
        OR (YEAR(t.cdate) = ${currentYear} AND MONTH(t.cdate) = ${nextMonth})
      )
  `;


  try {
      const selectedtimetable = await db.query(sqlquery, { type: QueryTypes.SELECT });
      
      if (selectedtimetable) {
        res.status(200).json({selectedtimetable});
        console.log(selectedtimetable);
      } else {
        res.status(404).json({ message: 'Course ID not found' });
      }
  } catch (error) {
    console.log(error.message);
  }
};


exports.viewPublicSubjectNewTimetable = async (req, res) => {
  const { id } = req.params;
  console.log("courseid: " + id);

  // const sqlquery =
  // "SELECT t.*, c.coursename, c.courseStream, c.coursesubject, u.fullname FROM timetable t INNER JOIN courses c ON t.cunit = c.id INNER JOIN users u ON u.id = c.userId WHERE c.coursesubject LIKE '%" +
  // id +
  // "%';";

  const sqlquery = `
    SELECT t.*, c.coursename, c.courseStream, c.coursesubject, u.fullname
    FROM timetable t
    INNER JOIN courses c ON t.cunit = c.id
    INNER JOIN users u ON u.id = c.userId
    WHERE c.coursesubject LIKE '%${id}%'
      AND (
        (YEAR(t.cdate) = ${currentYear} AND MONTH(t.cdate) = ${currentMonth} AND DAY(t.cdate) >= ${currentDate.getDate()})
        OR (YEAR(t.cdate) = ${currentYear} AND MONTH(t.cdate) = ${nextMonth})
      )
  `;

  try {
      const selectedtimetable = await db.query(sqlquery, { type: QueryTypes.SELECT });
      
      if (selectedtimetable) {
        res.status(200).json({selectedtimetable});
        console.log("subject timetable:");
        console.log(selectedtimetable);
      } else {
        res.status(404).json({ message: 'Course ID not found' });
      }
  } catch (error) {
    console.log(error.message);
  }
};


exports.viewPublicSubjectTeachers = async (req, res) => {
  const { id } = req.params;
  console.log("courseid: " + id);

  // const sqlquery =
  // "SELECT Distinct u.fullname, u.gender FROM timetable t INNER JOIN courses c ON t.cunit = c.id INNER JOIN users u ON u.id = c.userId WHERE c.coursesubject LIKE '%" +
  // id +
  // "%';";

  const sqlquery = `
    SELECT DISTINCT u.fullname, u.gender, u.email, u.tel,  c.coursesubject
    FROM courses c
    INNER JOIN timetable t ON c.id = t.cunit
    INNER JOIN users u ON c.userId = u.id
    WHERE c.coursesubject LIKE '%${id}%';
  `;

  try {
      const selectedteachers = await db.query(sqlquery, { type: QueryTypes.SELECT });
      
      if (selectedteachers) {
        res.status(200).json({selectedteachers});
        console.log("selectedteacherssss");
        console.log(selectedteachers);
      } else {
        res.status(404).json({ message: 'Course ID not found' });
      }
  } catch (error) {
    console.log(error.message);
  }
};


exports.viewPublicStreamTeachers = async (req, res) => {
  const { id } = req.params;
  console.log("courseid: " + id);

    //   const sqlquery = `
    //   SELECT DISTINCT u.fullname, u.gender
    //   FROM timetable t
    //   INNER JOIN courses c ON t.cunit = c.id
    //   INNER JOIN users u ON u.id = c.userId
    //   WHERE c.courseStream LIKE '%${id}%';
    // `;

    const sqlquery = `
    SELECT DISTINCT u.fullname, u.gender, u.email, u.tel,  c.coursesubject
    FROM courses c
    INNER JOIN timetable t ON c.id = t.cunit
    INNER JOIN users u ON c.userId = u.id
    WHERE c.courseStream LIKE '%${id}%';
  `;

  try {
      const selectedteachers = await db.query(sqlquery, { type: QueryTypes.SELECT });
      
      if (selectedteachers) {
        res.status(200).json({selectedteachers});
        console.log("selectedteacherssss");
        console.log(selectedteachers);
      } else {
        res.status(404).json({ message: 'Course ID not found' });
      }
  } catch (error) {
    console.log(error.message);
  }
};







exports.streamsubjects = async (req, res) => {
  const { id } = req.params;
  console.log("courseid: " + id);

  const sqlquery =
  "SELECT Distinct c.coursesubject FROM timetable t INNER JOIN courses c ON t.cunit = c.id INNER JOIN users u ON u.id = c.userId WHERE c.courseStream LIKE '%" +
  id +
  "%';";

  try {
      const selectedsubjects = await db.query(sqlquery, { type: QueryTypes.SELECT });
      
      if (selectedsubjects) {
        res.status(200).json({selectedsubjects});
        console.log(selectedsubjects);
      } else {
        res.status(404).json({ message: 'Course ID not found' });
      }
  } catch (error) {
    console.log(error.message);
  }
};



exports.timecourseId = async (req, res) => {
  const timeId = req.params.id;
  console.log("courseid: " + timeId);

  const sesql =
  "SELECT timetable.cunit FROM timetable WHERE id = '" +
    timeId +
    "';";

  try {
    const timetable = await db.query(sesql, { type: QueryTypes.SELECT });
    if (timetable) {
      res.status(200).json({ courseIdnew: timetable});
    } else {
      res.status(404).json({ message: 'Course ID not found' });
    }
  } catch (error) {
    console.log('Error in fetching course:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


exports.timecourse = async (req, res) => {
  const timeId = req.params.id;
  console.log("courseid: " + timeId);

  const query =
    "SELECT courses.* FROM courses INNER JOIN timetable ON courses.id = timetable.cunit WHERE timetable.id = :timeId";

  try {
    const courses = await db.query(query, {
      replacements: { timeId },
      type: QueryTypes.SELECT
    });

    if (courses.length > 0) {
      const course = courses[0];
      res.status(200).json({ course });
    } else {
      res.status(404).json({ message: 'Course Data not found' });
    }
  } catch (error) {
    console.log('Error in fetching course:', error);
    res.status(500).json({ message: 'Internal server errors' });
  }
};


// exports.timecourseName = async (req, res) => {
//   try {
//     const timeId = req.params.id;
//     console.log("Timetableid: " + timeId);
//     const timetable = await Timetable.findOne({ where: { id: timeId } });
//     if (timetable) {
//       res.status(200).json({ courseId: timetable.cunit });
//     } else {
//       res.status(404).json({ message: 'Course ID not found' });
//     }
//   } catch (error) {
//     console.log('Error in fetching course:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

exports.updateTimeTable = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;

    // Update the time table data in your database
    const updatedData = await Timetable.update(newData, {
      where: { id: id },
    });

    res.json(updatedData);
  } catch (error) {
    console.error('Error updating time table data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};




