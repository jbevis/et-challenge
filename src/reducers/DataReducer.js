const data = (state=[], action) => {
  switch (action.type) {
    case 'GET_DATA':
      return Object.assign({}, state, action.data)
    default:
      return state
  }
};

export default data;