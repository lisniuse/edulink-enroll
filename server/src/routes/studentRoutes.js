const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

const {
  getAvailableClasses,
  registerForClass,
  deRegisterFromClass
} = require('../controllers/studentController');

router.get('/classes', protect, getAvailableClasses);
router.post('/classes/register', protect, registerForClass);
router.post('/classes/deregister', protect, deRegisterFromClass);

module.exports = router;
