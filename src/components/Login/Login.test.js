import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jsdom-global/register';
import Login from './Login';

it('renders without crashing', () => {
  // const wrapper = mount(<Login />);
  // expect(wrapper.find('.cp-login').length).toBe(1);

  const tree = renderer.create(
    <Login />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
