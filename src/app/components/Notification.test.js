import test from 'ava'
import { Notification } from './Notification'
import { shallow } from 'enzyme'
import React from 'react'

test('Notification renders null if there are no notifications', t => {
  const wrapper = shallow(<Notification />)
  t.is(wrapper.html(), null)
})

test('Notification renders as expected if there are notifications', t => {
  const notification = {
    type: 'positive',
    message: 'I am a dummy message'
  }
  const wrapper = shallow(<Notification notification={notification} />)
  t.is(wrapper.type(), 'div')
  t.is(wrapper.hasClass('positive'), true)
  t.is(wrapper.text(), 'I am a dummy message')
})
