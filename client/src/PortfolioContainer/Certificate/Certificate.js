import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/scrollService';
import Animations from '../../utilities/Animations';



import icpc from "../../assets/img/Certificates/icpc.jpg";
import benga from "../../assets/img/Certificates/bengalathon.jpg";
import sparks from "../../assets/img/Certificates/sparks.jpg";
import resum from "../../assets/img/Certificates/resume.jpeg";
import './Certificate.css';

export default function Certificate(props) {

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      };
      


  return (
    <div>
        <ScreenHeading  title={'Certificates And Achievements'} subHeading={"Some of the notable Certifications and Achievements"}/>

        <section className='certificate-section fade-in' id= {props.id || ""}>

            <div className='container'>
                <div className='row'>
                    <OwlCarousel className='owl-carousel' id="certificate-carousel" {...options}>
                        <div className='col-lg-12'>
                            <div className='cert-item'>
                                <div className='cert-img'>
                                    <a href={icpc} target='_blank' >
                                        <img src={icpc} alt='No Internet Connection'/>
                                    </a>
                                </div>
                                <div className='cert-desc'>
                                    <span>ICPC Regionals(Amritapuri)</span>

                                </div>

                            </div>

                        </div>
                        <div className='col-lg-12'>
                            <div className='cert-item'>
                                <div className='cert-img'>
                                    <a href={benga} target='_blank' >
                                        <img src={benga} alt='No Internet Connection'/>
                                    </a>
                                </div>
                                <div className='cert-desc'>
                                    <span>Bengalathon 2019 Finals</span>

                                </div>

                            </div>

                        </div>
                        <div className='col-lg-12'>
                            <div className='cert-item'>
                                <div className='cert-img'>
                                    <a href={sparks} target='_blank' >
                                        <img src={sparks} alt='No Internet Connection'/>
                                    </a>
                                </div>
                                <div className='cert-desc'>
                                    <span>App Developement Internship Certificate</span>

                                </div>

                            </div>

                        </div>
                        <div className='col-lg-12'>
                            <div className='cert-item'>
                                <div className='cert-img'>
                                    <a href={resum} target='_blank' >
                                        <img src={resum} alt='No Internet Connection'/>
                                    </a>
                                </div>
                                <div className='cert-desc'>
                                    <span>Best Resume Certificate</span>

                                </div>

                            </div>

                        </div>
                    </OwlCarousel>
                    
                </div>
            
            </div>

        </section>
        <div className="footer-image">
            <img src={require("../../assets/Certificate/shape-bg.png").default} alt="No Internet" />
        </div>
    </div>
  )
}
