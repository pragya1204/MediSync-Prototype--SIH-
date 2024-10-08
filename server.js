const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS to allow requests from the frontend
app.use(cors());

// Mock patient data
const patientData = {
  name: 'John Doe',
  age: 45,
  patientId: 'P123456',
  tokenNumber: 'T789012'
};

// Route to serve patient details
app.get('/api/patient-details', (req, res) => {
  // Simulating a delay to show the loading spinner in frontend
  setTimeout(() => {
    res.json(patientData);
  }, 1000); // 1-second delay before sending the response
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

