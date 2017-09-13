const displayProp = (state='', action) => {
  switch (action.type) {
    case 'SET_DISPLAY_PROP':
      return Object.assign({}, state, action.property)
    default:
      return state;
  }
};

export default displayProp;