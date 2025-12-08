function criaSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { 
        hour12: false,
        timeZone: 'GMT'
})
}



let relogio = document.querySelector('.relogio');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaSegundos(segundos);
    },1000)
}

document.addEventListener('click', function(e){
    const el = e.target // ele pega o valor doque é clicado

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pause')
        clearInterval(timer)
        iniciaRelogio()
   ;    
    }
    if(el.classList.contains('pausar')){
        clearInterval(timer)
        relogio.classList.add('pause')
   ;    
    }

    if(el.classList.contains('zerar')){
        relogio.classList.remove('pause')
        clearInterval(timer);
        relogio.innerHTML=('00:00:00')
        segundos = 0 
   ;    
    }

    
})

