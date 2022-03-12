import React,{useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/scrollService';
import Animations from '../../utilities/Animations';
import'./AboutMe.css';

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const Screen_Constants = {
        desc: "Full Stack Web Developer with knowledge of MERN STACK with Redux along with the knack of building applications with utmost efficiency. Strong Foundation in DSA with 3 Star @ Codechef. An enthusiastic learner who is confident enough to be an asset for any organization.",
        highlights: {
            bullets: [
                "Full Stack Web Development using MERN Stack",
                "Strong Knowledge of Data Structures and Algorithms using C++",
                "Worked with databases such as MongoDb and MySql",
                "Well versed with the version control system like Git/Github",
                "Building Rest APIs",
                "3 Star Coder @Codechef(Max Rating-1623)"
            ],
            heading: "Here are a few Highlights..!!"
        }
    }
    const renderHighlights = ()=>{
        return (
            Screen_Constants.highlights.bullets.map((value,i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}> 
        <div className='about-me-parent'>
            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
            <div className='about-me-card'>

                <div className='about-me-profile'></div>
                <div className='about-me-details'>
                    <span className='about-me-desc'>{Screen_Constants.desc}</span>
                    <div className='about-me-highlights'>
                        <div className='highlight-heading'>
                            <span>{Screen_Constants.highlights.heading}</span>
                        </div>
                        {renderHighlights()}
                    </div>
                    <div className='about-me-options'>
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
                        <a href="ashawresume.pdf" download='AnshumaliShaw Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
