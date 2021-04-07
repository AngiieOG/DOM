const d = document;

export default function buscarFiltros(input, card){
    let palabra = "";
    
    d.addEventListener("keyup", evento =>{
        if(evento.target.matches(input)){
            
            d.querySelectorAll(card).forEach(elemento => 
                elemento.textContent.toLowerCase().includes(evento.target.value)
                ? elemento.classList.remove("filter")
                : elemento.classList.add("filter")
                //console.log(palabra);
            );
        }
    });
}