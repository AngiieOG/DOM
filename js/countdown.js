const documento = document;

export default function cuenta_regresiva(id, fecha, mensaje){
    const $DOMcuentaRegresiva = documento.getElementById(id),
    diaLimite = new Date(fecha).getTime();

    let tiempoCuentaRegresiva = setInterval(() => {
        let hoy = new Date().getTime(),
        fecha = diaLimite - hoy,
        days = Math.ceil(fecha / (1000*60*60*24)), 
        hours = Math.floor(fecha % (1000*60*60*24)/(1000*60*60)),
        minutes = Math.floor(fecha % (1000*60*60)/(1000*60)),
        seconds = Math.floor(fecha % (1000*60)/1000);
        $DOMcuentaRegresiva.innerHTML = `<h3>Faltan: ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos para mi cumpleaños</h3>`;
        console.log(diaLimite, hoy, fecha);
        
        if(fecha < 0){
            clearInterval(tiempoCuentaRegresiva);
            $DOMcuentaRegresiva.innerHTML = `<h3>Feliz cumpleaños Angie`
        }

    }, 1000);
}