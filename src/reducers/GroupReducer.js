const GroupReducer = (state='general_info', action) => {
  switch (action.type) {
    case 'SET_DISPLAY_GROUP':
      return action.group;
    default:
      return state;
  }
};

export default GroupReducer;