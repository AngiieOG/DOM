const documento = document;

export function relojDigital(clock, btnIniciar, btnDesactivar){
    let tiempo;

    documento.addEventListener("click", (evento) => {
        if(evento.target.matches(btnIniciar)){
            
            tiempo = setInterval(() => {
                let hora = new Date().toLocaleTimeString();
                documento.querySelector(clock).innerHTML = `<h3>${hora}</h3>`;   
            }, 1000); //se ejecuta cada segundo

            evento.target.disabled = true;
        }

        if(evento.target.matches(btnDesactivar)){
            clearInterval(tiempo);
            //documento.querySelector(clock).remove(); //con el metodo remove no funciona porque lo borra definitivamente
            documento.querySelector(clock).innerHTML = null;
            documento.querySelector(btnIniciar).disabled = false;
        }
    });
}

export function alarma(alarma, btnIniciar, btnDesactivar){
    
    let alarmaTiempo;
    const $alarmaDOM = documento.createElement("audio");
    $alarmaDOM.src = alarma;

    documento.addEventListener("click", evento => {
        if(evento.target.matches(btnIniciar)){
            alarmaTiempo = setTimeout(() => {
                    $alarmaDOM.play();
            }, 1000);
            evento.target.disabled = true;
        }
        if(evento.target.matches(btnDesactivar)){

            documento.querySelector(btnIniciar).disabled = false;
            $alarmaDOM.pause();
        }
    });
}