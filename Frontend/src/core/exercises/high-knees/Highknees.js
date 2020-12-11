import React from 'react'
import vid from './HIGH-KNEES.mp4'
// import ScriptTag from 'react-script-tag';
// import vid from './hero.mp4';
const Highknees=()=>{
    return(
        <div>
        <body>
  {/* <!-- <h2>Do as the video shows, and we will help you with it.</h2> --> */}
  <div className="c2">
    <div className="c1">
      <video id="v1" className="center" width="350px" height="350px" autoPlay playsInline muted loop>
                    <source  src={vid} type="video/mp4"/>
                    {/* <img src={hero} alt="man lifting weights"/> */}
                    Your browser does not support the video. Sorry for the inconvenience.
                </video>
      <div className="box1">
        <div id="par" className="center1"></div>
        <h1 id="instruction" className="main-heading">Too close to the camera</h1>
      </div>
    </div>
  </div>
  {/* <!-- <div id="positive">Good Job!</div>
    <div id ="negativeLow">Lower your hips!</div>
    <div id="negativeHigh">Raise your hips!</div> --> */}
</body>
<footer className="footer">
  <div className="footer-content-container">
    <div className="footer-content">
      <a href="#" className="link footer-logo">HIGH-KNEES</a>
      <ul className="card-info-list">
        <li className="card-info-item">Stand with your feet hip-width apart.</li>
        <li className="card-info-item">Lift up your left knee to your chest.</li>
        <li className="card-info-item">Switch to lift your right knee to your chest.</li>
        <li className="card-info-item">Continue the movement, alternating legs and moving at a sprinting or running pace.
        </li>
      </ul>
    </div>
    </div>
</footer>

</div>
    )
}
export default Highknees; 