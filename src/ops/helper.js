export const formatGroupData = (data) => {
  const hasContainingObj = (obj) => !!obj.containing_object;

  return data.filter(hasContainingObj).concat({
    name: 'general_info',
    containing_object: {
      properties: data.filter(obj => !hasContainingObj(obj))
    }
  })
};

export const getProperties = (groups, displayGroup) => {
  return groups.filter(group => {
    return group.name === displayGroup
  })[0].containing_object.properties.map(prop => prop.name)
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatName = (string) => {
  return string.split('_').map(capitalize).join(' ')
};

export const formatAppKeys = (array) => array.join(", ");
