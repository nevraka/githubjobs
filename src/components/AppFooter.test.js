import React from 'react';
import { shallow } from 'enzyme';
import AppFooter from './AppFooter';

it('Github writing', () => {
    const wrapper = shallow(<AppFooter />);
    const span = wrapper.find('span');
    const result = span.text();

    expect(result).toBe('© 2020 GitHub Inc. All rights reserved.');

    const link = wrapper.find('Link');
    const linkUrl = link.prop('href');
    expect(linkUrl).toBe('/support');
});
