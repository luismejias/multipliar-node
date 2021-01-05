const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {
  console.log('========================'.green);
  console.log(`Tabla de ${ base }`.green);
  console.log('========================'.green);

  for (let i = 0; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`${base} No es un número`);
      return
    }
    let data = ''

    for (let i = 1; i <= limite; i++) {
      data += (`${base} * ${i} = ${base * i}\n`);
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err)
        reject(err)
      else
        resolve(`tablas/tabla-${base}.txt`)
    });
  })
}

module.exports = {
  crearArchivo,
  listar
}

