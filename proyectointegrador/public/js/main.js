// import { forEver } from '../Src/Cortes-liston/main.ts';

google.charts.load('current', { 'packages': ['corechart'] });

/*
google.charts.setOnLoadCallback(() => {
    document.getElementById('generarGrafico').addEventListener('click', drawChart);
    console.log('Event listener added');
});
*/

function drawChart(mejorSolucion) {    
    console.log('drawChart function called');
    // const cortesInput = document.getElementById('cortesInput').value;
    // console.log('Cortes input:', cortesInput);
    //const cortes = cortesInput.split(' ').map(Number);
    //console.log('Cortes array:', cortes);

    // Simular la respuesta de la API    
    // const mejorSolucion = cortes.map((corte, index) => ({ cortes: corte }));

    const dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Listón');
    dataTable.addColumn('number', 'Cortes');
    dataTable.addColumn({ type: 'string', role: 'annotation' });

    let {tuSolucion} = mejorSolucion

    console.log(JSON.stringify(tuSolucion))

    console.log(tuSolucion)
    console.log(typeof mejorSolucion)
    tuSolucion.forEach((item, index) => {
        dataTable.addRow([`Listón ${index + 1}`, ...item.cortes, '']);
    });

    const options = {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '30%' },
        isStacked: true,
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('graficoCortes'));
    chart.draw(dataTable, options);
    console.log('Chart drawn');
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
    fetch('http://localhost/api/calculos/cortes', options)
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
            return data.json();
        })
        .then(z => {
            console.log(z);   
            drawChart(z)
        })
        .catch(e => {
            console.log(e);
        });
})