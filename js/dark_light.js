export default function darkMode(btn){
    const $cambiarColor = document.querySelector(btn);

    $cambiarColor.addEventListener("click", evento =>{
        
        let $darkMode = document.querySelector(".dark-mode").classList.toggle("is-active");
        let moon = "🌙"; 
        let sun = "☀️";
        
        /*if(localStorage.getItem("#423b4f") === "#faf7f6"){
            console.log("provoco problemas");
            localStorage.removeItem("#423b4f");
        }*/
    
        let darkTheme = () => {
                document.body.style.backgroundColor = "#423b4f"; 
                document.body.style.color = "#faf7f6";
                $cambiarColor.textContent = sun;
                localStorage.setItem("theme", "dark");
                console.log("hola, soy el dark theme");
        }
        let lightTheme = () =>{
                document.body.style.backgroundColor = "#ffffff"
                document.body.style.color = "#000000"
                $cambiarColor.textContent = moon;
                localStorage.setItem("theme", "light");
        }

        if($darkMode){
            darkTheme();
        }else{
            lightTheme();
        }
        document.addEventListener("DOMContentLoaded", evento => {
            //console.log(localStorage.getItem("theme"));
            if(localStorage.getItem("theme") === null) localStorage.setItem("theme", "light");
            if(localStorage.getItem("theme") === "light") lightTheme();
            if(localStorage.getItem("theme") === "dark") darkTheme();
        });  
    });

       
}