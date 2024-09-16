let cantidad = document.getElementById('cantidad');   //document.getElementByID es para traer el valor del campo de html

let boton = document.getElementById('generar');

let contrasena = document.getElementById('contrasena');

let mensaje = document.getElementById('mensaje');


const cadenacaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
//function crea funcion
function generar() {

    let numDigi = parseInt(cantidad.value);

    if (numDigi<6) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }
    
    else{

        let password='';
    
        for (let i = 0; i < numDigi; i++) {
        
            let caracterALeatorio = cadenacaracteres[Math.floor(Math.random() * cadenacaracteres.length)]; 
        
            password +=caracterALeatorio; 
    }

        contrasena.value = password; 

        validarContrasena(password);
    }
    
    
}

function copiar() {
    if (contrasena.value!='') {
        contrasena.select();
        document.execCommand("copy");//ejecuta el comando de copiar lo que esta en el campo de contrasena
        alert("Contraseña copiada al portapapeles");
    }
    else{
        alert("Genere la contraseña")
    }
    
}

function limpiar() {
    contrasena.value = "";
    mensaje.innerText = "";
    mensaje.classList.remove("debil");
    mensaje.classList.remove("fuerte");
}

function validarContrasena(password) {
    const regexNumero = /\d/;  // Verifica si hay un número
    const regexMayuscula = /[A-Z]/;  // Verifica si hay una letra mayúscula

    if (!regexNumero.test(password)) {
        mensaje.innerText = "Contraseña débil: Debe contener al menos un número.";
        mensaje.classList.remove("fuerte");
        mensaje.classList.add("debil");
    } else if (!regexMayuscula.test(password)) {
        mensaje.innerText = "Contraseña débil: Debe contener al menos una letra mayúscula.";
        mensaje.classList.remove("fuerte");
        mensaje.classList.add("debil");
    } else {
        mensaje.innerText = "Contraseña fuerte.";
        mensaje.classList.remove("debil");
        mensaje.classList.add("fuerte");
    }
}



