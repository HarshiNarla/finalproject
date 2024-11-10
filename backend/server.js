const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Ensure this import is correct
const authRoutes = require('./routes/auth');
const serviceRoutes = require('./routes/services');

dotenv.config();
const app = express();

// Connect to the database
connectDB(); // This should now work if connectDB is exported correctly

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', serviceRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
