
/*
document.getElementById('enviarCortes').addEventListener('click', () => {

    const objCortes = {
        cortes: [10, 20, 110, 50, 80, 120, 130, 160, 5, 5, 5, 5]
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objCortes),
    };

    fetch('http://localhost/api/datos/recibircortes', options)
    .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      })
      .then(update => {
        console.log(update);      
      })
      .catch(e => {
        console.log(e);
      });
})

*/

/*
document.getElementById('enviarCortes').addEventListener('click', () => {
    
    const objCortes = {
        x: 2,
        y: 4
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objCortes),
    };
    fetch('http://localhost/api/calculos/sumar', options)
    .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      })
      .then(update => {
        console.log(update);      
      })
      .catch(e => {
        console.log(e);
      });
})
*/
/*
document.getElementById('calcularIPC').addEventListener('click', () => {
    
  let valoresIPC = Array.prototype.slice.call( 
    document.getElementsByClassName('txtIndice') ).map(z => z.value)

    valoresIPC = valoresIPC.map(z => parseFloat(z))

    console.log(valoresIPC.some(z => isNaN(z)))

    if (valoresIPC.some(z => isNaN(z))) {
      alert('Guarda que hay uno que no es numero')
      return
    }

  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({xs : valoresIPC}),
  };
  fetch('http://localhost/api/calculos/ipc', options)
  .then(data => {
    if (!data.ok) {
      throw Error(data.status);
     }
     return data.json();
    })
    .then(update => {
      console.log(update);      
    })
    .catch(e => {
      console.log(e);
    });
})

*/

