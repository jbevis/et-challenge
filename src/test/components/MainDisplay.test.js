import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MainDisplay from '../../components/MainDisplay';
import { mockData } from '../mockData';

describe('MainDisplay component', () => {
  const props = {
    groups: mockData,
    displayGroup: 'phones',
    displayProp: 'primary'
  };

  const wrapper = shallow(<MainDisplay { ...props } />);

  it('should render all elements to the DOM', () => {
    expect(wrapper.find('.main-display').length).toBe(2);
    expect(wrapper.find('.group-title').length).toBe(1);
    expect(wrapper.find('PropertyCard').length).toBe(1);
  });
});