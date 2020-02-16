const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea pendiente por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Completado de dicha tarea'
}

let argv = require('yargs')
    .command('crear', 'se crean las tareas pendientes por hacer', {
        descripcion
    })
    .command('actualizar', 'Se actualizan las tares pendientes', {
        descripcion,
        completado
    })
    .command('listar', 'Se listan')
    .command('borrar', 'Se borran los registros de las tareas pendientes', {
        descripcion
    })
    .command('filtrar', 'se filtra por estado en esta ocasion', {
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}