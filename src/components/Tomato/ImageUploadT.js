import React, { useState, useRef } from 'react';
import axios from 'axios';
import './imageUploadT.css';
import Navbar from './Title';

function ImageUploadT() {
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
      const response = await axios.post('http://localhost:8000/predictTomato', formData);
      setPrediction(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='informationT'>
        <div className='titleT'>
          <p>Information</p>
        </div>
        <p>Here's some brief information about each of the tomato plant diseases.</p>
        <p><u style={{color:"#9F0000"}}>1.Tomato Bacterial Spot</u>: This disease is caused by the bacterium Xanthomonas campestris. It results in dark, raised spots with a yellow halo on the leaves, stems, and fruits of tomato plants. It can lead to defoliation and reduced fruit quality.</p>
        <p><u style={{color:"#9F0000"}}>2.Tomato Early Blight</u>: Early blight is caused by the fungus Alternaria solani. It causes dark, concentric rings on the lower leaves of tomato plants. As the disease progresses, leaves turn yellow, wither, and eventually die. It can affect both foliage and fruits.</p>
        <p><u style={{color:"#9F0000"}}>3.Tomato Late Blight</u>: Late blight, caused by the water mold Phytophthora infestans, is a serious disease that affects both tomato and potato plants. It causes dark, greasy spots on leaves, stems, and fruits. Infected tissues may appear water-soaked, and a white mold may develop under humid conditions.</p>
        <p><u style={{color:"#9F0000"}}>4.Tomato Leaf Mold</u>: Leaf mold is caused by the fungus Passalora fulva (formerly known as Fulvia fulva). It primarily affects the foliage of tomato plants, resulting in yellowing leaves with distinct, pale-green patches. The undersides of the leaves may develop a fuzzy, olive-colored mold.</p>
        <p><u style={{color:"#9F0000"}}>5.Tomato Septoria Leaf Spot</u>: This disease is caused by the fungus Septoria lycopersici. It leads to the formation of small, circular spots with dark centers and yellow halos on the lower leaves of tomato plants. As the disease progresses, leaves may turn yellow and defoliate.</p>
        <p><u style={{color:"#9F0000"}}>6.Tomato Spider Mites (Two-Spotted Spider Mite)</u>: Spider mites are tiny arachnids that can infest tomato plants. They feed on the plant sap, causing yellowing and speckling on the leaves. The presence of fine webbing on the undersides of leaves is a common sign of infestation.</p>
        <p><u style={{color:"#9F0000"}}>7.Tomato Target Spot</u>: Target spot is caused by the fungus Corynespora cassiicola. It causes circular, dark spots with concentric rings on the leaves of tomato plants. Infected leaves may turn yellow, wither, and drop prematurely.</p>
        <p><u style={{color:"#9F0000"}}>8.Tomato Yellow Leaf Curl Virus</u>: This viral disease is transmitted by whiteflies. Infected tomato plants show curling, yellowing, and upward cupping of leaves. The growth of the plant may be stunted, and the fruits may exhibit abnormalities.</p>
        <p><u style={{color:"#9F0000"}}>9.Tomato Mosaic Virus</u>: Tomato mosaic virus (ToMV) is a common viral disease affecting tomato plants. It causes mottled, light and dark green patterns on leaves, along with stunted growth. Infected fruits may exhibit discoloration and distorted shapes.</p>
        <p><u style={{color:"#9F0000"}}>10.Tomato Healthy</u>: This refers to a healthy tomato plant without any signs of disease. Healthy tomato plants exhibit vibrant green leaves, vigorous growth, and produce normal, unblemished fruits.</p>
        <p>Our goal is to predict whether the tomato plant leaf is prone to any of these nine diseases based on visual cues.</p>
        <h1>Choose Image</h1>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="image-previewT">
            {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Preview" />}
        </div>
        <div className="file-inputT">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </div>

        {
          selectedFile && <button type="submit" className="predict-buttonT">
          Predict
        </button>
        }
        
        
      </form>

      {prediction && (
        <div className='predictionsT'>
          <h2>Prediction:</h2>
          <p>Disease: {prediction.class}</p>
          <p>Confidence: {(prediction.confidence * 100).toFixed(2)} %</p>
        </div>
      )}
    </div>
  );
}

export default ImageUploadT;
