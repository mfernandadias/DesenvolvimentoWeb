let lista = localStorage.getItem("minhalista");
const formulario = document.querySelector("form");
const ulPessoas = document.querySelector("ul");

if(lista) {
    lista = JSON.parse(lista);
} else {
    lista = [];
}

 


formulario.addEventListener("submil", function (e){
    e.preventDefault();
    let novaPessoa = new object();
    novaPessoa.nome = this.nome.value; 
    novaPessoa.telefone = this.nome.value; 
    novaPessoa.telefone = this.telefone.value; 
    console.log(novaPessoa);

    lista.push(novaPessoa);

    this.reset();

    localStorage.setItem("minhaLista", JSON.stringify(lista));

    listar();
})

function listar() {
    ulPessoas.innerHTML="";
    lista.forEach((item, key) => {
        console.log(item,key);
    });
}




