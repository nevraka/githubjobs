import React from 'react';
import { shallow } from 'enzyme';
import AppFooter from './AppFooter';

it('Github writing', () => {
  const wrapper = shallow(<AppFooter />);
  const span = wrapper.find('span');
  const result = span.text();

  expect(result).toBe('© 2020 GitHub Inc. All rights reserved.');
});

it('Test links', () => {
  const wrapper = shallow(<AppFooter />);
  const url = wrapper.find('Link').first().prop('href');
  expect(url).toBe('/contact');
});
