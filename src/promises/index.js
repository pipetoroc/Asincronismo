const promise = new Promise(function(resolve, reject){
  resolve('Todo correcto');
})

const cows = 11;

const countCows = new Promise(function(resolve, reject){
  if(cows > 10){
    resolve(`We have ${cows} cows in the farm `);
  }else{
    reject('There is no cows enough in the farm');
  }
});

countCows.then((result)=>{
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(()=>console.log('Finally'))