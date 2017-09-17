export function deserialize(data = []) {
  return data.map((item) => {
    return Object.assign({id: item.id}, item.attributes)
  });
}
