window.onload=function(){
    document.getElementById("btnMenu").addEventListener("click",function(){
        console.log(document.getElementById('idSidebar'));
        document.getElementById('idSidebar').classList.toggle("contenidoOpcion");
    })
}