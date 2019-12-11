import React from 'react'
import './Table.css'

const Table = ({id, name, date, time, number}) => {
  return (
    <div className="table">
      <h3>Name: {name}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number of Guests {number}</p>
    </div>
  )
}

export default Table
