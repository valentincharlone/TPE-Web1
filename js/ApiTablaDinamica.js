"use strict"

document.addEventListener("DOMContentLoaded",
mostrarDatos);

document.getElementById("agregar1").addEventListener("click",agregar1Alista);
document.getElementById("agregar3").addEventListener("click",agregar3Alista);


const url = "https://60d0e2837de0b20017109bbc.mockapi.io/productos/";


async function agregar1Alista(){
    let marca = document.getElementById("marca").value;
    let sabor = document.getElementById("sabor").value;
    let tamaño = document.getElementById("tamaño").value;
    
    let productoNuevo = {
        "marca": marca,
        "sabor": sabor,
        "tamanio": tamaño
    }
    try{
        let res = await fetch(url,{
            "method": "POST",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(productoNuevo)
        });
        if (res.status === 201){
            document.querySelector("#msg").innerHTML = "Creado!";
            setTimeout(msg,3000);
        }
    }
    catch(error){
        console.log(error);
    }
    mostrarDatos();
    
}
function msg() {
    document.querySelector("#msg").innerHTML = "";
}

async function agregar3Alista(){
    let marca = document.getElementById("marca").value;
    let sabor = document.getElementById("sabor").value;
    let tamaño = document.getElementById("tamaño").value;
    
    let productoNuevo = {
        "marca": marca,
        "sabor": sabor,
        "tamanio": tamaño
    }
    try{
        for (let i = 0; i < 3; i++) {
            if ((marca != "") && (sabor != "") && (tamaño != "")) {
                
                let res = await fetch(url,{
                    "method": "POST",
                    "headers": {"Content-type": "application/json"},
                    "body": JSON.stringify(productoNuevo)
                });
                if (res.status === 201){
                    document.querySelector("#msg").innerHTML = "Creado!";
                    setTimeout(msg,3000);
                }
            }
        }
    }
    catch(error){
        console.log(error);
    }
    mostrarDatos();
}

async function borrarFila(){
    //fila = fila donde se encuentra el boton (tr)
    let fila= this.parentNode.parentNode;
    console.log(this);
    console.log(fila);
    // idfila= estoy parado en la fila, y como la fila es un tr, pido sus hijos y [0] te devuelve el primero
    //innerHtml es para que nos de lo que tiene adentro, y con parseInt lo convertimos en numero
    let idFila= parseInt(fila.children[0].innerHTML);
    console.log(idFila);
    fila.remove();
    try{
        let res = await fetch(url+idFila,{
            "method": "DELETE"
        });
        if (res.status === 200) {
            document.querySelector("#msg").innerHTML = "Eliminado!";
            setTimeout(msg,2000);
        }
    }
    catch(error){
        console.log(error);
    }          
    mostrarDatos();
}

async function modificarFila(){
    let marca = document.getElementById("marca").value;
    let sabor = document.getElementById("sabor").value;
    let tamaño = document.getElementById("tamaño").value;
    
    let fila= this.parentNode.parentNode;
    let idFila= parseInt(fila.children[0].innerHTML);    

    let productoNuevo = {
        "marca": marca,
        "sabor": sabor,
        "tamanio": tamaño
    }
    try {
        let res = await fetch(url+idFila,{
            "method": "PUT",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(productoNuevo)
        });
        if (res.status === 200) {
            document.querySelector("#msg").innerHTML = "Modificado!";
            setTimeout(msg,2000);
        }
    } catch (error) {
        console.log(error);
    }
    mostrarDatos();
}

async function mostrarDatos(){
    let lista = document.getElementById("tablaDinamica");
    
    try{
        let res = await fetch(url);
        if (res.ok) {
            let json = await res.json(); 
            lista.innerHTML = "";
            for (const productos of json) {
                let marca =  productos.marca;
                let sabor = productos.sabor;
                let tamaño = productos.tamanio;
                let id = productos.id;
                if (marca=="monster") {
                    lista.innerHTML += `<tr class="monsterTablajs">
                    <td>${id}</td>
                    <td> ${marca}</td>    
                    <td> ${sabor}</td> 
                    <td> ${tamaño} ml</td>
                    <td class="botonesTd"> <button class="fas fa-edit btn-editar">
                     <button class="fas fa-trash-alt btn-eliminar" ></button> </td>
                    </tr>`;
                }
                else if (marca=="redbull") {
                    lista.innerHTML += `<tr class="redbullTablajs">
                    <td>${id}</td>
                    <td> ${marca}</td>    
                    <td> ${sabor}</td> 
                    <td> ${tamaño} ml</td>
                    <td class="botonesTd"> <button class="fas fa-edit btn-editar">
                     <button class="fas fa-trash-alt btn-eliminar"></button> </td>
                    </tr>`;
                }
                else if (marca=="rockstar") {
                    lista.innerHTML += `<tr class="rockstarTablajs">
                    <td>${id}</td>
                    <td> ${marca}</td>    
                    <td> ${sabor}</td> 
                    <td> ${tamaño} ml</td>
                    <td class="botonesTd"> <button class="fas fa-edit btn-editar">
                     <button class="fas fa-trash-alt btn-eliminar"></button> </td>
                    </tr>`;
                }
                else if  (marca=="bang") {
                    lista.innerHTML += `<tr class="bangTablajs">
                    <td>${id}</td>
                    <td> ${marca}</td>    
                    <td> ${sabor}</td> 
                    <td> ${tamaño} ml</td>
                    <td class="botonesTd"> <button class="fas fa-edit btn-editar">
                     <button class="fas fa-trash-alt btn-eliminar"></button> </td>
                    </tr>`;
                }
                else {
                    lista.innerHTML += `<tr>
                    <td>${id}</td>
                    <td> ${marca}</td>    
                    <td> ${sabor}</td> 
                    <td> ${tamaño} ml</td>
                    <td class="botonesTd"> <button class="fas fa-edit btn-editar">
                     <button class="fas fa-trash-alt btn-eliminar"></button> </td>
                    </tr>`;

                }
            }
            let btnEliminar= document.querySelectorAll(".btn-eliminar");
            for (const boton of btnEliminar) {
                boton.addEventListener("click",borrarFila);
            }
            let btnEditar= document.querySelectorAll(".btn-editar");
            for (const botonE of btnEditar) {
                botonE.addEventListener("click",modificarFila);
            }
        }
    }
    catch(error){
        console.log(error);
    }
    
}


