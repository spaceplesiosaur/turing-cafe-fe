import React from 'react';
import { shallow } from 'enzyme'
import Form from './Form';

describe('Form', () => {

  it('should match the snapshot with correct data being pulled in', () => {
    const wrapper = shallow(
      <Form
      addTable={jest.fn()}
      />)

    expect(wrapper).toMatchSnapshot();
  })

  it('should call setUser with the correct argument', () => {
    const mockTable = {
      name: "Taylor Swift",
      date: "08/22",
      time: "5:00",
      number: "13"
    }

    const mocksetUser = jest.fn()

    const wrapper = shallow(
      <Form
      addTable={mocksetUser}
      />)

    wrapper.find(".formButton").simulate('click')
    expect(mocksetUser).toHaveBeenCalled()

  })

  // it('should call addTable when setUser is called', () => {
  //   const mocksetUser = jest.fn()
  //   const wrapper = shallow(
  //     <Form
  //     addTable={jest.fn()}
  //     />)
  //
  //   wrapper.instance().setUser()
  //
  //   expect(wrapper.props.addTable).toHaveBeenCalled()
  // })

  it('should call handleChange with correct argument when imput is changed', () => {
    const mockEvent = {target: {name: "name", value: "The Rock"}}

    const wrapper = shallow(
      <Form
      addTable={jest.fn()}
      />)

    wrapper.find("#nameInput").simulate('change', mockEvent)

    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent.target.value)

  })

  it('should update name state on change', () => {

    const wrapper = shallow(
      <Form
      addTable={jest.fn()}
      />)

    wrapper.setState({name: "name"})
    const mockEvent = {target: {name: "name", value: "The Rock"}}
    wrapper.find("#nameInput").simulate('change', mockEvent)

    expect(wrapper.state('name')).toEqual(mockEvent.target.value)
  })

  it('should update date state on change', () => {

    const wrapper = shallow(
      <Form
      addTable={jest.fn()}
      />)

    wrapper.setState({name: "date"})
    const mockEvent = {target: {name: "date", value: "08/22"}}
    wrapper.find("#dateInput").simulate('change', mockEvent)

    expect(wrapper.state('date')).toEqual(mockEvent.target.value)
  })
})
