const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Seu número +2 é ${numero +2}.</p>`;
texto.innerHTML += `<p>Raiz quadrada : ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima : ${Math.floor(numero)}. </p>`;

