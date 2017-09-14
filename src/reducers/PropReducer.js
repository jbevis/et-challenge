const PropertyReducer = (state='', action) => {
  switch (action.type) {
    case 'SET_DISPLAY_PROP':
      return action.property;
    case 'SET_DISPLAY_GROUP':
      return '';
    default:
      return state;
  }
};

export default PropertyReducer;