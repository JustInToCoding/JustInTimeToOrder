export function deserializeItem(item) {
  let relationships = {};
  if(item.relationships) {
    let relationshipsKeys = Object.keys(item.relationships);
    relationshipsKeys.forEach((relationshipsKey) => {
      relationships[relationshipsKey] = deserializeData(item.relationships[relationshipsKey]);
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
    return deserializeItem(data);
  }
}
