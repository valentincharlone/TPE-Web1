"use strict"

document.getElementById("buscar").addEventListener("click",Filtrar);

async function Filtrar(){
    let value= document.getElementById("busqueda").value;
    
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
                let id  = productos.id;
               
                if ((marca== value) || (sabor == value) || (tamaño == value) || (id == value)) {
                   if (marca=="monster") {
                    lista.innerHTML += `<tr class="monsterTablajs">
                                            <td>${id}</td>
                                            <td> ${marca}</td>
                                            <td> ${sabor}</td> 
                                            <td> ${tamaño} ml</td>
                                            <td class="botonesTd"> <button class="fas fa-edit btn-editar">
                                            <button class="fas fa-trash-alt btn-eliminar"></button> </td>
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

document.getElementById("volver").addEventListener("click",mostrarDatos);  

