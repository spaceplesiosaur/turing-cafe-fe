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

  it('should call handleChange with correct argument when imput is changed', () => {
    const mockName = "The Rock"
    const mockEvent = {event: {target: {name: "name", value: "The Rock"}}}
    const mockHandleChange = jest.fn()


    const wrapper = shallow(
      <Form
      addTable={jest.fn()}
      />)

    wrapper.find("#nameInput").simulate('change', mockEvent)

    expect(mockHandleChange).toHaveBeenCalledWith(mockEvent)

  })
})
