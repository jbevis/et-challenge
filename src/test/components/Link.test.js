import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Link from '../../components/Link';

describe('Link component', () => {
  const mockFn = jest.fn();
  const props = {
    cssClass: 'test-class',
    linkText: 'test-text',
    handleClick: mockFn
  };
  const wrapper = shallow(<Link { ...props } />);

  it('should render correct elements to DOM', () => {
    expect(wrapper.find('.test-class').length).toBe(1);
  });

  it('should fire click function when clicked', () => {
    const testLink = wrapper.find('p');

    testLink.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});