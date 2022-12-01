"use strict";
/*CAPTCHA*/
document.getElementById("generar").addEventListener("click",generarCaptcha);

function generarCaptcha(){ 
    let captcha= "";
    for (let i = 0; i < 4; i++) {
        captcha = String(digitoCaptcha()) + captcha ; 
    } 
    document.getElementById("captcha").value = captcha;
}

function digitoCaptcha(){ 
    let numero = Math.floor(Math.random()*10); 
    return numero;
}
document.getElementById("enviar-captcha").addEventListener("click",enviarformulario);

function enviarformulario() {
    let captchaIngresado = document.getElementById("captcha-ingresado").value;
    let captchaGenerado = document.getElementById("captcha").value;
    if ((captchaIngresado === captchaGenerado ) && (captchaIngresado !== "") && (captchaGenerado !== "")) {
        document.getElementById("validacion-captcha").innerHTML="☑ Captcha correcto. Gracias por darnos tu opinion 😃";
        document.getElementById("validacion-captcha").classList.add("captcha-correcto");
        document.getElementById("validacion-captcha").classList.remove("captcha-incorrecto");
    }
    else {
        document.getElementById("validacion-captcha").innerHTML="❌ Captcha incorrecto, intentelo de nuevo ❌";
        document.getElementById("validacion-captcha").classList.add("captcha-incorrecto");
        document.getElementById("validacion-captcha").classList.remove("captcha-correcto");
    }
}