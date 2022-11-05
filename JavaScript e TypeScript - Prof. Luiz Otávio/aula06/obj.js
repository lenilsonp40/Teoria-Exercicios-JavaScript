function criapessoa (nome, sobrenome, idade) {
    return {nome , sobrenome, idade};
}

const pessoa1 = criapessoa('Luiz', 'Miranda', 25);
const pessoa2 = criapessoa('Maria','Oliveira', '32');

console.log(pessoa1.nome, pessoa2.idade);

// Primitivo (imutáveis) - string , number , booolean . undefined , null (bigint , symbol) - valores que são copiados.
// Referência (mutável) - array , object, function - Passados por referência
const a = {
    nome: 'Luiz' ,
    sobrenome : 'Otávio'
};
const b = a ;
b.nome = 'João';
console.log(a);
console.log(b)
