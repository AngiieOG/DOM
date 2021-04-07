const d = document,
w = window;

export default function irArriba(btn){
    const $botonIrArriba = d.querySelector(btn);

    w.addEventListener("scroll", evento => {
        let scroll = w.pageYOffset || d.documentElement.scrollTop;
        console.log(w.pageYOffset, d.documentElement.scrollTop);

        if(scroll > 1200){
            $botonIrArriba.classList.remove("hidden");
        }else{
            $botonIrArriba.classList.add("hidden");
        }
    });

    d.addEventListener("click", evento => {
        if(evento.target.matches(btn)){
            w.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    });
}