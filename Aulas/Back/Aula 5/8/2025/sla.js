//arredonda pra baixo
let num = 9.54 ;
resultado = Math.floor(num);
console.log(resultado);

//arredonda pra cima
let num2 = 17.8;
resultado = Math.ceil(num2);
console.log(resultado);

//arredonda automatico
let num3 = 49.51;
resultado = Math.round(num3);
console.log(resultado);

//encontra o maior numero
let maior = Math.max(1,3,9,300,-5,92);
console.log(maior);

//encontra o menor numero
let menor = Math.min(1,3,9,300,-5,92);
console.log(menor);

//numero aleatorio
let aleatorio = Math.random();
console.log(Math.round(aleatorio));
console.log(100/0);

//numero aleatorio entre intervalos
let min = 5;
let max = 10;
let naleatorio = Math.random() * (max - min) + min;
console.log(Math.round(naleatorio))

//potencia 
console.log(Math.pow(2, 3));
console.log(2**3)

//raiz quadrada
console.log(Math.sqrt(25));
console.log(25 ** 0.5);

//valor de pi
console.log(Math.PI);