function* gen(){//Se denota con *
  yield 1;//palabra reservada yield permite tener los steps
  yield 2;
  yield 3;
}

const g = gen(); //Se logra entrar a la palabra next para ejecutar varias veces
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//iterando en array

function* iterable(arr){
  for (let value of arr) {
    yield value
  }
}

const it = iterable(['ostcar', 'ana', 'felipe', 'Pedro'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
