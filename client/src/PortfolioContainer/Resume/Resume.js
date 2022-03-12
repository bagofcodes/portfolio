import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/scrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css";

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [caraouselOffsetStyle, setCaraouselOffsetStyle] = useState({});


    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const ResumeHeading = (props)=>{
        return (
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                <span>{props.heading ? props.heading : "" }</span>
                {
                    props.fromDate && props.toDate ? (
                        <div className='heading-date'>{props.fromDate + "-" + props.toDate}</div>
                    ):(<div></div>)
                }
            </div>
            <div className='resume-sub-heading'>
                <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className='resume-heading-desc'>
                <span>{props.desc ? props.desc : ""}</span>

            </div>

        </div>);
        
    };


    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"}

    ];

    const programmingSkillsDetails = [
        {skill: "C++", rt: "90"},
        {skill: "Python", rt: "85"},
        {skill: "C", rt: "90"},
        {skill: "JavaScript", rt: "80"},
        {skill: "React", rt: "75"},
        {skill: "Express", rt: "75"},
        {skill: "MongoDB", rt: "75"},
        {skill: "HTML", rt: "85"},
        {skill: "CSS", rt: "80"},
        {skill: "Flutter", rt: "75"},
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "Feb-2022", toDate: "Mar-2022"},
            desc: "A Website Designed to showcase all my Details, Projects and Achievements to help you know me better.",
            subHeading: "Tech Stack Used:- ReactJS, Bootstrap."
        },
        {
            title: "Digital Clock And Reminder",
            duration: {fromDate: "Nov-2021", toDate: "Dec-2021"},
            desc: "It is a Simple Digital Clock App that also acts as a reminder where you can set the time of your wake up, lunch and nap and it will notify you with the same.",
            subHeading: "Tech Stack Used:- HTML, CSS, and JavaScript."
        },
        {
            title: "Banking System App",
            duration: {fromDate: "Dec-2020", toDate: "Jan-2021"},
            desc: "It was a Banking App designed for One to Many User Money Transfer.",
            subHeading: "Tech Stack Used:- Flutter and SqLite."
        },
    ];


    const resumeDetails = [

        // Education
        <div className='resume-screen-container' key="education">
            <ResumeHeading 
            heading={"Govt. College Of Engg. & Textile Technology,Berhampore"}
            subHeading ={"Bachelor In Technology(Computer Science & Engg). DGPA:- 8.80"}
            fromDate={"Aug-2017"} toDate={"July-2021"}
            />
            <ResumeHeading 
            heading={"Julien Day School, Kalyani Nadia"}
            subHeading ={"Intermediate. Percentage:- 92.5%"}
            fromDate={"Apr-2014"} toDate={"Mar-2015"}
            />
        </div>,

        // Work Experience
        <div className='resume-screen-container' key="work-experience">
            <div className='experience-container'>
                <ResumeHeading 
                heading={"Doubt Mentor(Intern)-Data Structures & Algo"}
                subHeading ={"PREPBYTES TECHNOLOGIES PRIVATE LIMITED"}
                fromDate={"Oct-2021"} toDate={"Present"}
                />
                <div className='experience-desc'>
                    <span className='resume-description-text'>
                        Currently Working as a Doubt Mentor Intern here.
                    </span>

                </div>
                <div className='experience-desc'>
                    <span className='resume-description-text'>
                        -Doubt Mentor for Students preparing for High-level Product Based Companies.
                    </span>
                    <br/>
                    <span className='resume-description-text'>
                        -Assist students with their doubts in Data Structures and Algorithms.
                    </span>
                    <br/>
                </div>
                <br/>
                <ResumeHeading 
                heading={"Summer Trainee"}
                subHeading ={"Webskitters Technology Solutions Pvt. Ltd."}
                fromDate={"Jun-2018"} toDate={"Jul-2018,"}
                />
                <div className='experience-desc'>
                    <span className='resume-description-text'>
                        Was a Web Developer Trainee here.
                    </span>
                </div>
                <div className='experience-desc'>
                    <span className='resume-description-text'>
                        -Completed my Industrial training in Php Developement.
                    </span>
                    <br/>
                    <span className='resume-description-text'>
                        -I was the group leader of my team and we successfully built a Website "Digital Attendance management System"
                         using Html,CSS and supported the back-end with Php.
                    </span>
                </div>

            </div>
        </div>,

        // Programming Skills

        <div className='resume-screen-container programming-skills-container' key="programming-skills">
            {programmingSkillsDetails.map((skills,i)=>(
                <div className='skill-parent' key={i}>
                    <div className='heading-bullet'></div>
                    <span>{skills.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{width: skills.rt + "%"}} className='active-percentage-bar'></div>
                    </div>
                </div>
            ))}

        </div>,

        // Projects
        <div className='resume-screen-container' key="projects">
            {
                projectDetails.map((project,i)=>(
                    <ResumeHeading 
                        key={i}
                        heading={project.title}
                        subHeading={project.subHeading}
                        desc={project.desc}
                        fromDate={project.duration.fromDate}
                        toDate={project.duration.toDate}
                    />
                ))
            }

        </div>,

        // Interests
        <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Graphics Designer"
          description="Apart from being a tech enthusiast and a code writer, i also love to do graphic designing such as poster making, digital art, logo making etc."
        />
        <ResumeHeading
          heading="Table Tennis"
          description="I love spending my time on the Table Tennis board which helps me freshen up my mind and keeps me in good shape."
        />
      </div>,

    ];



    const handleCarausal= (index)=>{
        let offSetHeight =360;
        let newCarauselOffSet ={
            style: {transform: "translateY(" + index * offSetHeight * -1 + "px)"},
        };

        setCaraouselOffsetStyle(newCarauselOffSet);
        setSelectedBulletIndex(index);
    };

    const getBullets = ()=>{
        return resumeBullets.map((bullet, i)=>(
            <div onClick={()=>handleCarausal(i)} className={i === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={i}>
                <img className='bullet-logo' 
                src={require(`../../assets/Resume/${bullet.logoSrc}`).default} alt='OOps Problem Occured!'/>
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    };

    const getResumeScreen = ()=>{
        return (
            <div style={caraouselOffsetStyle.style} className="resume-details-carousal">
                {resumeDetails.map((ResumeDetail)=> ResumeDetail)}

            </div>
        );
    }


  return (
    <div className='resume-container screen-container fade-in' id={props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>
                <div className='resume-bullet-details'>
                    {getResumeScreen()}
                </div>
            </div>

        </div>

    </div>
  )
}
