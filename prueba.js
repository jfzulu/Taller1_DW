var id;
function changeBackground(element){   
    element.className = "cambioColor";
    element.style.border="solid";
    element.style.borderColor="yellow";
    console.log("Cambio de Color");
}
function backBackground(element){
    element.className = "vueltaColor";
    console.log("de vuelta al Color original");
}