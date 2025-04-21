const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/database.js');
const authRoutes = require('./src/routes/authRoutes');
const studentRoutes = require('./src/routes/studentRoutes');
const professorRoutes = require('./src/routes/professorRoutes');

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/professors', professorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
