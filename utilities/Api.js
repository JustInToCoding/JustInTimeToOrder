import { deserialize } from './Serializers';

const headers = new Headers({
  'Content-Type': 'application/vnd.api+json',
  'Authorization': 'Token justintocoding',
});


function get(url) {
  let requestInit = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
  };
  return fetch(url, requestInit)
}

function post() {

}

export async function getProducts() {
  let response = await get('http://jaapi.nerdie.works/products');
  // is application/json
  let contentType = response.headers.get("content-type");
  if(contentType && contentType.includes("application/json")) {
    let jsonResponse = await response.json();
    return deserialize(jsonResponse.data);
  }
  throw new TypeError("Oops, we haven't got JSON!");
}

export function postPlaceOrder(productIds, ammount) {

}

export function getOrder(orderId) {

}
