import React from "react";
import classes from "./LandingHeader.module.css";
import devices from "./landing-header-assets/devices.png";
import events from "./landing-header-assets/events.png";
import human from "./landing-header-assets/human.png";
import fb from "./landing-header-assets/reviews.png";
import logo from "./landing-header-assets/logo512.png";
import arrow from "./landing-header-assets/arrow.png";

const LandingHeader = () => {
  const reviews = [
    { icon: human, number: "2000", comment: "Happy Customers" },
    { icon: fb, number: "50", comment: "Reviews" },
    { icon: events, number: "1000", comment: "Events/Reminders Created" },
  ];
  return (
    <div className={classes.landingHeader}>
      <div className={classes.logoContainer}>
        {" "}
        <img className={classes.logo} src={logo} alt="" />
        <p className={classes.logoText}>
          company <span className={classes.green}>holiday calendar</span> plugin
        </p>
      </div>
      <div className={classes.bigCircle}></div>
      <nav className={classes.navContainer}>
        <ul>
          <li>
            <a href="#featues">Features</a>
          </li>
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <button>Install</button>
          </li>
        </ul>
      </nav>
      <div className={classes.banner}>
        <div className={classes.bannerDescription}>
          <h2>
            The most simplified and{" "}
            <span className={classes.green}>easy-to-use</span> company events
            tool you will ever use!
          </h2>
          <p>
            This simple tool allows you and your team to easily create and
            manage company events. Its user friendly calendar list view gives
            you and your team an helicopter view of company events for a
            particular month.
          </p>
          <button>Install</button>
        </div>
        <div className={classes.bannerImage}>
          <img src={devices} alt="" />
        </div>
      </div>
      <div className={classes.feedback}>
        {reviews.map((item, id) => (
          <div className={classes.iconContainer}>
            <div className={classes.feedbackimg}>
              <img src={item.icon} alt="" />
            </div>
            <div className={classes.feedbackDetail}>
              <span className={classes.main}>{item.number}+</span>
              <small className={classes.small}>{item.comment}</small>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.paragraph}>
        <p>
          Whether your events are in-person or virtual, this powerful tool
          boasts professional features that your team will love The company
          holiday calendar plugin is ready to go out of the box, just install
          and start creating and managing events.
        </p>
      </div>
      <div className={classes.tutorial}>
        <h3>Video Tutorial</h3>
        <div className={classes.videoContainer}>
          <video controls width="640" height="280" src=""></video>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
