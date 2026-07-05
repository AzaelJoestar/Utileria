function validarCorreo(correo){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
}

function soloLetras(texto){
    return /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto)
}

function validarLongitud(numero, longitud){
    return numero.toString().length === longitud
}

function calcularEdad(fechaNacimiento){
    let hoy = new Date()
    let nacimiento = new Date(fechaNacimiento)
    let edad = hoy.getFullYear() - nacimiento.getFullYear()
    let m = hoy.getMonth() - nacimiento.getMonth()
    if(m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())){
        edad--
    }
    return edad
}

function esMayorDeEdad(fechaNacimiento){
    return calcularEdad(fechaNacimiento) >= 18
}

function validarPassword(password){
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)
}

function generarId(){
    return "ID-" + Math.floor(Math.random()*1000000)
}

function promedioCalificaciones(cadena){
    let nums = cadena.split(',').map(n=>parseFloat(n))
    let suma = nums.reduce((a,b)=>a+b,0)
    return (suma / nums.length).toFixed(2)
}