import test from 'ava'
import ProductCard from './ProductCard'
import React from 'react'
import { shallow } from 'enzyme'
test('ProductCard renders the expected props ', t => {
  const title = 'dummy title'
  const selftext = 'dummy selftext'
  const data = {
    title,
    selftext,
    id: 'aaee989',
    price: 145
  }
  const kind = 'dummyKind'
  const wrapper = shallow(<ProductCard kind={kind} data={data} />)
  t.is(wrapper.find('.title').text(), `${title} - ${kind}`)
  t.is(wrapper.find('.description').text(), selftext)
})

test('ProductCard returns the data on the onClick event', t => {
  const title = 'dummy title'
  const selftext = 'dummy selftext'
  const data = {
    title,
    selftext,
    id: 'aaee989',
    price: 145
  }
  const onClick = (propData) => {
    t.deepEqual(propData, data)
  }
  const kind = 'dummyKind'
  const wrapper = shallow(<ProductCard kind={kind} data={data} onClick={onClick} />)
  wrapper.find('.add-to-cart').simulate('click', { preventDefault () {} })
})
