import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Navigation from '../../components/Navigation';
import { mockData } from '../mockData';
import { formatGroupData } from '../../ops/helper';

describe('Navigation component', () => {
  const mockFn = jest.fn();
  const props = {
    displayGroup: 'test_group',
    groups: formatGroupData(mockData),
    setDisplayGroup: mockFn,
    setDisplayProp: mockFn
  };
  const wrapper = shallow(<Navigation {...props} />);

  it('should render all elements to the DOM', () => {
    expect(wrapper.find('#navigation').length).toBe(1);
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('Link').length).toBe(2);
  });
});