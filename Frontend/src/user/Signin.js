import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";
import Menu from '../core/Menu'
import Footer from '../core/Footer'
import hero from '../assets/sign.jpg';
import { signin, authenticate, isAutheticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
    <Menu/>
     <header className="header-section" onContextMenu={e=>e.preventDefault()}>
                {/* <video autoPlay playsInline muted loop className="hero-video">
                    <source  src={vid} type="video/mp4"/> */}
                    <img src={hero} alt="man lifting weights"/>
                    {/* Your browser does not support the video. Sorry for the inconvenience.
                </video> */}
                <div className="hero-heading">
                    <h1>
                       Signup<br/>
                    </h1>
                    <h4 className="">
                    {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()} <br/>
                    Just One Click away from the Fitness <br/>
                    </h4>
                    </div>
                    </header>
    <Footer/>
      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </div>
  );
};

export default Signin;
