import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <div className='landing-page'>
      <Link to='/calendar' className='calendar-plugin'>
        Go To Plugin
      </Link>
      <h2>OTHER FEATURES THAT WILL INTEREST YOU</h2>
      <ul>
        <li>Edit Event Details and Update Your Team</li>
      </ul>
      <p>
        Yes, emergencies happen and plans change. When they do happen and you
        have to make changes to your event, no need to worry about creating a
        new event or sending bulk emails to notify everyone in your team. All
        you need is to click on the "EDIT EVENT" icon on the right-hand-side of
        the events list and make your changes to your event. Then set a
        company-wide reminder to the next minute to alert all in your team of
        the update.
      </p>
      <ul>
        <li>Add Helpful Information to Event Details</li>
      </ul>
      <p>
        You can add video, photo or other files to an event description helping
        your team get more information and all excited.
      </p>
      <ul>
        <li>Let Your Team Join Events Without Leaving Zurichat</li>
      </ul>
      <p>
        Easily add a virtual event web link (url) to your virtual events in the
        event details section when creating your event. All your organization
        members need to join the event is open the event details from the events
        list and click on the url.
      </p>
      <ul>
        <li>Plan Ahead</li>
      </ul>
      <p>
        With it’s user-friendly interface, the calendar displays a list of all
        events in a single month. You and your team can easily plan ahead with a
        quick glance at this list.
      </p>
      <ul>
        <li>Never Miss An Important Company Event</li>
      </ul>
      <p>
        The event reminders feature helps you and your team to keep important
        events top-of-mind by means of appropriately set automated reminders via
        emails and/or sms.
      </p>
      <ul>
        <li>Save Time</li>
      </ul>
      <p>
        You and your team can save valuable time by using the company holiday
        calendar. You don’t need to juggle from one app or window to another in
        an effort to view your calendar. Everything is here on Zurichat.
      </p>
      <ul>
        <li>Accommodate Different Time Zones</li>
      </ul>
      <p>
        You have employees who work overseas or remote freelance workers in your
        team? Not to worry, they can create events and set reminders according
        to their preferred time zones.
      </p>
      <h2>HOW IT WORKS</h2>
      <p>(Simple Walkthrough)</p>
      <h4>How To Install</h4>
      <p>
        Installing the plugin is easy and simple. Just click on the "install"
        button above while logged in, and the plugin will automatically be
        installed in your workspace
      </p>
      <h4>How To Create Events</h4>
      <p>
        Creating events is accessible only to the admin or those he has granted
        access, Here are 5 easy steps to event creation:
      </p>
      <ol>
        <li>Select the Holiday Calendar Plugin from the sidebar of Zurichat</li>
        <li>
          The event list view will open up on your screen. Click on "Create
          Event" on the top right-hand-side of the screen. The event creation
          form will open as a popup
        </li>
        <li>
          Input your event details: Event title, start and end date/time,
          specify the time zone, add a description and tag, and select the event
          type from the dropdown
        </li>
        <li>
          Optionally set a company-wide reminder by selecting the "Reminder"
          tab. Add information to the popup form and set when and how you want
          the reminder delivered.
        </li>
        <li>Click "Create"</li>
      </ol>
      <p>
        Your event is now created and will appear on the event list view of the
        holiday calendar plugin.
      </p>
      <h4>How To Edit Event</h4>
      <ol>
        <li>
          On the calendar event list view, select the "Edit Event" Icon seen
          towards the right-hand-side of the page.
        </li>
        <li>
          The edit event popup form will open. Edit the event details including
          title, description, date, and time.
        </li>
        <li>Click Save to update your event</li>
      </ol>
      <p>P.S</p>
      <p>
        If at any point during the event editing you decide not to make the
        changes again, just click on the cancel to return to the event list view
      </p>
      <h4>How To Delete An Event</h4>
      <p>
        On the calendar event list view, select the "Delete" Icon and click on
        "Confirm Delete" when prompted to permanently delete the event from your
        list of events
      </p>
      <p>P.S</p>
      <p>
        Once an event has been deleted, you can no longer see it again. So be
        sure you really want to delete the event before proceeding.
      </p>
      <h4>How To Set Personal Reminders </h4>
      <ol>
        <li>
          Select the Desired event by clicking on it on the calendar event list
          view page.
        </li>
        <li>
          On the popup create reminders page, add a title to your reminder, set
          the date/time, set when and how you want the reminder delivered
        </li>
        <li>Click on "Save"</li>
      </ol>
      <p>Your reminder is set and you'll be notified of your upcoming event</p>
      <footer>
        <h4>
          READY TO START CREATING YOUR FIRST COMPANY EVENT? CLICK "iNSTALL" NOW
          AND LET US BEGIN!
        </h4>
        <button>Install</button>
        <article>
          <span>
            &copy; {new Date().getFullYear()} Zuri, Team Hemingway, All Rights
            Reserved.
          </span>
          <span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Help Center</span>
            <span>Contact Us</span>
          </span>
        </article>
      </footer>
    </div>
  )
}

export default Landing
