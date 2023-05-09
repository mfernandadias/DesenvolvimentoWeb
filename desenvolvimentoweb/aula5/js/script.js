
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function mostrarResultado() {
    const login = form.querySelector('.login').value;
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












/*function meuescopo () {
   const form = document.querySelector('.form');
   const resultado = document.querySelector('.resultado');

   const pessoas = [];
   
   function recebeEventForm (evento) {
    evento.preventDefault();

    const login = form.querySelector('.login');
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const N1 = form.querySelector('.N1');
    const N2 = form.querySelector('.N2');
    const Nota_Final = form.querySelector('.Nota_Final');

   pessoas.push ({
    login: login.value, 
    nome: nome.nodeValue, 
    sobrenome: sobrenome.value,
    N1: N1.value,
    N2: N2.value, 
    Nota_Final: Nota_Final.value
   });
   
   console.log(pessoas);

   resultado.innerHTML += `<p>${login.value} ${nome.value} 
   ${sobrenome.value} ${N1.value} ${N2.value} ${Nota_Final.value}</p>`
   
   }

   form.addEventListener('submit', recebeEventForm);
}
meuescopo(); */