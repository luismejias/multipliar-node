// requireds
// const express = require('express');
// const fs = require('./fs');


const { crearArchivo, listar } = require('./multiplicar/multiplicar')
const  argv  = require ('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite )
            .then(archivo => console.log(`Archivo creado: ${archivo.blue}`))
            .catch((err) => console.log(err)
            )
        break;
    default:
        console.log('Comando desconocido!!!');

        break;
}
// let base = 5;
// console.log(process.argv);
let argv2 = process.argv;
// let parametro = argv[2]
// let base = parametro.split('=')[1];
// // console.log(base);

console.log('Limite', argv.limite);


