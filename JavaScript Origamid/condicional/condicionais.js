let possuirGraduacao = false;
let possuiDoutorado = true;

if(possuirGraduacao) {
    console.log('é verdadeiro');
}else if(possuiDoutorado) {
    console.log('é falso');
}else {
    console.log('Não Possui Nada!');
}

var corFavorita = 'Vermelho';

switch (corFavorita) {
    case 'Azul' :
        console.log('Olhe para o céu!');
        break;
    case 'Amarelo' :
        console.log('olhe para o sol!');
        break;
    case 'Vermelho' :
        console.log('Acertou!');
        break;
    default : // caso não encontre uma condição
        console.log('Condição inválida!')
}

