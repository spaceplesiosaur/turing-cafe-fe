import React, { Component } from 'react';
import Form from '../Form/Form'
import ResDisplay from '../ResDisplay/ResDisplay'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tables: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => data.map((table) => {
      this.setState({tables: [...this.state.tables, {id: table.id, name: table.name, date: table.date, time: table.time, number: table.number}]})
    } ))
  }

  addTable = (newTable) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(newTable),
      headers: {'Content-Type': 'application/json'}
    }
    return (
      fetch('http://localhost:3001/api/v1/reservations', options)
      .then(response => response.json())
      .then(data => this.setState({tables: [...this.state.tables, data]}))
  )

  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
          addTable={this.addTable}/>
        </div>
        <div className='resy-container'>
          <ResDisplay
          tables={this.state.tables}/>
        </div>
      </div>
    )
  }
}

export default App;
