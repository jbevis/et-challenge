export const setDisplayGroup = (group) => {
  return {
    type: 'SET_DISPLAY_GROUP',
    group
  }
};

export const setDisplayProp = (property) => {
  return {
    type: 'SET_DISPLAY_PROP',
    property
  }
};

export const getData = (data) => {
  return {
    type: 'GET_DATA',
    data
  }
};