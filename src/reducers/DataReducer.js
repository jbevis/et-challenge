const DataReducer = (state=[], action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.data;
    default:
      return state
  }
};

export default DataReducer;