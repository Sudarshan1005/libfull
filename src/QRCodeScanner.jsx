
// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

// const QRCodeScanner = ({ onScan }) => {
//   const [data, setData] = useState('');

//   const handleScan = (result) => {
//     if (result) {
//       setData(result.text);
//       onScan(result.text); // Pass the scanned text to the parent component
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   return (
//     <div className="qr-code-scanner">
//       <QrReader
//         onResult={handleScan}
//         onError={handleError}
//         style={{ width: '100%' }}
//       />
//       {data && (
//         <div>
//           <p>Scanned Result: {data}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QRCodeScanner;
// QRCodeScanner.jsx
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = ({ onScan }) => {
  const [data, setData] = useState('');

  const handleScan = (result) => {
    if (result) {
      setData(result.text);
      onScan(result.text); // Pass the scanned text to the parent component
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="qr-code-scanner">
      <QrReader
        onResult={handleScan}
        onError={handleError}
        style={{ width: '100%' }}
      />
      {data && (
        <div>
          <p>Scanned Result: {data}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
