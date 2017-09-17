export function deserializeItem(item) {
  let relationships = {};
  if(item.relationships) {
    let relationshipsKeys = Object.keys(item.relatioships);
    relationshipsKeys.forEach((relationshipsKey) => {
      resultObject[relationshipsKey] = deserializeData(item[relationshipsKey]);
    });
  }
  return { key: item.id, ...item.attributes, relationships };
}

export function deserializeData(data) {
  if(Array.isArray(data)) {
    return data.map((item) => {
      return deserializeItem(item);
    });
  } else {
    return deserializeItem(item);
  }
}
