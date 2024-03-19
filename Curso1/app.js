alert('Boas vindas ao jogo do número secreto');
let tamanhoDoJogo = prompt ('Escolha ate qual numero deseja adivinhar: (10) (100) (1000)');
let numeroSecreto = parseInt(Math.random() * tamanhoDoJogo + 1); // Math.random () - gera um numero random entre 0 e 1 e parseInt - pega apenas a parte inteira do numero
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// Enquanto o chute for diferente do numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${tamanhoDoJogo}`);

    // Se chute for igual ao numeroSecreto
    if (chute == numeroSecreto) {
        break;
    } 
    else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } 
        else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;     
    }

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // OPERADOR TERNÁRIO - tentativas é maior que 1 ? se sim então 'tentativas' senão(:) 'tentativa' 
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`); // Template String = texto entre crase e ${} com a variavel dentro

/*
    if (tentativas > 1) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
    } 
    else {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} na PRIMEIRA tentativa!`);
    }
*/





    