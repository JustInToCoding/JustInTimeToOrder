export function deserialize(data = []) {
  return data.map((item) => {
    return Object.assign({key: item.id}, item.attributes)
  });
}
