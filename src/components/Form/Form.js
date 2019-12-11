import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "Name",
      date: "Date (mm/dd)",
      time: "Time",
      guests: "Number of Guests"
    }
  }

  render() {
    return (
      <section className="form">
        <input className="formInput" name="name" value={this.state.name}></input>
        <input className="formInput" name="date" value={this.state.date}></input>
        <input className="formInput" name="time" value={this.state.time}></input>
        <input className="formInput" name="guests" value={this.state.guests}></input>
        <button className="formButton">Make Reservation</button>
      </section>
    )
  }
}
