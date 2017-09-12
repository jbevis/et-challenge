const PropsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_PROP':
      return Object.assign(...state, displayProperty: action.property)
    default:
      return state;
  }
};

export default PropsReducer;