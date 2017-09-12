export const formatGroupData = (data) => {
  const isGroup = (obj) => !!obj.containing_object;

  return data.filter(isGroup).concat({
    name: 'generalInfo',
    containing_object: {
      properties: data.filter(obj => !isGroup(obj))
    }
  })
};

