import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaSnapchat} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-container">
                <strong className="footer-subheading">JOIN US NOW</strong>
                <div className="footer-icons">
                    <FaFacebook className="footer-icon"/>
                    <FaInstagram className="footer-icon"/>
                    <FaTwitter className="footer-icon"/>
                    <FaSnapchat className="footer-icon"/>
                </div>
                <div className="footer-sub location">
                <strong className="footer-subheading">Location</strong>
                    <strong className="footer-desc">4th floor,GMR&GS complex,gachibowli,hyderabad</strong>
                    <strong className="footer-desc">Monday Through saturday (6AM to 8PM)</strong>
                    <strong className="footer-desc">sunday (6AM to 6PM)</strong>
                </div>
                <div className="alt-location">
                    <strong className="footer-subheading">Location</strong>
                    <span className="footer-desc">
                       HYDERABAD,GACHIBOWLI,GMR&GS COMPLEX,4th floor
                        <br/>
                        Monday through saturday (6AM to 8Pm). sunday (6AM to 6Pm)
                    </span>
                </div>

            <div className="wrapper">
              <div className="footer-sub">
                    <strong className="footer-subheading">Community</strong>
                    <small>Health Awareness</small>
                    <small>Sunday Yoga Camps</small>
                    <small>Blood Donation Camps</small>
                </div>
                
                <div className="footer-sub">
                    <strong className="footer-subheading">Services</strong>
                    <small>Personal Trainer</small>
                    <small> Nutriotional Guidances</small>
                    <small> Weight Loss Program</small>
                </div>
                <div className="footer-sub">
                    <strong className="footer-subheading">Privacy Policy</strong>
                    <strong className="footer-subheading">Terms of Service</strong>
                </div>
              </div>
              
                <span className="footer-subheading footer-copy">&copy;&nbsp;FitArt&nbsp; {currentYear}</span>
            </div>
        </footer>
    )
}

export default Footer
