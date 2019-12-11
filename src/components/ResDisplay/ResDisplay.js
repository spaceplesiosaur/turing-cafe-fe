import React, { Component } from 'react'
import Table from '../Table/Table'
import './ResDisplay.css'

const ResDisplay = ({tables}) => {
  const makeTables = () => {
    return tables.map((table) => {
          return (
            <Table
            id={table.id}
            name={table.name}
            date={table.date}
            time={table.time}
            number={table.number}
            />
          )
        })
  }
  return (
    <section className="resDisplay">
      {makeTables()}
    </section>
  )
}

export default ResDisplay
