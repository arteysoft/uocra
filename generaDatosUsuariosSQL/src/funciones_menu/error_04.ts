/*
Ejercicio: 

hacer una funcion m1 = (n) => { m2(n+1) }
despues m2 = n => { m3(n+1) }
m3, m4, m5, m6
*/




let m2 = async () => {
    // return await m3()
}

let m1 = async () => {
    return await m2()
}

m1()