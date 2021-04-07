/* import burgerMenu from "./menu_hamburguesa.js";

//se invoca el selector y el panel
burgerMenu(".panel-btn", "panel"); */

import {relojDigital, alarma} from "./reloj.js";
//no se importa de manera defaul porque no se exportó por default
//import {moverPelota, atajo} from "./teclado.js";
import cuenta_regresiva from "./countdown.js";
//import irArriba from "./scroll_button.js";
import darkMode from "./dark_light.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./responsive_tester.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import deteccionRed from "./deteccion_red.js";
//import webcam from "./webcam.js";
import geolocalizacion from "./geolocalizacion.js";
import buscarFiltros from "./filtro_busquedas.js";
import sortearGanador from "./sorteo_digital.js";
import { cambiarImagen } from "./galeria.js";

const documento = document;

documento.addEventListener("DOMContentLoaded", (evento) =>{
    //auqi debería ir la funcion de burger menu
    relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarma("assets/atmosfera.mp3", "#iniciar-alarma", "#desactivar-alarma");
   // cuenta_regresiva("countdown", "May 11, 2021 00:00:01", "Feliz cumpleaños Angie 😎");
    //irArriba(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/hlZ4Wz4n4CA" target="_blank" rel="noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/hlZ4Wz4n4CA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/FHtv32vPysyVpsup9" target="_blank" rel="noopener">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.771417386324!2d-43.22020147498258!3d-22.95233160085589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa2af13ff01eb9f%3A0x8cf70199d061b749!2sCerro%20del%20Corcovado!5e0!3m2!1ses-419!2sco!4v1613259786750!5m2!1ses-419!2sco" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    //responsiveTester(".probar", ".cerrar", "url", ".ancho", ".alto");
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    //webcam("webcam");
    geolocalizacion("geolocalizacion");
    buscarFiltros(".card-filter", ".card");
    sortearGanador("sorteo-digital", "#boton");
    cambiarImagen();
    
});
/*
documento.addEventListener("click", evento => {
    responsiveTester(".probar", ".cerrar");
});
*/
/*
documento.addEventListener("keydown", evento => {
    atajo(evento);
    moverPelota(evento, ".ball", ".stage");
});
*/
darkMode(".dark-mode");
deteccionRed("deteccion-red");
