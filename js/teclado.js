const documento = document;
let x= 0;
let y=0;

export function atajo(evento){
    console.log(evento);
    console.log(evento.type);
    console.log(evento.keyCode);

    if(evento.key === "a" && evento.altKey){
        window.alert("Has lanzado un evento con el teclado");
        console.log("tecleaste la letra a");
    }
}

export function moverPelota(evento, ball, stage){
    const $ball = documento.querySelector(ball);
    const $stage = documento.querySelector(stage);
    const limitePelota = $ball.getBoundingClientRect();
    const limiteStage = $stage.getBoundingClientRect();

    console.log(limitePelota);
    console.log(limiteStage);
    /* const mover = (direction) => {
        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
    }*/

    switch(evento.keyCode){
        case 37:
            //mover("left");
//            x--;
            evento.preventDefault();
            if(limitePelota.left > limiteStage.left) x--;
            break;
        case 38:
            //mover("up");
            //y--;
            evento.preventDefault();
            if(limitePelota.top > limiteStage.top) y--;
            break;
        case 39:
            //mover("right");
            //x++;
            evento.preventDefault();
            if(limitePelota.right < limiteStage.right) x++;
            break;
        case 40:
            //mover("down");
            //y++;
            evento.preventDefault();
            if(limitePelota.bottom < limiteStage.bottom) y++;
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}