function sum (a, b){
  return a + b;
}
function calc (num1, num2, callback){
  return callback(num1, num2);
};
console.log(calc(2, 2, sum));

//Segundo ejemplo
setTimeout(()=>{
  console.log('Hola javaScript');
},5000)

function saludo (name){
  console.log(`Hola ${name}`);
}
setTimeout(saludo, 2000, 'Felipe');