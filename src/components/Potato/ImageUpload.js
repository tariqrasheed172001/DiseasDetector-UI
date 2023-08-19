import React, { useState, useRef } from 'react';
import axios from 'axios';
import './imageUpload.css';
import Navbar from './Navbar';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:8000/predictPotato', formData);
      setPrediction(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='information'>
        <div className='title'>
          <p>Information</p>
        </div>
        <p>Late blight and early blight are two diseases that affect potato plants of the Solanaceae family. While the early blight is caused by the fungus Alternaria in relatively warmer temperatures, late blight is caused by the oomycete Phytophthora in cooler temperatures.</p>
        <p>We are going to classify whether the potato plant has late blight or early blight disease or if it is a healthy potato plant.</p>
        <h1>Choose image</h1>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="image-preview">
            {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Preview" />}
        </div>
        <div className="file-input">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </div>
        {
          selectedFile && <button type="submit" className="predict-button">
          Predict
        </button>
        }
        
      </form>

      {prediction && (
        <div className='predictions'>
          <h2>Prediction:</h2>
          <p>Disease: {prediction.class}</p>
          <p>Confidence: {(prediction.confidence * 100).toFixed(2)} %</p>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
