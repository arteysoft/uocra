import {exec} from 'child_process'

let stdCall = ['java -jar ', 
    '-Dtipo=', 'call', ' ',
    '-Dvencimiento=', 'ago', ' ',
    '-Dstrike=', '10000', ' ',
    '-Dprecio=', '15.00', ' ',
    '-Dccl=', '515', ' ',
    'calculadora.jar'
].join('')

export let ejecutarProcesoExterno = () => {
    exec(stdCall, (err, stdout, stderr) => {
        console.log(stdout)
        console.log(stderr)
    })
}

export let ejemploStdIn = () => {
    process.stdin.setEncoding('utf8');

    console.log('Please enter some input:');

    process.stdin.on('data', (data) => {
        // Process the input
        console.log('You entered:', data);
        
        // End the input stream if desired
        // process.stdin.end();
        
    });

    process.stdin.on('end', () => {
        console.log('Input stream ended');
    });
}
