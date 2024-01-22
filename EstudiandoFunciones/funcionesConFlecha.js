
//funcionescon flechas arrow Functions

const sumarDos = (num) => {
    console.log(num)
}

sumarDos(20);

//reduccion de codigo, pero si es mas de un parametro se colocan los parentesis ejemplo : const sumarDos = (num, num1, nume2)
const reducionCodigo = num => {
    console.log(num)
}

reducionCodigo(20);

//retornar valores  con funcion de flecha
const retornarValores = (num1, nume2) => {
    return (num1 + num2)
}
const resultado = retornarValores(30, 30)
console.log(resultado)


//retornar valores  con funcion de flecha ahorrar codigo 
const retornarValoresAhorrando = (num1, nume2) => (num1 + num2)
const resultado_1 = retornarValoresAhorrando(30, 30)
console.log(resultado_1)

const mensaje = () => { return 'hola soy lin' }
const resultado_3 = mensaje()
console.log(resultado_3)


// mostarr un nombre retornando valores paramtero conectados

const mensaje2 = nombre  => { return 'hola soy lin' + nombre}
const resultado_4 = mensaje2('maria')
console.log(resultado_4)

// mostarr un nombre retornando valores paramtero conectados codigo corto puedes ('hola soy lin' + nombre) con parentesis

const mensaje3 = nombre  => 'hola soy lin' + nombre
const resultado_5 = mensaje2('maria')
console.log(resultado_5)
