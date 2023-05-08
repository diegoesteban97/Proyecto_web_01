 const usuario = document.getElementById("Usuario")
 const email = document.getElementById("Email")
 const contraseña = document.getElementById("Contraseña")
 const form = document.getElementById("form")
 const parrafo = document.getElementById("warnings")

 form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML= ""
    if(usuario.nodeValue.lenght<1) {
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    if(!regexEmail.test(regexEmail.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(contraseña.value.lenght <1){
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
 })