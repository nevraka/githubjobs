import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from './AppHeader';

it('Test links', () => {
  const wrapper = shallow(<AppHeader />);
  const url = wrapper.find('Link').first().prop('href');
  expect(url).toBe('/');

  const wrapper1 = shallow(<AppHeader />);
  const url1 = wrapper1.find('Link').at(1).prop('href');
  expect(url1).toBe('/');

  const wrapper2 = shallow(<AppHeader />);
  const url2 = wrapper2.find('Link').at(2).prop('href');
  expect(url2).toBe('/post');

  const wrapper3 = shallow(<AppHeader />);
  const url3 = wrapper3.find('Link').at(3).prop('href');
  expect(url3).toBe('/how-it-works');
});
