const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');



window.addEventListener('load', ()=>{
    const form = document.querySelector('#formulario');
    const nombre = document.getElementById('nombreCliente');
    const mail = document.getElementById('mail');
    const telefono = document.getElementById('telefono');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        validarCampos()
    })


function validarCampos(){
    //capturamos los valores ingresados
    const nombreValor = nombre.value;
    const mailValor = mail.value;
    const telefonoValor = telefono.value;
    var nombreValid=false;
    var mailValid=false;
    var telefonoValid=false;

    //valido en campo de nombre
    (!nombreValor) ? validaFalla(nombre, 'Campo vacio') : (nombreValid = validaOk(nombre))
    
    //valido en campo de mail
     if(!mailValor){
            validaFalla(mail, 'Campo vacío')            
        }else if(!validaEmail(mailValor)) {
            validaFalla(mail, 'El e-mail no es válido')
        }else {
            mailValid = validaOk(mail)
           

        }
    
    //valido en campo de mail
    if (!telefonoValor) {
            validaFalla(telefono, 'Campo vacío') 
    } else if (isNaN(telefonoValor)) {
            validaFalla(telefono, 'Telefono no valido') 
    } else {
        telefonoValid = validaOk(telefono)
    }

    if (nombreValid && mailValid && telefonoValid) {
        console.log("todos son validos")
        AgregarCliente();
    }
        
}

})

const validaFalla = (input, mensaje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = mensaje

    formControl.className = 'form-control falla'
}
const validaOk = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
    return true;
}

const validaEmail = (mail) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);        
}


