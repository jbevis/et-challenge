const GroupReducer = (state, action) => {
  switch(action.type) {
    case 'SET_DISPLAY_GROUP':
      return Object.assign(...state, displayGroup: action.group);
    default:
      return state;
  }
};

export default GroupReducer;