import { setDisplayGroup, setDisplayProp, getData } from '../../actions/index';
import { mockData } from '../mockData';

describe('Testing actions', () => {

  it('should create an action to set the display group', () => { 
    const testGroup = 'test_group';
    const expectedAction = {
      type: 'SET_DISPLAY_GROUP',
      group: testGroup
    };

    expect(setDisplayGroup(testGroup)).toEqual(expectedAction);
  });

  it('should create an action to set the display property', () => {
    const testProp = 'test_prop';
    const expectedAction = {
      type: 'SET_DISPLAY_PROP',
      property: testProp
    };

    expect(setDisplayProp(testProp)).toEqual(expectedAction);
  });

  it('should create an action to set the groups with data', () => {
    const testData = mockData;
    const expectedAction = {
      type: 'GET_DATA',
      data: mockData
    };

    expect(getData(mockData)).toEqual(expectedAction);
  });
});