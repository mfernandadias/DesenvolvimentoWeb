
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function mostrarResultado() {
    const login = form.querySelector('.Login').value;
    const nome = form.querySelector('.nome').value; 
    const sobrenome = form.querySelector('.sobrenome').value;
    const n1 = form.querySelector('.n1').value;
    const n2 = form.querySelector('.n2').value;
    const nota_final = form.querySelector('.Nota_Final').value; 
     

    const linha = document.createElement('tr');
    linha.innerHTML = `
    <td>${login}</td>
    <td>${nome}</td>
    <td>${sobrenome}</td>
    <td>${n1}</td>
    <td>${n2}</td>
    <td>${nota_final}</td>
    `;

    const tbody = resultado.querySelector('tbody');
    tbody.appendChild(linha);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    mostrarResultado();
});











