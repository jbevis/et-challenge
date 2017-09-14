import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PropertyCard from '../../components/PropertyCard';
import { mockData } from '../mockData';

describe('PropertyCard component', () => {
  const props = {
    info: mockData[2].containing_object.properties,
    displayProperty: ''
  }
  const wrapper = shallow(<PropertyCard { ...props } />);

  it('should render all elements to the DOM', () => {
    expect(wrapper.find('.prop-card').length).toBe(1);
    expect(wrapper.find('Property').length).toBe(4);
  });
});
