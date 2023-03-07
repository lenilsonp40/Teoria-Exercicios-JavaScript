/*
Escreva um código que produz o seguinte:
const array = [3, 78, 2, 16, 9]
total de itens =  5
soma = 108
numeros de pares ordenados : [2, 16 ,78]
*/ 




function numeros(num) {
    let soma = 0;
    for(let index = 0; index < num.length; index += 1){
        soma = soma + num[index];
    }
    return `A soma total é ${soma}`;
};
console.log(`o total de itens é ${numeros.length}`) // Não conseguir trazer a quantidade de elementos desse array
console.log(numeros([3, 78, 2, 16 ,9]))
console.log( typeof numeros)








