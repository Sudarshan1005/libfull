// // StudentCheckInOut.jsx
// import React, { useState } from 'react';
// import QRCodeScanner from './QRCodeScanner';
// import axios from 'axios';

// const StudentCheckInOut = () => {
//   const [scannedData, setScannedData] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
//   const [error, setError] = useState(null);

//   const handleScan = async (data) => {
//     try {
//       console.log('Scanned Data:', data);

//       // Check if the scanned data matches the previous scanned data
//       if (data === scannedData) {
//         // If the same QR code is scanned again, trigger the check-out API request
//         const response = await axios.post('http://localhost:3001/library/check-out', {
//           registrationNumber: data,
//         });
//         console.log('Check-out API Response:', response.data);
//         setResponseMessage(response.data);
//       } else {
//         // If it's a new QR code, trigger the check-in API request
//         const response = await axios.post('http://localhost:3001/library/check-in', {
//           registrationNumber: data,
//         });
//         console.log('Check-in API Response:', response.data);
//         setResponseMessage(response.data);
//       }

//       // Update the state with the scanned data
//       setScannedData(data);
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="student-check-in-out">
//       <h2>Student Check-In/Check-Out</h2>
//       <QRCodeScanner onScan={handleScan} />

//       {responseMessage && (
//         <div className="response-message success">
//           <p>{responseMessage}</p>
//         </div>
//       )}

//       {error && (
//         <div className="response-message error">
//           <p>{error}</p>
//         </div>
//       )}

//       {scannedData && (
//         <div className="scanned-data">
//           <p>Registration Number: {scannedData}</p>
//           {/* Add check-in/check-out buttons or other UI elements */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentCheckInOut;
// StudentCheckInOut.jsx
import React, { useState } from 'react';
import QRCodeScanner from './QRCodeScanner';
import axios from 'axios';

const StudentCheckInOut = () => {
  const [scannedData, setScannedData] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState(null);

  const handleScan = async (data) => {
    try {
      console.log('Scanned Data:', data);

      // Make API request to check-in or check-out endpoint
      const response = await axios.post('http://localhost:3001/library/check-in-out', {
        registrationNumber: data,
      });

      console.log('API Response:', response.data);

      // Handle the response message
      setResponseMessage(response.data);

      // Update the state with the scanned data
      setScannedData(data);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="student-check-in-out">
      <h2>Student Check-In/Check-Out</h2>
      <QRCodeScanner onScan={handleScan} />

      {responseMessage && (
        <div className="response-message success">
          <p>{responseMessage}</p>
        </div>
      )}

      {error && (
        <div className="response-message error">
          <p>{error}</p>
        </div>
      )}

      {scannedData && (
        <div className="scanned-data">
          <p>Registration Number: {scannedData}</p>
          {/* Add check-in/check-out buttons or other UI elements */}
        </div>
      )}
    </div>
  );
};

export default StudentCheckInOut;

