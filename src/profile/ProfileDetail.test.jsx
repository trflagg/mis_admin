import React from 'react';
import { shallow } from 'enzyme';
import ProfileDetail from './ProfileDetail';

const profile = {
  _id: '1234566',
  name: 'Taylor',
  handiness: 'right',
};

it('renders profile information', () => {
  const wrapper = shallow(<ProfileDetail profile={profile} />);
  expect(wrapper.find('.ProfileDetail--name').text()).toBe('Taylor - 1234566');
  expect(wrapper.find('.ProfileDetail--handiness').text()).toBe('right');
});
