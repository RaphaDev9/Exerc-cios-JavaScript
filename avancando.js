const frutas = ["Banana", "Maça", "Uva"]

/* adicionar um item ao final da array */

frutas.push("Laranja")

/* remover um item do final da array */

frutas.pop()

/* adicionar um item ao início da array */

frutas.unshift("Melancia")

/* remover um item do início da array */

frutas.shift()

console.log(frutas)

// map, filter, reduce => arrow function
const numeros = [1, 2, 3, 4, 5, 6];

// find => retornar o primeiro elemento do critério 

const numeroPar = numeros.find((num => num % 2 == 0));
console.log(numeroPar);

// filter => retorna todos os elementos que batem com a lógica

const numerosPares = numeros.filter((num => num % 2 == 0));
console.log(numerosPares);

// Manipulação de Strings

// remover espaços em branco da string

const frase = " Olá, mundo!  ";

const palavras = frase.trim().split(" ");

console.log(frase);
console.log(palavras);

// verificar se o texto corresponde ao início ou ao fim da string

const frase2 = "JavaScrit é incrível!";

console.log(frase2.startsWith("Java"));
console.log(frase2.endsWith("!"));

// Exceções e tratamentos de erros
const idade = 17;

// if(idade < 18 ){
//     /* "throw" pausa o script*/ throw new Error("Você precisa ter no mínimo 18 anos!") /* "Error" é um objeto que retorna uma mensagemd e erro no console */
// }