import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Property from '../../components/Property';
import { mockData } from '../mockData';

describe('Property component', () => {
  const props = {
    key: 1,
    object: mockData[2].containing_object.properties[0]
  };
  const wrapper = shallow(<Property { ...props } />);

  it('should render all elements to the DOM', () => {
    expect(wrapper.find('.card-info').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('.card-info-row').length).toBe(3);
    expect(wrapper.find('.label').length).toBe(3);
    expect(wrapper.find('p').length).toBe(6);
  });
});