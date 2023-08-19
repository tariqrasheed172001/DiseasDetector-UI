import './App.css';
import potato from './Images/potato.png'
import tomato from './Images/tomato.png'


function App() {

  return (
    <div>
      <div className='header'>
        <p>DeepVision</p> 
      </div>
      <div className='cardss'>
        <div className="card" style={{width:"30rem",border:"1px solid lightgrey"}}>
        <img className="card-img-top" src={potato} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Potato Plant Disease Detector</h5>
          <p className="card-text">Our deep learning model has been trained to accurately classify potato plants and determine whether they are healthy or affected by various diseases. By analyzing images of potato plants, our model can quickly identify signs of diseases and provide valuable insights for farmers and plant enthusiasts.</p>
          <a href='potatoPrediction' style={{backgroundColor:"#203354",border:"#203354"}} className="btn btn-primary">Go Potato</a>
        </div>
      </div>
      <div className="card" style={{width:"30rem",border:"1px solid lightgrey"}}>
        <img className="card-img-top" src={tomato} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Tomato Plant Disease Detector</h5>
          <p className="card-text">Our state-of-the-art deep learning model has been trained to accurately classify tomato plants and determine whether they are healthy or affected by various diseases.Using a comprehensive dataset of labeled images, our model has learned to recognize and classify common tomato plant diseases, such as early blight, late blight, tomato mosaic virus, bacterial spot, etc.</p>
          <a href="tomatoPrediction" style={{backgroundColor:"#203354",border:"#203354"}}  className="btn btn-primary">Go Tomato</a>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default App;
