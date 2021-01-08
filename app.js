
const { argv }  = require('./config/yargs'); 
const colors    = require('colors');

const { crear , getListado, actualizar,borrar } = require('./por-hacer/por-hacer');
const { boolean } = require('yargs');

let comando = argv._[0];

switch (comando){
    case 'crear':

       let tarea = crear(argv.descripcion);
    
    break;
    case 'listar':
        
        let listado = getListado();
        
        for (const tarea of listado) {
            console.log("======= Por Hacer =====".green);
            console.log(tarea.description);
            console.log(`Estado: ${tarea.completado}` );
            console.log("=======================".green);
        }

    break;
    case 'actualizar':

        let actualizado = actualizar(argv.description, argv.estado);
        console.log(actualizado);

    break;
    case 'borrar':

        let borrado = borrar(argv.description);
        console.log(borrado);
        
    break;
    default:
        console.log(`Comando "${comando}" no reconocido`);
    break;    
}