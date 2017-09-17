import { deserializeData } from './Serializers';

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

function post(url, body) {
  let requestInit = {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(body)
  };
  return fetch(url, requestInit)
}

export async function getProducts() {
  let response = await get('http://jaapi.nerdie.works/products');
  // content-type is application/json
  let contentType = response.headers.get("content-type");
  if(contentType && contentType.includes("application/json")) {
    let jsonResponse = await response.json();
    return deserializeData(jsonResponse.data);
  }
  throw new TypeError("Oops, we haven't got JSON!");
}

export async function postPlaceOrder(productIds, ammount) {
  let response = await post('http://jaapi.nerdie.works/orders',
    {
      data: {
        type: 'orders',
        attributes: {
          products: productIds,
          ammount: ammount
        }
      }
    }
  );
  let contentType = response.headers.get("content-type");
  if(contentType && contentType.includes("application/json")) {
    let jsonResponse = await response.json();
    return {data: deserializeData(jsonResponse.data), included: deserializeData(jsonResponse.included)};
  }
  throw new TypeError("Oops, we haven't got JSON!");
}

export function getOrder(orderId) {

}
