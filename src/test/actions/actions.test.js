import { setDisplayGroup, setDisplayProp, getData } from '../../actions/index';

describe('Testing actions', () => {

  it('should create an action to set the display group', () => { 
    const testGroup = 'test_group';
    const expectedAction = {
      type: 'SET_DISPLAY_GROUP',
      group: testGroup
    };

    expect(setDisplayGroup(testGroup)).toEqual(expectedAction);
  })
})