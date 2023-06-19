
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function mostrarResultado() {
    const nome = form.querySelector('.nome').value; 
    const sobrenome = form.querySelector('.sobrenome').value;
    const InstituicaoDeEnsino = form.querySelector('.Instiuicao_de_ensino').value;
    const cargo = form.querySelector('.cargo').value;

    const linha = document.createElement('tr');
    linha.innerHTML = `
    <td>${nome}</td>
    <td>${sobrenome}</td>
    <td>${InstituicaoDeEnsino}</td>
    <td>${cargo}</td>
    `;

    const tbody = resultado.querySelector('tbody');
    tbody.appendChild(linha);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    mostrarResultado();
}); 