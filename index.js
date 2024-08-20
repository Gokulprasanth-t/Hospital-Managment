// Import necessary modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const createExpressApp = require('./express');

// Load environment variables from .env file
dotenv.config();

// Create Express application instance
const app = createExpressApp();

// Retrieve port and MongoDB URI from environment variables
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// Function to start the server and connect to MongoDB
const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

// Start the server
startServer();
