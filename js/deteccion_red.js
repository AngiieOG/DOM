const d = document,
n = navigator;

export default function deteccionRed(id){
    const $id = d.getElementById(id);
    let $online = n.onLine;
    
    if($online === true){
        console.log("Aún no sé si hay internet, voy a verificar");
        verificarRed();
    }else{
        verificarRed();
    }  

    async function verificarRed(){
        try {
            let respuesta = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await respuesta.json();
            if(!respuesta.ok) throw {status: respuesta.status, statusText: respuesta.statusText};
            
        } catch (error) {
            //console.log("Hay un error seguro");
            if(error.status === undefined){
                $id.classList.toggle("is-false");
                $online = false;
                console.log("no estoy online", $online);
            }
        }
        $id.innerHTML = `<ul><b> En línea: ${$online} </b></ul>`
    }
}