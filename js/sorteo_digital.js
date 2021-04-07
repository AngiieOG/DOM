const d = document,
$fragmento = d.createDocumentFragment();

export default function sortearGanador(id, boton){
    const $lista = d.getElementById(id);
    let pokemons = ["Pikachu",
                    "Charmander",
                    "Squirtle",
                    "Bulbasaur",
                    "Pidgey",
                    "Butterfree",
                    "Schyter",
                    "Mr Mime",
                    "Aerodactyl",
                    "Psyduck"]
 
    for(let i=0; i<pokemons.length; i++){

        const $li = d.createElement("li");
        $li.innerHTML = `${pokemons[i]}`;
        $fragmento.appendChild($li);
    }
    $lista.appendChild($fragmento);

    d.addEventListener("click", e =>{
        let ganador = pokemons[Math.floor(Math.random() * pokemons.length)]

        if(e.target.matches(boton)){
            console.log("El ganador es ", ganador);
        }
    });
}