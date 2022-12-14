
let btnRegistro = document.querySelector("#btnRegistro");
let password = document.querySelector("#password");
let inputContrasenia = document.querySelector("#contrasenia");
let confirmacionPassword = document.querySelector("#confirmacionPassword");
let inputConfirmacion = document.querySelector("#confirmacionContrasenia");
async function registrar() {
    let inputEmail = document.querySelector("#email");
    let validacionEmail = /([a-zA-Z0-9])+@([a-zA-Z])+\.[com]/;
    let validacionContrasenia = /[\w-.@]{8}/; // BUSCAR MEJOR PORQUE NO ME VALIDA EL PUNTO MAXIMO

    if (validacionEmail.test(inputEmail.value) && validacionContrasenia.test(inputContrasenia.value) && inputContrasenia.value.length < 20 && inputContrasenia.value === inputConfirmacion.value) {
        let usuarioRepetido = await fetch(`/usuario/${inputEmail.value}`)

        console.log(usuarioRepetido.ok)
        
        if (!usuarioRepetido.ok) {
            let usuario = {
                "nombre": inputEmail.value,
                "contrasenia": inputContrasenia.value,
                "rolIdRol": 2
            }
            let respuesta = await fetch("/usuario", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });
            if (respuesta.ok) {
                let response = await fetch("usuario/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(usuario)
                })
                if(response.ok) {
                    let json = await respuesta.json(); 
                    console.log(json)
                    window.sessionStorage.setItem("loginOk", true);
                    window.sessionStorage.setItem("idUsuario", json.idUsuario);
                    window.sessionStorage.setItem("nombre", json.nombre);
                    window.sessionStorage.setItem("token", json.token);
                    window.location.href = './index.html';
                }

            }
            else {
                console.log("Error en la creacion");
            }
        }
        else {
            
            swal.fire("El email ya existe");
        }

    }
    else if (!validacionEmail.test(inputEmail.value)) {
        swal.fire("Email invalido");
    }
    else if (!validacionContrasenia.test(inputContrasenia.value) || inputContrasenia.value.length > 20 ) {
        swal.fire("Formato de contrase??a invalido");
    }
    else if (inputContrasenia.value != inputConfirmacion.value) {
        swal.fire("Las contrase??as no coinciden");
    }

}
btnRegistro.addEventListener("click", registrar);
// window.onkeydown = function (event){ // SI LO ACTIVO ACA NO ME DEJA USAR LAS ALERTAS DE SWAL
//     if (event.keyCode == '13'){
//         registrar();
//     }
//  }




password.addEventListener("click", () => {
    if (inputContrasenia.getAttribute("type") == "password") {
        inputContrasenia.removeAttribute("type");
    }
    else {
        inputContrasenia.setAttribute("type", "password");
    }

})
confirmacionPassword.addEventListener("click", () => {
    if (inputConfirmacion.getAttribute("type") == "password") {
        inputConfirmacion.removeAttribute("type");
    }
    else {
        inputConfirmacion.setAttribute("type", "password");
    }

})