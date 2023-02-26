
function mOver(obj) {
    obj.innerHTML = "Jose Paniagua"
}

function mOut(obj) {
    obj.innerHTML = "Prof en Matematica"
}


function expandir(){
    document.getElementById("tama").classList.toggle("ampliada");
}

document.getElementById("modificar").onclick =function(){
    expandir()
}
 