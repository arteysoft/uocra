google.charts.load('current', { 'packages': ['corechart'] });

/*
google.charts.setOnLoadCallback(() => {
    document.getElementById('generarGrafico').addEventListener('click', drawChart);
    console.log('Event listener added');
});
*/

let adaptandoFormatoApi = (estrucutraOriginal) => {
    let listoConMasCortes = estrucutraOriginal.reduce((acum,item) => {
        if (acum > item.cortes.length){
            return acum
        } else {
            return item.cortes.length
        }},0)
    
    estrucutraOriginal.forEach(item => {
        let diferencia = listoConMasCortes - item.cortes.length
        item.cortes = item.cortes.concat(new Array(diferencia).fill(0))
    });

    return estrucutraOriginal
}

function drawChartCompatible() {
    var data = google.visualization.arrayToDataTable([
        ['TIENE QUE IR', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', 'hola', 'chau', { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, 100, 200,''],
        ['2020', 16, 22, 23, 30, 16, 9, 0, 200,''],
        ['2030', 28, 19, 29, 30, 12, 13, 100, 200,'']
      ]);

      var options = {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
      };

    var chart = new google.visualization.ColumnChart(document.getElementById('graficoCortes'));

    chart.draw(data, options);
}


function drawChart(mejorSolucion) {    

    let {tuSolucion} = mejorSolucion

    adaptandoFormatoApi(tuSolucion)

    let etiquetaDesp = tuSolucion.reduce((a, i) => a + i.desperdicio, 0)

    // let xss = []
    let arrAux = new Array(tuSolucion[0].cortes.length).fill(0).map((z, i) => (i+1).toString())

    let titulos = ['no se para q es', ...arrAux, `Desperticio total: ${etiquetaDesp}`, { role: 'annotation' }]
    let tituloOriginal = ['TIENE QUE IR', '1', '2', '3', '4', '5', '6', { role: 'annotation' }]

    let xssAltenativo = [
        titulos
    ]

    let xss = [
        tituloOriginal
    ]
    
    tuSolucion.forEach((item, index) => { 
               
        // arr = [`Listón 1`, 1, 2, 3, 4, 5, 6, 7, 8, '']
        let arrOrg = [`Listón ${index + 1}`, 1, 2, 3, 4, 5, 6, 'z']
        let arrAlternativo = [`Listón ${index + 1}`, ...item.cortes, item.desperdicio, '']

        // arr = [`Listón ${index + 1}`, ...item.cortes, '']
        
        xss.push(arrOrg)
        xssAltenativo.push(arrAlternativo)
    });

    let dataTable = google.visualization.arrayToDataTable(xssAltenativo);

    // Simular la respuesta de la API    
    // const mejorSolucion = cortes.map((corte, index) => ({ cortes: corte }));

    const options = {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '30%' },
        isStacked: true,
    };

    console.log(xss)
    console.log(xssAltenativo)

    const chart = new google.visualization.ColumnChart(document.getElementById('graficoCortes'));
    chart.draw(dataTable, options);    
}


document.getElementById('generarGrafico').addEventListener('click', () => {
    let cortes = "10 20 50 120 111 160 15 20 35 45 85 85 85 15 14 13 200 290 180 154 69 25 288"

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({cortes : cortes}),
    };
    fetch('/api/calculos/cortes', options)
    .then(data => {
        if (!data.ok) {
            alert('not ok')
            throw Error(data.status);
        }
            return data.json();
        })
        .then(z => {
            console.log(z);   
            drawChart(z)
            // drawChartCompatible()
        })
        .catch(e => {
            alert(e)
        });
})