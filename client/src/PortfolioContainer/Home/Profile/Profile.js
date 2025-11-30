import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import ScrollService from '../../../utilities/scrollService';

function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>

                <div className='colz'>
                  <div className='colz-icon'>
                    <a href='https://www.facebook.com/impalansh/'>
                    <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href='https://www.instagram.com/_invincible_.12/'>
                    <i className="fa fa-instagram"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/anshumalishaw1204/'>
                    <i className="fa fa-linkedin"></i>
                    </a>
                    <a href='https://github.com/bagofcodes'>
                    <i className="fa fa-github"></i>
                    </a>
                  </div>
                </div> 
                {/* End of colz-div */}

                <div className='profile-details-name'>
                  <span className='primary-text'>
                    {" "}
                    Hello I'm <span className='highlighted-text'>Anshumali Shaw</span>

                  </span>
                </div> {/* End of profile-details-name-div */}

                <div className='profile-details-role'>
                  <span className='primary-text'>
                    {" "}
                    <h1>
                      {" "}
                      <Typical
                        loop={Infinity}
                        steps={[
                          "SE@Redbus (Dynamic Pricing)",3000,
                          "Ex-SDET@Redbus",2500,
                          "Trailblazer Award Recipient — Twice 🏆",3500,
                          "3⭐ Coder @Codechef",2500,
                        ]} 
                      
                      />
                      
                    </h1>
                    <span className='profile-role-tagline'>
                        An unquenching thirst to build something new forever...!!!
                    </span>
                  </span>

                </div>

                <div className='profile-options'>
                  <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
                  <a href="ashawresume.pdf" download='AnshumaliShaw Resume.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                  </a>
                </div>
            </div>

            <div className='profile-picture'>
              <div className='profile-picture-background'>

              </div>

            </div>

        </div>

    </div>
  )
}

export default Profile