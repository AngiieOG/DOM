const d = document,
w = window;

export default function responsiveTester(form){
    let ventana;
    const $form = d.getElementById(form);
 
    function probarVentana(){
        ventana = w.open($form.direccion.value, "ventana", `innerWidth = ${$form.ancho.value}, innerHeight = ${$form.alto.value}`);
    }

    //Lógica del botón tipo "submit", esto no aplica al tipo button
    d.addEventListener("submit", (evento) => {
        if(evento.target === $form){
            //Si un form no tiene un action se va a procesar automaticamente, por lo que debemos prevenir esto. En caso contrario los datos quedarían reflejados en la un url al procesarce el envío
            evento.preventDefault();
            probarVentana();  
            //tester = $form.direccion.value;
        }
    });

    d.addEventListener("click", evento => {
        //Solo se puede acceder a los nombres si el evento es de tipo click, con el evento submit no funciona
        if(evento.target === $form.cerrar){
            ventana.close();
        }
    });    
}