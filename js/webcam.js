const d = document,
n = navigator;

export default function webcam(id){
    const $video = d.getElementById(id);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
            .getUserMedia({video:true, audio:false})
            .then((stream) => {
                console.log(stream);
                $video.srcObject = stream;
                //$video.play();
            })   
            .catch((error) => {
                $video.insertAdjacentElement(
                    "beforebegin",
                    `<p>Sucedio lo inesperado: <mark> ${error} </mark></p>`
                );
                console.log(`Ocurrió un error: ${error}`);
                
            });          
    }
}