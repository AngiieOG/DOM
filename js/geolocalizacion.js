const d = document,
n = navigator;

export default function geolocalizacion(id){

    let visualizar = d.getElementById(id);       

    let opciones = {
        enableHighAccuracy: true,
        timeout: 4000,
        maximumAge: 0
    };

    function obtenerUbicacion(position){
        console.log("hola");
        const longitud = position.coords.longitude;
        const latitud = position.coords.latitude;
        const precision = position.coords.accuracy;
        console.log(`Lat: ${latitud}, Long: ${longitud}`);
        console.log(position);
        visualizar.innerHTML = `<b>Latitud:</b> ${latitud}<br>
         <b>Longitud:</b> ${longitud}<br>
         <b>Precisión:</b> ${precision} metros <br><br>
         <a href= "https://www.google.com/maps/@${latitud}, ${longitud},
         13z", target = "_blank" rel="noopener">Ver en Google Maps</a> `;
    }

    function error(error){
        console.warn('ERROR' + error.code + '):' + error.message);
    }
    /*
    function obtenerMapa(){
            mapa = new google.maps.Map(mapa), {
                center: {latitud, longitud},
                zoom: 13
            }
            var marker = new google.maps.Marker({
                position: {lat: 7.8962554, lng: -72.4626249},
                mapa: map,
            title: 'Acuario de Gijón'
              });
    }*/
    if (n.geolocation){
        //obtenerUbicacion();
        n.geolocation.getCurrentPosition(obtenerUbicacion, error, opciones);   
    }    
}