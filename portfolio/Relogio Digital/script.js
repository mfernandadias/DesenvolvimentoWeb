const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setIntervale(function time(){
    let dateToday = new date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr; 

    if(min < 10) min = '0' + min; 

    if (s < 10) hr = '0' + hr

    horas.textContet = hr; 
    minutos.textCentent = min; 
    segundos.textContent = s;

})