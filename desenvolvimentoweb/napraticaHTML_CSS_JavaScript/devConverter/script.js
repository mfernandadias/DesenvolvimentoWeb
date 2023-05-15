const form = document.getElementById('iform');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

function handleSubmit(e) {
    e.preventDefault();
    
    if (!inputValue.value || inputValue.value < 0){
       alert('Informe um valor correto!');
       return; 
    } else if(!selectedCurrency.value){
        alert('Escola uma moeda!');
        return;
    }
};
