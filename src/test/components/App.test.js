import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../components/App';
import { mockData } from '../mockData';

describe('App component', () => {
  const mockFn = jest.fn();
  const props = {
    displayGroup: 'test_group',
    displayProp: '',
    groups: mockData,
    getData: mockFn,
    setDisplayGroup: mockFn,
    setDisplayProp: mockFn
  };
  const wrapper = shallow(<App {...props} />);

  it('should render the expected elements to the DOM', () => {
    expect(wrapper.find('main').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('Navigation').length).toBe(1);
    expect(wrapper.find('MainDisplay').length).toBe(1);
  });
});
