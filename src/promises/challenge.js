//Fetch es una promesa

import fetch from 'node-fetch';//Fetch se encuentra en el navegador
const API = 'https://api.escuelajs.co/api/v1';//asi se guarda la api

function fetchData(urlApi){
  return fetch(urlApi);
};

// fetchData(`${API}/products`)//Se llama la funcion fetchData
//   .then(response => response.json())//Transforma la informacion a un objeto json
//   .then(products => {
//     console.log(products);
//   })
//   .then(()=>{//Vacio no se trae ningun elemento
//     console.log('hola')
//   })
//   .catch(error => console.log(error));//So muestra el error

fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
  console.log(products)
  return fetchData(`${API}/products/${products[0].id}`)
})
.then(response => response.json())
.then(product => {
  console.log(product.title)
  return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => {
  console.log(category.name);
})
.catch(error => console.log(error))
.finally(() => console.log('Terminado'));