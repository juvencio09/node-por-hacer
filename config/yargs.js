const argv = require('yargs')
                .command('borrar', 'Borrara un elemento por hacer', {
                    descripcion: {
                        alias: 'd',
                        demand: true,
                        desc: 'Descripcion de la tarea por borrar'
                    }
                })
                .command('crear', 'Crear un elemento por hacer', {
                    descripcion: {
                        alias: 'd',
                        demand: true,
                        desc: 'Descripcion de la tarea por hacer'
                    }
                })
                .command('actualizar', 'Actualizar el estado de una tarea', {
                    descripcion: {
                        alias: 'd',
                        demand: true,
                        desc: 'Descripcion de la tarea por hacer'
                    },
                    estado: {
                        alias: 'e',
                        default: 'true',
                        desc: 'Estado de la tarea'
                    }  
                })
                .help()
                .argv;  

module.exports = {
    argv
}