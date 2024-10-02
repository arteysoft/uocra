import fs from 'fs/promises'
const https = require('follow-redirects').http;
const qs = require('querystring');
import genAlumno from '../lib/genusuario'


let crea1Alumno = async (onFinish) => {

  let strAlumnoJson = JSON.stringify(genAlumno())
  console.log(strAlumnoJson)

  let options = {
    'method': 'POST',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/api/alumno',
    'headers': {
      'Content-Type': 'application/json'
    },
    'maxRedirects': 20
  };

let req = https.request(options, function (res) {
    let chunks:any = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks)
      onFinish(null, body)
    });
  
    res.on("error", function (error) {
      console.error(error);
    });
  });

  req.write(strAlumnoJson)
  req.end();
}

let crearUnAlumnoPromise = () => {
    return new Promise((resolve, reject) => {
      crea1Alumno(err => {
        if (err) {
          reject(err)
          return
        }
        resolve(null)
      })
    })
}

export default async () => {
  for (let x = 1; x < 100; x++) {
    await crearUnAlumnoPromise()
  }
}

