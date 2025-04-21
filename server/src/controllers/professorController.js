const User = require('../models/user');
const Class = require('../models/class');

const createClass = async (req, res) => {
  const professor = req.user;
  const { name } = req.body;
  const newClass = new Class({
    name,
    professor: professor._id,
  });
  await newClass.save();
  res.json({ message: 'Class created successfully' });
}

const getEnrolledStudents = async (req, res) => {
  const { classId } = req.params;
  const classDetails = await Class.findById(classId).populate('students');
  if (!classDetails) {
    return res.status(404).json({ error: 'Class not found' });
  }
  res.json(classDetails.students);
}

const getStudentsWithFewCourses = async (req, res) => {
  const allStudents = await User.find({ role: 'student' });
  const studentsWithFewCourses = allStudents.filter(student => student.courses.length < 3);

  res.json(studentsWithFewCourses);
}

const getAllStudents = async (req, res) => {
  const allStudents = await User.find({ role: 'student' });
  res.json(allStudents);
}

module.exports = {
  createClass,
  getEnrolledStudents,
  getStudentsWithFewCourses,
  getAllStudents,
};
