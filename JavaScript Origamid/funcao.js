function imc(peso, altura) {
    let imc = peso / (altura * altura);
    console.log(imc);
}

imc(45, 1.80);

////////

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    }else if (cor === 'verde') {
        return 'Eu gosto de mato';
    }else {
        return 'Eu não gosto de cores';
    }
}

console.log(corFavorita());

////

