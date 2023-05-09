
function meuescopo () {
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

    console.log(login, nome, sobrenome, N1, N2, Nota_Final);
   }

   form.addEventListener('submit', recebeEventForm);
}
meuescopo();