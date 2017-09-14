import GroupReducer from '../../reducers/GroupReducer';
import PropReducer from '../../reducers/PropReducer';
import DataReducer from '../../reducers/DataReducer';

describe('GroupReducer tests', () => {

  it('should return the initial state', () => {
    expect(GroupReducer(undefined, '')).toEqual('general_info');
  });

  it('should update groupToDisplay state', () => {
    const action = {
      type: 'SET_DISPLAY_GROUP',
      group: 'test_group'
    };

    expect(GroupReducer('general_info', action)).toEqual('test_group');
  });
});

describe('PropReducer tests', () => {

  it('should return the initial state', () => {
    expect(PropReducer(undefined, '')).toEqual('');
  });

  it('should update propToDisplay state', () => {
    const action = {
      type: 'SET_DISPLAY_PROP',
      property: 'test_prop'
    };

    expect(PropReducer('', action)).toEqual('test_prop');
  });

  it('should reset prop on when SET_DISPLAY_GROUP is dispatched', () => {
    const action = {
      type: 'SET_DISPLAY_GROUP',
      property: ''
    };

    expect(PropReducer('', action)).toEqual('');
  });
});

describe('DataReducer tests', () => {

  it('should return the initial state', () => {
    expect(DataReducer(undefined, [])).toEqual([]);
  });

  it('should update groupToDisplayState', () => {
    const action = {
      type: 'GET_DATA',
      data: [{1: "test", 2: "test"}]
    };

    expect(DataReducer([], action)).toEqual([{1: "test", 2: "test"}]);
  });
});
