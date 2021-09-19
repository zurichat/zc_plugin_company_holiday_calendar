import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import Companyholiday from "./features-images/Companyholiday.jpg";
import AddReminder from "./features-images/AddReminders.jpg";
import PersonalReminder from "./features-images/PersonalReminder.jpg";
import Custom from "./features-images/CustomEvent.png";
import LandingHeader from "./components/LandingHeader";
const Landing = () => {
  return (
    <div className="landing-page">
      <Link to="/calendar" className="calendar-plugin">
        Go To Plugin
      </Link>
      <LandingHeader />
      <div className="main-features-container">
        <section
          id="features"
          className="main-features-sections features-topics"
        >
          <h2>Features</h2>
          <p> (User-Friendly Features You’ll Love) </p>
        </section>
        <section className="main-features-sections main-create-events">
          <div className="create-events-left">
            <h3>
              {" "}
              Easily <span>Create Events</span>{" "}
            </h3>
            <p>
              {" "}
              Creating events is just by the click of a button. On the calendar
              main view, click on the<span>“CREATE EVENT” </span>
              button at the top right-hand-side of your screen and a simple
              popup form will leap out. Input your event details, hit
              <span>“CREATE”</span> and viola! Your event is created and ready
              to be seen company-wide.
            </p>
          </div>
          <div className="create-events-right">
            <img src={Companyholiday} alt="" />
          </div>
        </section>
        <section className="main-features-sections main-reminder">
          <div className="reminder-left">
            <img src={AddReminder} alt="" />
          </div>
          <div className="reminder-right">
            <h3> Add Reminders for All Your Team Members</h3>
            <p>
              As a team lead with access, you can easily add reminders to your
              events <span>company-wide</span>
              and help everyone in your organization <span>stay updated</span>.
            </p>
          </div>
        </section>
        <section className="main-features-sections main-personal-reminder">
          <div className="personal-reminder-left">
            <h3> Set Personal Reminders </h3>
            <p>
              {" "}
              The tool lets <span>employees set their own reminders.</span>
              If a team member wants to be reminded about an upcoming event, all
              they need is to select the event from the events list and select{" "}
              <span>“SET REMINDER”.</span>
            </p>
          </div>
          <div className="personal-reminder-left">
            <img src={PersonalReminder} alt="" />
          </div>
        </section>
        <section className="main-features-sections main-custom-event">
          <div className="custom-event-left">
            <img src={Custom} alt="" />
          </div>
          <div className="custom-event-right">
            <p>
              {" "}
              Reminders can be up to the last minute, customized and repeated
              with a single click of a button.
            </p>
          </div>
        </section>
      </div>
      <section className="features">
        <h2 className="title">OTHER FEATURES THAT WILL INTEREST YOU</h2>
        <ul>
          <li>Edit Event Details and Update Your Team</li>
        </ul>
        <p>
          Yes, emergencies happen and plans change. When they do happen and you
          have to make changes to your event,{" "}
          <span className="span-color">no need to worry</span> about creating a
          new event or sending bulk emails to notify everyone in your team. All
          you need is to click on the{" "}
          <span className="span-color">"EDIT EVENT"</span> icon on the
          right-hand-side of the events list and make your changes to your
          event. Then{" "}
          <span className="span-color">
            set a company-wide reminder to the next minute to alert all in your
            team of the update.
          </span>
        </p>
        <ul>
          <li>Add Helpful Information to Event Details</li>
        </ul>
        <p>
          You can add video, photo or other files to an event description
          helping your team get more information and all excited.
        </p>
        <ul>
          <li>Let Your Team Join Events Without Leaving Zurichat</li>
        </ul>
        <p>
          Easily add a virtual event web link (url) to your virtual events in
          the event details section when creating your event. All your
          organization members need to join the event is open the event details
          from the events list and click on the url.
        </p>
        <ul>
          <li>Plan Ahead</li>
        </ul>
        <p>
          With it’s user-friendly interface, the calendar{" "}
          <span className="span-color">displays a list of all events</span> in a
          single month. You and your team can easily plan ahead with a quick
          glance at this list.
        </p>
        <ul>
          <li>Never Miss An Important Company Event</li>
        </ul>
        <p>
          The event reminders feature helps you and your team to keep important
          events top-of-mind by means of appropriately set automated reminders
          via emails and/or sms.
        </p>
        <ul>
          <li>Save Time</li>
        </ul>
        <p>
          You and your team can save valuable time by using the{" "}
          <span className="span-color">in-app</span> company holiday calendar.
          You don’t need to juggle from one app or window to another in an
          effort to view your calendar. Everything is here on Zurichat.
        </p>
        <ul>
          <li>Accommodate Different Time Zones</li>
        </ul>
        <p>
          You have employees who work overseas or remote freelance workers in
          your team? Not to worry, they can create events and set reminders
          according to their preferred time zones.
        </p>
      </section>
      <section id="how-it-works" className="how-it-works">
        <h2 className="title">HOW IT WORKS</h2>
        <p className="sample">
          <span className="span-color">(Simple Walkthrough)</span>
        </p>
        <h4 className="subtitle">How To Install</h4>
        <p>
          Installing the plugin is easy and simple. Just click on the "install"
          button above while logged in, and the plugin will automatically be
          installed in your workspace
        </p>
        <h4 className="subtitle">How To Create Events</h4>
        <p>
          Creating events is accessible only to the admin or those he has
          granted access, Here are 5 easy steps to event creation:
        </p>
        <ol>
          <li>
            Select the{" "}
            <span className="span-color">Holiday Calendar Plugin</span> from the
            sidebar of Zurichat
          </li>
          <li>
            The event list view will open up on your screen. Click on{" "}
            <span className="span-color">"Create Event"</span> on the top
            right-hand-side of the screen. The event creation form will open as
            a popup
          </li>
          <li>
            Input your event details: Event title, start and end date/time,
            specify the time zone, add a description and tag, and select the
            event type from the dropdown
          </li>
          <li>
            Optionally set a{" "}
            <span className="span-color">company-wide reminder</span> by
            selecting the <span className="span-color">"Reminder"</span>
            tab. Add information to the popup form and set when and how you want
            the reminder delivered.
          </li>
          <li>
            Click <span className="span-color">"Create"</span>
          </li>
        </ol>
        <p>
          Your event is now created and will appear on the event list view of
          the holiday calendar plugin.
        </p>
        <h4 className="subtitle">How To Edit Event</h4>
        <ol>
          <li>
            On the calendar event list view, select the{" "}
            <span className="span-color">"Edit Event"</span> Icon seen towards
            the right-hand-side of the page.
          </li>
          <li>
            The edit event popup form will open. Edit the event details
            including title, description, date, and time.
          </li>
          <li>
            Click <span className="span-color">Save</span> to update your event
          </li>
        </ol>
        <p>P.S</p>
        <p>
          If at any point during the event editing you decide not to make the
          changes again, just click on the cancel to return to the event list
          view
        </p>
        <h4 className="subtitle">How To Delete An Event</h4>
        <p>
          On the calendar event list view, select the{" "}
          <span className="span-color">"Delete"</span> Icon and click on
          <span className="span-color">"Confirm Delete"</span> when prompted to
          permanently delete the event from your list of events
        </p>
        <p>P.S</p>
        <p>
          Once an event has been deleted, you can no longer see it again. So be
          sure you really want to delete the event before proceeding.
        </p>
        <h4 className="subtitle">How To Set Personal Reminders </h4>
        <ol>
          <li>
            Select the Desired event by clicking on it on the calendar event
            list view page.
          </li>
          <li>
            On the popup create reminders page, add a title to your reminder,
            set the date/time, set when and how you want the reminder delivered
          </li>
          <li>Click on "Save"</li>
        </ol>
        <p>
          Your reminder is set and you'll be notified of your upcoming event
        </p>
      </section>
      <footer>
        <h4>
          Ready To Start Creating Your First Company Event? Click "Install" Now
          And Let Us Begin!
        </h4>
        <button className="btn-install">Install</button>
        <article>
          <span>
            &copy; {new Date().getFullYear()} Zuri, Team Hemingway, All Rights
            Reserved.
          </span>
          <span className="links">
            <span>Privacy</span>&nbsp;&nbsp;&nbsp;
            <span>Terms</span>&nbsp;&nbsp;&nbsp;
            <span>Help Center</span>&nbsp;&nbsp;&nbsp;
            <span>Contact Us</span>
          </span>
        </article>
      </footer>
    </div>
  );
};

export default Landing;
