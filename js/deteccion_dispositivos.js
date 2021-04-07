const d = document,
n = navigator,
ua = n.userAgent;

export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
    isMobile = {
        //se busca mediante una expresión regular si hay una coincidencia en el user agent, 
        android: () => ua.match(/android/i), 
        ios: () => ua.match(/iphone|ipod|ipad/i),
        windows: () => ua.match(/windows phone/i),
        any: function(){
            return this.android() || this.ios() || this.windows();
        }
    },
    isDesktop = {
        linux: () => ua.match(/linux/i), 
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windwos nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows();
        }
    },
    isBrowser = {
        chrome: () => ua.match(/chrome/i), 
        firefox: () => ua.match(/firefox/i),
        safari: () => ua.match(/safari/i),
        opera: () => ua.match(/opera|opera mini/i),
        edge: () => ua.match(/edge/i),
        any: function(){
            return(
                this.chrome() ||
                this.firefox() ||
                this.safari() ||
                this.opera() ||
                this.edge());
        }
    };

   /* console.log(ua);
    console.log(isMobile.android());
    console.log(isMobile.any());*/

    $id.innerHTML = `
        <ul>
            <li><b> User Agent:</b> ${ua}</li>
            <li><b>Plataforma:</b> ${isMobile.any() ? isMobile.any(): isDesktop.any() }</li>
            <li><b> Navegador:</b> ${isBrowser.any()} </li>
        </ul>`;
    
    //Redirecciones
    if(isMobile.android()){
        window.location.href = "https://www.youtube.com"
    }


}