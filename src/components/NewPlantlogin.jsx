import React, { useState } from "react";
import { getInitationTime } from '../routes/timer/timer';

const NewPlant = () => {
  const [plantName, setPlantName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [wateringCycle, setWateringCycle] = useState('');
  const [watered, setWatered] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    getInitationTime();
    setPreviewVisible(true);
  }

  return (
    <div className="slideshow-container p-3" style={{ backgroundColor: '#E6F8B2' }}>
      {previewVisible && (
        <div className="container card p-3" style={{ backgroundColor: '#E6F8B2' }}>
          <h2 className="card-body">Preview:</h2>
          <div className="row card-body">

            <h3 className="card-title"><b>Plant name: </b></h3>
            <p>"{plantName}"</p>
            <p className="card-text"><b>Additional info:</b></p> <p>{additionalInfo}</p>
            <p className="card-text"><b>Watering cycle:</b> </p><p>{wateringCycle}</p>
            <p className="card-text"><b>Watered:</b></p> <p>{watered ? 'Yes' : 'No'}</p>
            <img src={URL.createObjectURL(image)} alt={plantName} style={{ maxWidth: '200px' }} />
          </div>
        </div>
      )}
      <form className="NewUser" onSubmit={handleSubmit} style={{ backgroundColor: '#E6F8B2' }}>
        <div className="card-body" style={{ backgroundColor: '#E6F8B2' }}>
          <h3 className="card-title">New Plant</h3>
          <div className="form-group">
            <label for="plantName">Plant name:</label>
            <input type="text" className="form-control" id="plantName" name="plantName" placeholder="Your plant's name..." onChange={(e) => setPlantName(e.target.value)} />
          </div>
          <div className="form-group">
            <label for="additionalInfo">Additional info:</label>
            <textarea className="form-control" id="additionalInfo" name="additionalInfo" placeholder="Write something..." onChange={(e) => setAdditionalInfo(e.target.value)} />
          </div>
          <div className="form-group">
            <label for="wateringCycle">Watering cycle:</label>
            <select className="form-control" id="wateringCycle" name="wateringCycle" onChange={(e) => setWateringCycle(e.target.value)}>
              <option value="week">Once a week</option>
              <option value="2week">Every two weeks</option>
              <option value="month">Once a month</option>
            </select>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="watered" onChange={(e) => setWatered(e.target.checked)} />
            <label className="form-check-label" for="watered">Plant has been watered:</label>
            <span id="js-initiation-time"></span>
          </div>
          <div className="form-group">
            <label for="image">Image:</label>
            <input type="file" className="form-control" id="image" name="image" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewPlant;