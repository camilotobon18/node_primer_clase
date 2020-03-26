//Module
module.exports = {
    //modulo que va a exportar funciones
    //array de funciones aritmeticas
    //las funciones sin nombre, se denominan anonimas
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b){
        return a - b;
    },
    multiplicar: function(a, b){
        return a * b;
    },
    dividir: function(a, b){
        return a / b;
    }
}

module.exports = {
    //se especifica que funciones se van a utilizar
    sumar,
    restar,
    multiplicar,
    dividir
}
