const User = require('../models/user');
const Class = require('../models/class');

const getAvailableClasses = async (req, res) => {
  try {
    const classes = await Class.find({});
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const registerForClass = async (req, res) => {
  const { classId } = req.body;
  const student = req.user
  const classToRegister = await Class.findById(classId);
  if (!classToRegister) {
    return res.status(404).json({ error: 'Class not found' });
  }

  classToRegister.students.push(student._id);

  await classToRegister.save();

  res.json({ message: 'Registered for class successfully' });
}

const deRegisterFromClass = async (req, res) => {
  const { classId } = req.body;
  const student = req.user
  const classToDeRegister = await Class.findById(classId);
  if (!classToDeRegister) {
    return res.status(404).json({ error: 'Class not found' });
  }

  classToDeRegister.students = classToDeRegister.students.filter(studentId => studentId.toString() !== student._id.toString());
  await classToDeRegister.save();
  res.json({ message: 'De-registered from class successfully' });
}

module.exports = { getAvailableClasses, registerForClass, deRegisterFromClass };