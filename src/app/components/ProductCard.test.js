import test from 'ava'
import ProductCard from './ProductCard'
import React from 'react'
import { shallow } from 'enzyme'
test('ProductCard renders  the expected props ', t => {
  const wrapper = shallow(<ProductCard />)
})
