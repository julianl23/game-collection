import { mount } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import App from './App';

it('renders without crashing', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.App').length).toBe(1);
});
