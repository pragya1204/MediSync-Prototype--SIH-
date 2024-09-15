// Replace with your actual backend endpoint
const endpoint = 'http://localhost:3001/api/patient-details';

async function fetchPatientDetails() {
  try {
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Show loading spinner
    loadingOverlay.style.display = 'block';

    // Fetch patient details from the backend
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log('Fetched data:', data); // Debugging log

    // Hide the loading spinner after the content is ready
    setTimeout(() => {
      loadingOverlay.style.display = 'none'; // Hide the loading overlay
      
      // Update the HTML elements with the fetched data
      document.getElementById('patientName').textContent = data.name;
      document.getElementById('patientAge').textContent = data.age;
      document.getElementById('patientId').textContent = data.patientId;
      document.getElementById('tokenNumber').textContent = data.tokenNumber;
    }, 3000); // Simulate a 3-second delay

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    // Optionally handle errors, such as displaying an error message
  }
}

// Trigger the function when the page has loaded
document.addEventListener("DOMContentLoaded", fetchPatientDetails);



