// Exercicio 2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// exercicio 3
function verificarChute() {
    console.log('O botão foi clicado');
}

// exercicio 4
function mensagemAlert() {
    alert('Eu amo JS');
}

// exercicio 5
function nomeCidade() {
    let cidade = prompt('Insira o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

// exercicio 6
function somandoDoisNumeros() {
    let numero1 = parseInt(prompt('Insira o primeiro número da soma:'));
    let numero2 = parseInt(prompt('Insira o segundo número da soma'));
    let resultado = numero1 + numero2;
    alert(`${numero1} + ${numero2}: ${resultado}`);
}

// exercicio 7
function saudacoes() {
    console.log('Olá, Mundo!');
}
saudacoes();

// exercicio 8
function mensagemComNome(nome) {
    console.log(`Olá, ${nome}`);
}
mensagemComNome('Erick');

// exercicio 9
function calcularDobro(n1) {
    let resultado = n1 * n1;
    console.log(`O dobro é: ${resultado}`);
    return resultado;
}
calcularDobro(8);

// exercicio 10
function calcularMedia(n1, n2, n3) {
    let resultado = (n1 + n2 + n3) / 3;
    console.log(`A media entre ${n1}, ${n2} e ${n3} é igual a: ${resultado}`); 
    return resultado; 
}
calcularMedia(5, 17, 23);

// exercicio 11
function calcularMaior(n1, n2) {
    // return n1 > n2 ? n1 : n2; (COM OPERADOR TERNÁRIO)
    if (n1 > n2) {
        return console.log(`${n1} é maior que ${n2}`);
    } else {
        return console.log(`${n2} é maior que ${n1}`);
    }
}
calcularMaior(67.7, 87.2);

// exercicio 12
function calcularMultiplicacao(n1) {
    return n1 * n1;
}
let resultadoMultiplicacao = calcularMultiplicacao(7);
console.log(`${7} x ${7} = ${resultadoMultiplicacao}`);

// exercicio FATORIAL
function calcularFatorial(n1){

    let fatorial = 1;
    for(let i = 2; i <= n1; i++) {
        fatorial *= i;
    }

    return fatorial;
}

let numeroFinal = calcularFatorial(8);
console.log(`Fatorial de ${8} = ${numeroFinal}`);

// exercicio conversão Dolar
function converterDolarEmReais(n1) {
    let cotacaoDolar = 5;
    return (n1 * cotacaoDolar); 
}

let valorEmDolar = 47;
let resultado = converterDolarEmReais(valorEmDolar);
console.log(`${valorEmDolar} Dolares em Reais é igual a: R$${resultado}`);

// exercicio AREA E PERIMETRO retangulo
function medidasRetangulo(base, altura) {
    let perimetro = 2 * (base + altura);
    console.log(`O perimetro do retangulo em (metros) é de: ${perimetro}m`);
    let area = base * altura;
    console.log(`A área do retangulo é de: ${area} metros quadrados`);
}

let base = 10.5;
let altura = 14;
medidasRetangulo(base, altura);

// exercicio TABUADA
function calcularTabuada(n1) {
    console.log(`TABUADA DE ${numeroX}`);
    for(let i = 1; i <= 10; i++) {
        console.log(`${n1} x ${i} = ${n1 * i}`);
    }
}

let numeroX = 8;
calcularTabuada(numeroX);

// exercicio ARRAYS
let  listaGenerica = ['Morango', 'Maçã', 'Banana'];
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

console.log(linguagensDeProgramacao);
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

console.log(listaGenerica[0]);
console.log(listaGenerica[1]);
console.log(listaGenerica[listaGenerica.length - 1]);