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

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  setUser = () => {
    this.props.addTable({name: this.state.name, date: this.state.date, time: this.state.time, number: this.state.guests})
  }

  render() {
    return (
      <section className="form">
        <input className="formInput" name="name" value={this.state.name} onChange={this.handleChange}></input>
        <input className="formInput" name="date" value={this.state.date} onChange={this.handleChange}></input>
        <input className="formInput" name="time" value={this.state.time} onChange={this.handleChange}></input>
        <input className="formInput" name="guests" value={this.state.guests} onChange={this.handleChange}></input>
        <button className="formButton" onClick={this.setUser}>Make Reservation</button>
      </section>
    )
  }
}
