

const fs = require('fs');

let listadoPorHacer = [];



const getListado = () =>{

    cargarDB();
    return listadoPorHacer;
    
}


const guardarBD = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data , (err) => {
        if(err){
            throw new Error('no se pudo guardar ' + err);
        }

    });

}


const cargarDB = () => {

    try {
        
        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {
        
        listadoPorHacer = [];

    }

}



const crear = (description) => {

    cargarDB();

    let porHacer = {
        description,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarBD();

    return porHacer;
}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion )

    if( index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) =>{
    
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion )
    if( index >= 0){
        let eliminado = listadoPorHacer.splice(index,1);
        guardarBD();
        return eliminado;
    }else{
        return 'No se encontro la tarea'
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}