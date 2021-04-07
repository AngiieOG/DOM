//Asignar la el identificado del botón a una variable 
const menuButton = document.getElementById("button");
const linkMenu = document.querySelector(".menu_seccion");
//let linkMenu = document.getElementsById("#seccion");
const d = document;

menuButton.addEventListener("click", e => {
    //insertar una clase al aside del panel 
    d.querySelector(".panel").classList.toggle("is-active");
    d.querySelector(".panel-btn").classList.toggle("is-active");

    if(d.querySelectorAll(".menu a") == e.target.matches(linkMenu)){
        d.querySelector(".panel").classList.remove("is-active");    
    }
    
});
/*
linkMenu.addEventListener("click", function(){
    d.querySelector(".panel").classList.remove("is-active");
}); */
/*
if(e.target.matches(linkMenu)){
    d.querySelector(".panel").classList.remove("is-active");
} */
/*
//solución Jon
export default function burgerMenu(menuButton, panel){

    menuButton.addEventListener("click", e => {
        if(e.target.matches(menuButton)){

        }
    }

)}*/