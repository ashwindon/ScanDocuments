// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { motion } from 'framer-motion';
// import './App.css';

// function App() {
//   const [files, setFiles] = useState([]);
//   const [analysisResult, setAnalysisResult] = useState(null);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);

//   const onDrop = useCallback((acceptedFiles) => {
//     // Add newly dropped files to the state
//     setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const handleAnalyze = () => {
//     setIsAnalyzing(true);
//     setAnalysisResult(null);

//     // Simulate a dummy API call with setTimeout
//     setTimeout(() => {
//       // Example analysis result
//       const dummyResult = {
//         status: 'Success',
//         summary: 'Analysis Complete.',
//         details:
//           'No major issues found in the uploaded document(s). Everything looks good!',
//       };
//       setAnalysisResult(dummyResult);
//       setIsAnalyzing(false);
//     }, 2000);
//   };

//   return (
//     <div className="container">
//       {/* Left Section */}
//       <motion.div
//         className="left-section"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div
//           {...getRootProps()}
//           className={`dropzone ${isDragActive ? 'dropzone-active' : ''}`}
//         >
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p>Drop the files here ...</p>
//           ) : (
//             <p>Drag & drop some files here, or click to select files</p>
//           )}
//         </div>

//         <motion.button
//           className="analyze-button"
//           disabled={files.length === 0 || isAnalyzing}
//           onClick={handleAnalyze}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {isAnalyzing ? 'Analyzing...' : 'Analyze'}
//         </motion.button>
//       </motion.div>

//       {/* Right Section */}
//       <motion.div
//         className="right-section"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2>Analysis Results</h2>
//         {analysisResult ? (
//           <motion.div
//             className="analysis-box"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <p><strong>Status:</strong> {analysisResult.status}</p>
//             <p><strong>Summary:</strong> {analysisResult.summary}</p>
//             <p><strong>Details:</strong> {analysisResult.details}</p>
//           </motion.div>
//         ) : (
//           <p>No analysis yet. Upload files and click "Analyze".</p>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Simulate a dummy API call
    setTimeout(() => {
      const dummyResult = {
        status: 'Success',
        summary: 'Analysis Complete.',
        details: 'No major issues found in the uploaded document(s).',
      };
      setAnalysisResult(dummyResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="container">
      {/* Left Section */}
      <motion.div
        className="left-section"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          {...getRootProps()}
          className={`dropzone ${isDragActive ? 'dropzone-active' : ''}`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop some files here, or click to select files</p>
          )}
        </div>

        <motion.button
          className="analyze-button"
          disabled={files.length === 0 || isAnalyzing}
          onClick={handleAnalyze}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze'}
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="right-section"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Analysis Results</h2>
        {analysisResult ? (
          <motion.div
            className="analysis-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              <strong>Status:</strong> {analysisResult.status}
            </p>
            <p>
              <strong>Summary:</strong> {analysisResult.summary}
            </p>
            <p>
              <strong>Details:</strong> {analysisResult.details}
            </p>
          </motion.div>
        ) : (
          <p>No analysis yet. Upload files and click "Analyze".</p>
        )}
      </motion.div>
    </div>
  );
}

export default App;

