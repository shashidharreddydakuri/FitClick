import React from 'react'
import vid from './LATERAL-RAISES.mp4'
// import ScriptTag from 'react-script-tag';
// import vid from './hero.mp4';
const Lateralraises=()=>{
    return(
        <div>
        <body>
  
  {/* <!-- <h2>Do as the video shows, and we will help you with it.</h2> --> */}
  <div className="c2">
    <div className="c1">
      <video id="v1" className="center" width="350px" height="350px" autoPlay playsInline muted loop>
                    <source  src={vid} type="video/mp4"/>
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
{/* <footer className="footer">
  <div className="footer-content-container">
    <div className="footer-content">
      <a href="#" className="link footer-logo">LATERAL RAISES</a>
      <ul className="card-info-list">
        <li className="card-info-item">Stand tall, a dumbbell in each hand. Arms are at your sides, palms facing in.
          Position your feet roughly hip-distance apart. Check your posture—roll your shoulders back, engage your core,
          and look straight ahead.</li>
        <li className="card-info-item">Raise your arms simultaneously just a couple inches out to each side and pause.
        </li>
        <li className="card-info-item">Lift the dumbbells up and out to each side, keeping your arms almost completely
          straight, stopping when your elbows reach shoulder-height and your body is forming a "T" shape. Breathe in as
          you lift.</li>
        <li className="card-info-item">Lower the weights slowly, bringing your arms back to your sides. Breathe out as you
          lower the dumbbells.</li>
      </ul>
    </div>
</footer> */}

</div>
    )
}
export default Lateralraises; 