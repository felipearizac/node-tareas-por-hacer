const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        let result = porHacer.getCrear(argv.descripcion);
        console.log(result);
        break;
    case 'actualizar':
        let actualiza = porHacer.getActualizar(argv.descripcion, argv.completado);
        console.log(actualiza);
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        console.log("=== Tareas pendientes por hacer ===");

        for (let tarea of listado) {
            console.log("===================================".blue);
            console.log(`Descripcion: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log("===================================".green);
        }
        break;
    case 'borrar':
        let borrado = porHacer.getDelete(argv.descripcion);

        console.log(borrado);
        break;
    case 'filtrar':
        let filtrado = porHacer.getListadoxFiltro(argv.completado);

        for (let filtra of filtrado) {
            console.log("===================================".blue);
            console.log(`Descripcion: ${filtra.descripcion}`);
            console.log(`Estado: ${filtra.completado}`);
            console.log("===================================".green);
        }
        break;
    default:
        console.log('No se encontro el comando');
        break;
}