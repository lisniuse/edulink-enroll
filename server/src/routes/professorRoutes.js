const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

const {
  createClass,
  getEnrolledStudents,
  getAllStudents
} = require('../controllers/professorController');

router.post('/classes/create', protect, createClass);
router.get('/classes/:classId/students', protect, getEnrolledStudents);
router.get('/students', protect, getAllStudents);

module.exports = router; 