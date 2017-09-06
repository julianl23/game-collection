import { shallow } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import Game from './Game';

it('renders without crashing', () => {
  const wrapper = shallow(<Game />);
  expect(wrapper.find('.game').length).toBe(1);
});
