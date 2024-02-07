// Exercício Fundamentais

// Exercício 1: Crie um script que imprima "Olá, Mundo" no console.
console.log("Olá, Mundo");

// Exercício 2: Conversão de tipos
// Dado o valor de uma string "1234", converta-o em um número que exiba o tipo da variável no console.
let tipo = "1234"
let tipoNum = Number(tipo)
console.log(typeof tipoNum);

// Exercício 3: Manipulação de strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos carácteres a string tem, e quantas palavras existem na frase.

let string_exer = "JavaScript é incrível"
let string_carac = string_exer.length
let string_palav = string_exer.split(" ").length

console.log(`A string "${string_exer}" contém ${string_carac} carácteres e ${string_palav} palavras!`)

// Exercício 4: Loops e Arrays
// Crie um array com 5 nomes. Use um loop for para imprimir cada nome no console.
// for("contador"; "lógica"; "incremento";){}

let nomes_array = ["Raphael", "Larissa", "Rodrigo", "Robin", "Cristiano"]

console.log(nomes_array)

for (let i = 0; i < nomes_array.length; i++) {
    console.log(nomes_array[i])
}

// Exercício 5: Funções, String, Math
// Criar uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30").
// A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM").
// Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

// minha resolução =>

function horario_24(hor, min) {
    if (hor > 23 || min > 59) {
        console.log(`Insira um horário válido`)
    } else {

        let horario = `${hor}:${min}`
        console.log(horario)
    }
}

horario_24(00, 00);

function horario_12(hor, min) {
    let a = ""
    if (hor > 23 || min > 59) {
        console.log(`Insira um horário válido`)
    } else if (hor <= 11) {
        a = "AM"
    } else {
        a = "PM"
        if (hor > 12) {
            hor = hor - 12
        }
    }
    let horario = `${hor}:${min} ${a}`
    console.log(horario)
}

horario_12(00, 00);

// resolução do professor =>

function converterHorario(horario24) {
    const [hora, minuto] = horario24.split(":");
    const hora12 = hora % 12 || 12;

    let periodo = "AM"

    if (hora > 12) {
        periodo = "PM"
    }
    console.log(`${hora12}:${minuto} ${periodo}`)
}
converterHorario("15:45");
