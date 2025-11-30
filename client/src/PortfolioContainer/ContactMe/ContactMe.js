import React, {useState} from 'react';
import Typical from "react-typical";
import axios from 'axios';
import {toast} from 'react-toastify';

import imgBack from "../../assets/ContactMe/mailz.jpeg";
import load from "../../assets/ContactMe/load2.gif";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/scrollService';
import Animations from '../../utilities/Animations';

import "./ContactMe.css";
import Footer from '../Footer/Footer';

export default function ContactMe(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // 1. Basic input validation before sending request
    if (!name || !email || !message) {
      const msg = "Please fill all the fields";
      setBanner(msg);
      toast.error(msg);
      return;
    }

    try {
      setBool(true); // start loader

      const data = { name, email, message };
      console.log("Submitting form:", data);

      const res = await axios.post(`/contact`, data);

      if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);

        // Reset form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // fallback if server returns non-200
        setBanner(res.data.msg || "Something went wrong");
        toast.error(res.data.msg || "Something went wrong");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setBanner("Server error. Please try again later.");
      toast.error("Server error. Please try again later.");
    } finally {
      setBool(false); // stop loader regardless of success or error
    }
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Reach Me Out..!!"} />

      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={[
                "Get In Touch..!! 📧",
                2500,
                "Reach-out on Mail 📧",
                2500,
              ]}
            />
          </h2>
          <a href="https://www.facebook.com/impalansh/">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/_invincible_.12/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/anshumali-shaw12/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/bagofcodes">
            <i className="fa fa-github"></i>
          </a>
        </div>

        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email !</h4>
            <img src={imgBack} alt="Not found" />
          </div>

          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load} alt="No Img Found" />{" "}
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
