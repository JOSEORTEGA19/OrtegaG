window.onload=function(){
    document.getElementById("btnMenu").addEventListener("click",function(){
        console.log(document.getElementById('miSidebar'));
        document.getElementById('miSidebar').classList.toggle("contenidoOpcion");
    })
}