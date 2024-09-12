let variable1 = 0
let variable2 = 1000
let x = 100
let xs = []

for (let variable3 = variable2 - 500; variable1 < 5; x++) {        
    // console.log([x, x%11])
    switch (x%11) {            
        case 1:
            console.log('')
            break;
        case 2:                
            console.log('Dia !!')
            break;
        case 4:
            console.log('Programadores')
            break;
        case 5:
            console.log('Feliz')
            break;
        case 6:                
            xs.push('\uFE0F')
            break;
        case 8:                
            xs.push('\u2764')                
            break
        case 11:
            xs.push('3154')
            break;
        default:                
            break
    }
    if (x > 110) {
        variable1 = variable1 + 2
    }
    else {
        variable1++
    }
    x = x - 3 
}

console.log(xs.join(''))
console.log()
