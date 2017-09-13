const displayProperty = (state='', action) => {
  switch (action.type) {
    case 'SET_DISPLAY_PROP':
      return action.property;
    default:
      return state;
  }
};

export default displayProperty;