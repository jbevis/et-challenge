const displayGroup = (state='general_info', action) => {
  switch (action.type) {
    case 'SET_DISPLAY_GROUP':
      return Object.assign({}, state, action.group)
    default:
      return state;
  }
};

export default displayGroup;