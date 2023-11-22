/*
let num1 = prompt("digite um numero");

let num2 = prompt("digite outro numero")

let op = prompt("Digite a operação matematica:")

let soma;

if(op == "+"){
    soma = Number(num1) + Number(num2);
}else if(op =="-"){
    soma = Number(num1) + Number(num2);
}else if(op == "*"){
    soma = Number(num1) + Number(num2);
}else if(op == "/"){
let soma = Number(num1) + Number (num2);
}else{ 
    alert('informe uma op válida');
}
alert('o resultado da op é' +soma)
               */
              /*
let o = prompt("digite um numero")

let p = prompt("digite outro numero")

let r = prompt("digite outro numero")

let s =prompt("digite outro numero")

let op =prompt("digite a operaçãpo matematica")

let soma;
 soma = (Number(o) + Number(p) + Number(r) + Number(s)/4)

 alert('a soma da op é' + soma)
*/
/*
let n1 = prompt("quantos km o veiculo percorreu?")

let n2 = prompt("quantos dias o carro foi utilizado")

let soma;

soma = (Number(n1)*0.20) + (Number(n2)*90)

alert('a soma da op é' + soma)
*/
/*
let n1 = prompt("km da viagem")

let soma;


if (n1 <= 200){
    soma = Number(n1)*0.50;
} 
else if(n1 > 200){
    soma = Number(n1)*0.45;
}
else{
    alert ('digite um valor valido');
}
alert('valor a pagar ' + soma);
*/
let n1 = prompt("nota 1")
let n2 = prompt("nota2")
let soma;

soma = (Number(n1) + Number (n2)) /2


if ( soma <=4.9){
        alert('voce foi reprovado')
}else if( soma >=5 && soma <=6.9){
    alert('voce esta de recuperação')
}else {
    alert ('voce está aprovado')
}

alert('O valor da sua nota é ' +soma)