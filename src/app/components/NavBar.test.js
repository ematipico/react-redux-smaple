import { shallow } from 'enzyme'
import {NavBar} from './NavBar'
import test from 'ava'
import React from 'react'

test('NavBar renders the number of items', t => {
  const wrapper = shallow(<NavBar numberOfItems={3} />)

  t.is(wrapper.type(), 'nav')
  t.is(wrapper.find('.badge').text(), '3')
})
