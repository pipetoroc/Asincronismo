//https://xhr.spec.whatwg.org/ Documentacion de XMLHttp

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //Se realiza la peticion con npm al archivo xmlhttp
const API = 'https://api.escuelajs.co/api/v1';//Referencia del url de api

function fetchData(urlApi, callback){//funcion que permite recibir la url y el callback para recibir la api
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true)//se abre conexion con api
  xhttp.onreadystatechange = function(event){//recurso para escuchar estados de la solicitud
    if(xhttp.readyState === 4){ //4: Solicitud Done el atributo readyState define el estado del objeto XMLHttpRequest
      if(xhttp.status === 200){ //200: Respuesta satisfactoria
        callback(null, JSON.parse(xhttp.responseText));
      }else{
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    }
  }
  xhttp.send();
}

fetchData(`${API}/products`, function(error1, data1){//Se realiza el llamado a fetchData pasando como argumento la url de products y una funcion anonima con argumentos error y data
  if (error1) return console.error(error1);//Valida si tiene un error detiene la aplicacion
  fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){//Se llama un producto especifico pasando el id que se captura en la posicion 0 de data1
    if(error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){//Se agrega ? de optional chaining para evitar errores si no encuentra la ubicacion en el array
      if(error3) return console.error(error3);
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});