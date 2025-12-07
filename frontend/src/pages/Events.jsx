import React from 'react'
import EventCard from '../components/EventCard'

function Events() {
  return (
    <div>
      <h1>Detected Events</h1>
      <EventCard event="Loitering detected" time="12:30 PM" />
      <EventCard event="Tampering detected" time="01:00 PM" />
    </div>
  )
}

export default Events
