// Exercício de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens a lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.

const listaDeCompras = [];

listaDeCompras.push("Arroz", "Feijão", "Leite", "Pão", "Suco");

listaDeCompras.shift();

console.log(listaDeCompras);


// Exercício de Manipulação de Array - find()

// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42]
// Use a função find() para encontrar o primeiro número que é divisível por 7
// E maior que 10

const arrayNum = [3, 7, 14, 21, 29, 36, 42];

const arrayNum2 = arrayNum.find((num) => num % 7 === 0 && num > 10);

console.log(arrayNum2);

// Exercício de manipulação de Array - filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40]
// Use a funcão filter() para criar um novo array que
// que são maiores que 20.

const arrayFilter = [5, 10, 15, 20, 25, 30, 35, 40];

const arrayFilterNew = arrayFilter.filter((num) => num > 20);

console.log(arrayFilterNew);

// Exercício de manipulação de string - split(), trim()

// Dada a String: " Bom dia, mundo! ".
// Remova os espaços em branco no início e no final da string 
// Em seguida, divida a string em palavras

const fraseEspaco = " Bom dia, mundo! ";

const fraseSemEspaco = fraseEspaco.trim()

console.log(fraseSemEspaco)

const fraseSeparada = fraseSemEspaco.split(" ")

console.log(fraseSeparada)

// Exercício de Manipulação de String - startWith(), e endsWifth()

// Dada a string: "O rato roeu a roupa do rei de Roma"
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma"

const travaLingua = "O rato roeu a roupa do rei de Roma"

if (travaLingua.startsWith("O")) {
    console.log("Começa com a letra 'O'")
} else {
    console.log("Não começa com a letra 'O'")
}


if (travaLingua.endsWith("Roma")) {
    console.log("Termina com a palavra 'Roma'")
} else {
    console.log("Não termina com a palavra 'Roma'")
}

