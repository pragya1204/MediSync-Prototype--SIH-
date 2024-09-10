// Replace with your actual backend endpoint
const endpoint = 'http://localhost:3000/api/patient-details';

// Function to fetch patient details from the backend
async function fetchPatientDetails() {
  try {
    // Show the alert before fetching details
    alert("Patient details will be displayed in 3 seconds.");

    // Fetch the patient details from the backend
    const response = await fetch(endpoint);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    // Parse the JSON data
    const data = await response.json();

    // Simulate a 3-second delay before displaying the data
    setTimeout(() => {
      // Update the HTML elements with the fetched data
      document.getElementById('patientName').textContent = data.name;
      document.getElementById('patientAge').textContent = data.age;
      document.getElementById('patientId').textContent = data.patientId;
      document.getElementById('tokenNumber').textContent = data.tokenNumber;
    }, 3000); // 3000 milliseconds = 3 seconds delay

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Call the function to fetch and display patient details
fetchPatientDetails();


