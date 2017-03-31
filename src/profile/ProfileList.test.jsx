import React from 'react';
import { shallow } from 'enzyme';
import ProfileList from './ProfileList';

it('renders with no props', () => {
  shallow(<ProfileList />);
});

const profiles = [
  {
    _id: '1234566',
    name: 'Taylor',
    handiness: 'right',
  },
  {
    _id: '1111',
    name: 'User2',
    handiness: 'left',
  },
];

it('renders select with profiles', () => {
  const wrapper = shallow(<ProfileList profiles={profiles} />);
  expect(wrapper.find('select').length).toBe(1);
  expect(wrapper.find('option').length).toBe(2);
});
