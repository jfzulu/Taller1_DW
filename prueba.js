const formulario = document.getElementById('formulario');
let mensaje = document.getElementById('mensaje');
let nombre = document.getElementById('nombre');
//const inputs = document.querySelectorAll('#formulario input'); //# = id acceder a todos los inputs del formulario
let caracteres = /^[a-zA-Z0-9À-ÿ\s]{0,300}$/;
let mensajeEnviado = document.getElementById('mensajeEnviado'); 
let bandera = false;
const listaMensajes = document.querySelector("#chat-messages");

//error.style.color = 'red';

function changeBackground(element){   
    element.className = "cambioColor";
    element.style.border="solid";
    element.style.borderColor="yellow";
    console.log("Cambio de Color");
}
function backBackground(element){
    element.className = "vueltaColor";
    element.style.border="solid";
    element.style.borderColor="aquamarine"; 
    console.log("de vuelta al Color original");
}

const validarFormulario = (event) =>{
    //if(caracteres.test(event.target.value))
    if(event.target.value.length < 300)
    {
        bandera = true;
        document.querySelector('#grupo__mensaje .formulario__input-error').classList.remove('formulario__input-error-activo');
    }else{
        document.querySelector('#grupo__mensaje .formulario__input-error').classList.add('formulario__input-error-activo');
    }
}

mensaje.addEventListener('keyup', validarFormulario);

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    if(bandera)
    {
        const message = mensaje.value;
        if (!message) return;

        const chatMessage = document.createElement("li");
        chatMessage.classList.add('messages');
        chatMessage.textContent = nombre.value + ": "+ message;
        listaMensajes.appendChild(chatMessage);

        listaMensajes.scrollTop = listaMensajes.scrollHeight;
        mensaje.value = "";
        nombre.value = "";
    }
    
});

/*function sendMessage(){
    let errorMessage = [];
    console.log(message);
    if(message.value === null || message.value === ''){
        errorMessage.push("El mensaje tiene más de 300 caracteres");
    }
    error.innerHTML = errorMessage.join(', ');

    return false;
}*/


    