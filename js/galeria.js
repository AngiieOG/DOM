const d = document;

export function cambiarImagen(){
    const $btnIzq = d.querySelector(".prev"),
    $btnDer = d.querySelector(".next"),
    $imagenes = d.querySelectorAll("#galeria-slide");

    let i = 0;

    d.addEventListener("click", evento => {
        if(evento.target === $btnIzq){
            evento.preventDefault();
            $imagenes[i].classList.remove("active");
            i--;
            if(i<0){
                i = $imagenes.length -1;
            }

            $imagenes[i].classList.add("active");
        }

        if(evento.target === $btnDer){
            evento.preventDefault();
            $imagenes[i].classList.remove("active");
            i++;

            if(i > $imagenes.length){
                i = 0;
            }

            $imagenes[i].classList.add("active");
        }
    }

    );
}