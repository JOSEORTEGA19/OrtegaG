window.onload=function()
{
    document.getElementById("boton2").addEventListener("click",pedirHeader);
    function pedirHeader()
    {
        var solicitud = new XMLHttpRequest();

        solicitud.onreadystatechange=function() {
        if(solicitud.readyState==4 && solicitud.status==200){
            document.getElementById("MyDiv").innerHTML=solicitud.responseText;
        }};
        solicitud.open("GET","Archivo_Cargar.txt",true);
        solicitud.send();
}
function iniciarHeader(){
    document.getElementById("MyDiv").innerHTML="<h2>Este es un Header Nivel 2 <h2>"
}
}