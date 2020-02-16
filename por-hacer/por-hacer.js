const fs = require('fs');

let listadoPorHacer = [];

const getGuardar = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se guardo el archivo', err);
        } else {
            console.log('archivo creado');
        }
    });
}

const getCargar = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (err) {
        listadoPorHacer = [];
    }

    return listadoPorHacer;
}

const getCrear = (descripcion) => {
    getCargar();

    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);

    getGuardar();

    return porHacer;
}

const getListadoxFiltro = (completado) => {
    getCargar();

    let listado2 = listadoPorHacer.filter(p => {
        return p.completado === JSON.parse(completado)
    });

    if (listado2.length === 0) {
        console.log('No se encontraron registros');
    }

    return listado2;

}

const getListado = () => {
    getCargar();

    return listadoPorHacer;
}

const getActualizar = (descripcion, completado = true) => {

    cargar();
    console.log(descripcion);
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[0].completado = completado;

        guardar();
        return 'Actualizado';
    } else {
        return 'No se pudo actualizar el listado';
    }
}

const getDelete = (descripcion) => {
    getCargar();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    console.log(index);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        getGuardar();

        return 'Borrado';
    } else {
        return 'Error al borrar el archivo';
    }

}

module.exports = {
    getCrear,
    getListado,
    getActualizar,
    getDelete,
    getListadoxFiltro
}