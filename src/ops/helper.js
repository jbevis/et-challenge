export const formatGroupData = (data) => {
  const isGroup = (obj) => !!obj.containing_object;

  return data.filter(isGroup).concat({
    name: 'generalInfo',
    containing_object: {
      properties: data.filter(obj => !isGroup(obj))
    }
  })
};

export const getProperties = (groups, displayGroup) => {
  return groups.filter(group => {
    return group.name === displayGroup
  })[0].containing_object.properties.map(prop => prop.name)
};

export const capitalize = (string) => {
  string.charAt(0).toUpperCase() + string.slice(1);
};

export const fieldNameToString = (string) => {
  string.split('_').map(capitalize).join(' ')
};


