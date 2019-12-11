import React, { Component } from 'react'
import Table from '../Table/Table'
import './ResDisplay.css'

export default class ResDisplay extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  makeTables = () => {
    return this.props.tables.map((table) => {
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
  render() {
    return (
      <section className="resDisplay">
        {this.makeTables()}
      </section>
    )
  }
}
