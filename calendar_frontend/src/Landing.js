import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import PluginLogo from './assets/images/pluginLogo.png'
import Companyholiday from './assets/images/Companyholiday.jpg'
import AddReminder from './assets/images/AddReminders.jpg'
import PersonalReminder from './assets/images/PersonalReminder.jpg'
import Custom from './assets/images/CustomEvent.png'
import devices from './assets/images/devices.png'
import Vector from './assets/images/Vector.jpg'
import Vector2 from './assets/images/Vector2.jpg'
import { FaBars } from 'react-icons/fa'
import Vector1 from './assets/images/Vector1.jpg'
// import { ReactComponent as  Human} from "./assets/svgs/human.svg";
// import { ReactComponent as  Reviews} from "./assets/svgs/reviews.svg";
// import { ReactComponent as  Events} from "./assets/svgs/events.svg";
// import { ReactComponent as  Menu} from "./assets/svgs/menu.svg";
const Landing = () => {
  const [navOpen, setNavOpen] = useState(false)

  const openNav = () => {
    if (navOpen) {
      setNavOpen(false)
    } else {
      setNavOpen(true)
    }
  }

  const features = useRef(null)
  const howItWorks = useRef(null)

  return (
    <div className='landing-page'>
      <div className={`landing-nav${navOpen ? ' collapse' : ''}`}>
        <div className='nav-content'>
          <div className='nav-left'>
            <div className='logo-wrapper'>
              <div className='logo'>
                <img className='pluginLogo' src={PluginLogo} alt='' />
              </div>
              <div className='logo-text'>
                <p>
                  COMPANY <span className='green-text'>HOLIDAY</span>
                </p>
                <p>
                  <span className='green-text'>CALENDAR</span> PLUGIN
                </p>
              </div>
            </div>
            <div
              className='toggle-icon'
              onClick={() => {
                openNav()
              }}
            >
              <div className='menu-icon'>
                <FaBars className='drop-icon' />
              </div>
            </div>
          </div>
          <div className='nav-list-wrapper'>
            <div className='nav-list'>
              <span
                onClick={() => {
                  features.current.scrollIntoView({ behavior: 'smooth' })
                }}
                className='list'
              >
                Features
              </span>
              <span
                onClick={() => {
                  howItWorks.current.scrollIntoView({ behavior: 'smooth' })
                }}
                className='list'
              >
                How It Works
              </span>
              <span className='list'>Contact Us</span>
              <span className='list'>FAQs</span>
              <Link to='/calendar' className='calendar-plugin'>
                <button>Install</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='landing-intro'>
        <div className='intro-left'>
          <div>
            <h1>
              The most simplified and{' '}
              <span className='green-text'>easy-to-use</span> company events
              tool you will ever use!
            </h1>
          </div>
          <div>
            <p>
              This simple tool allows you and your team to easily create and
              manage company events. Its user-friendly calendar list view gives
              you and your team a helicopter view of company events for a
              particular month.
            </p>
          </div>
          <Link to='/calendar' className='calendar-plugin'>
            <button>Install</button>
          </Link>
        </div>
        <div className='intro-right'>
          <img className='intro-device-img' src={devices} alt='' />

          <div className='semi-circle'>{''}</div>
        </div>
      </div>
      <div className='landing-numbers'>
        <div className='landing-numbers-container'>
          <div>
            <img src={Vector} alt='' className='landing-numbers-icon' />
            <h3>2,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <img src={Vector2} alt='' className='landing-numbers-icon' />
            <h3>50+</h3>
            <p>Reviews</p>
          </div>
          <div>
            <img src={Vector1} alt='' className='landing-numbers-icon' />
            <h3>1,000+</h3>
            <p>Events/Reminders created</p>
          </div>
        </div>
      </div>
      <div className='landing-short-description'>
        <p>
          Whether your events are in-person or virtual, this powerful tool
          boasts professional features that your team will love. The company
          holiday calendar plugin is{' '}
          <span className='green-text'>ready to go out of the box</span>, just
          install and start creating and managing events.
        </p>
      </div>
      <div className='landing-video-tutorial'>
        <p>Video Tutorial</p>
        <video className='landing-video' src='' controls></video>
      </div>

      <div ref={features} className='main-features-container'>
        <section
          id='features'
          className='main-features-sections features-topics'
        >
          <h2>FEATURES</h2>
          <p> (User-Friendly Features You’ll Love) </p>
        </section>
        <section className='main-features-sections main-create-events'>
          <div className='create-events-left'>
            <h3>
              {' '}
              Easily <span>Create Events</span>{' '}
            </h3>
            <p>
              {' '}
              Creating events is just by the click of a button. On the calendar
              main view, click on the<span>“CREATE EVENT” </span>
              button at the top right-hand-side of your screen and a simple
              popup form will leap out. Input your event details, hit
              <span>“CREATE”</span> and viola! Your event is created and ready
              to be seen company-wide.
            </p>
          </div>
          <div className='create-events-right'>
            <img src={Companyholiday} alt='' />
          </div>
        </section>
        <section className='main-features-sections main-reminder'>
          <div className='reminder-right'>
            <h3>
              {' '}
              <span className='green-text'>Add Reminders</span> for All Your
              Team Members
            </h3>

            <p>
              As a team lead with access, you can easily add reminders to your
              events <span>company-wide </span>
              and help everyone in your organization <span>stay updated</span>.
            </p>
          </div>
          <div className='reminder-left'>
            <img src={AddReminder} />
          </div>
        </section>
        <section className='main-features-sections main-personal-reminder'>
          <div className='personal-reminder-left'>
            <h3>
              {' '}
              Set <span className='green-text'>Personal Reminders</span>{' '}
            </h3>
            <p>
              {' '}
              The tool lets <span>employees set their own reminders.</span>
              If a team member wants to be reminded about an upcoming event, all
              they need is to select the event from the events list and select{' '}
              <span>“SET REMINDER”.</span>
            </p>
          </div>
          <div className='personal-reminder-left'>
            <img src={PersonalReminder} alt='' />
          </div>
        </section>
        <section className='main-features-sections main-custom-event'>
          <div className='custom-event-left'>
            <p>
              {' '}
              Reminders can be up to the last minute,{' '}
              <span className='green-text'>customized </span>
              and <span className='green-text'>repeated </span>
              with{' '}
              <span className='green-text'>a single click of a button.</span>
            </p>
          </div>
          <div className='custom-event-right'>
            <img src={Custom} />
          </div>
        </section>
      </div>
      <section className='features'>
        <h2 className='title'>OTHER FEATURES THAT WILL INTEREST YOU</h2>
        <ul>
          <li>Edit Event Details and Update Your Team</li>
        </ul>
        <p>
          Yes, emergencies happen and plans change. When they do happen and you
          have to make changes to your event,{' '}
          <span className='span-color'>no need to worry</span> about creating a
          new event or sending bulk emails to notify everyone in your team. All
          you need is to click on the{' '}
          <span className='span-color'>"EDIT EVENT"</span> icon on the
          right-hand-side of the events list and make your changes to your
          event. Then{' '}
          <span className='span-color'>
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
          With it’s user-friendly interface, the calendar{' '}
          <span className='span-color'>displays a list of all events</span> in a
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
          You and your team can save valuable time by using the{' '}
          <span className='span-color'>in-app</span> company holiday calendar.
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
      <section ref={howItWorks} id='how-it-works' className='how-it-works'>
        <h2 className='title'>HOW IT WORKS</h2>
        <p className='sample'>
          <span className='span-color'>(Simple Walkthrough)</span>
        </p>
        <h4 className='subtitle'>How To Install</h4>
        <p>
          Installing the plugin is easy and simple. Just click on the "install"
          button above while logged in, and the plugin will automatically be
          installed in your workspace
        </p>
        <h4 className='subtitle'>How To Create Events</h4>
        <p>
          Creating events is accessible only to the admin or those he has
          granted access, Here are 5 easy steps to event creation:
        </p>
        <ol>
          <li>
            Select the{' '}
            <span className='span-color'>Holiday Calendar Plugin</span> from the
            sidebar of Zurichat
          </li>
          <li>
            The event list view will open up on your screen. Click on{' '}
            <span className='span-color'>"Create Event"</span> on the top
            right-hand-side of the screen. The event creation form will open as
            a popup
          </li>
          <li>
            Input your event details: Event title, start and end date/time,
            specify the time zone, add a description and tag, and select the
            event type from the dropdown
          </li>
          <li>
            Optionally set a{' '}
            <span className='span-color'>company-wide reminder</span> by
            selecting the <span className='span-color'>"Reminder"</span>
            tab. Add information to the popup form and set when and how you want
            the reminder delivered.
          </li>
          <li>
            Click <span className='span-color'>"Create"</span>
          </li>
        </ol>
        <p>
          Your event is now created and will appear on the event list view of
          the holiday calendar plugin.
        </p>
        <h4 className='subtitle'>How To Edit Event</h4>
        <ol>
          <li>
            On the calendar event list view, select the{' '}
            <span className='span-color'>"Edit Event"</span> Icon seen towards
            the right-hand-side of the page.
          </li>
          <li>
            The edit event popup form will open. Edit the event details
            including title, description, date, and time.
          </li>
          <li>
            Click <span className='span-color'>Save</span> to update your event
          </li>
        </ol>
        <p>P.S</p>
        <p>
          If at any point during the event editing you decide not to make the
          changes again, just click on the cancel to return to the event list
          view
        </p>
        <h4 className='subtitle'>How To Delete An Event</h4>
        <p>
          On the calendar event list view, select the{' '}
          <span className='span-color'>"Delete"</span> Icon and click on
          <span className='span-color'>"Confirm Delete"</span> when prompted to
          permanently delete the event from your list of events
        </p>
        <p>P.S</p>
        <p>
          Once an event has been deleted, you can no longer see it again. So be
          sure you really want to delete the event before proceeding.
        </p>
        <h4 className='subtitle'>How To Set Personal Reminders </h4>
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

        <Link to='/calendar' className='calendar-plugin'>
          <button className='btn-install'>Install</button>
        </Link>

        <article>
          <span>
            &copy; {new Date().getFullYear()} Zuri, Team Hemingway, All Rights
            Reserved.
          </span>
          <span className='links'>
            <span>Privacy</span>&nbsp;&nbsp;&nbsp;
            <span>Terms</span>&nbsp;&nbsp;&nbsp;
            <span>Help Center</span>&nbsp;&nbsp;&nbsp;
            <span>Contact Us</span>
          </span>
        </article>
      </footer>
    </div>
  )
}

export default Landing
