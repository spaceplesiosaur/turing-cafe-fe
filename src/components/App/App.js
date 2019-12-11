import React, { Component } from 'react';
import Form from '../Form/Form'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
