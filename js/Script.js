const horas = document.getElementById('horas');
const minutos = document.getElementById('minutossegundos');
const segundos = document.getElementById('segundos');
const relogio = setInterval(function time (){
    
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let minutos = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (minutos < 10) minutos = '0' + minutos
    if (seg < 10) seg = '0' + seg

    horas.textContent = hr;
    Minutos.textContent = minutos;
    segundos.textContent = seg;
    
    
})

