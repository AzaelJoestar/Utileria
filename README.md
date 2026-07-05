# Programacion web
## Alumno: Hernandez Uvera Azael.
## profesora: Martinez Nieto Adelina.
## Grupo: 7SD.
---
# Utilería 🛠️

Librería JavaScript funcional con validaciones y cálculos comunes que suelen necesitarse en formularios web: correos, contraseñas seguras, nombres, edades y teléfonos.

**Problema que resuelve:** Proporciona un conjunto de funciones reutilizables para validar datos comunes en formularios web, como correos electrónicos, contraseñas, textos y edades, sin necesidad de frameworks externos.
---

## 🚀 Instalación

```html
<script src="utileria.js"></script>
```

---

## 📦 Uso

### `validarCorreo(correo)` → `boolean`
Valida que el texto tenga formato de correo electrónico.

```js
function validarCorreo(correo){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
}
```

```js
validarCorreo("ejemplo@dominio.com") // true
validarCorreo("ejemplo@dominio")     // false
```

### `soloLetras(texto)` → `boolean`
Verifica que el texto contenga solo letras (mayúsculas, minúsculas y vocales acentuadas/ñ), útil para validar nombres.

```js
function soloLetras(texto){
    return /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto)
}
```

```js
soloLetras("José Peña") // true
soloLetras("José123")   // false
```

### `validarLongitud(numero, longitud)` → `boolean`
Comprueba que un número (o cadena numérica) tenga exactamente una cantidad determinada de dígitos. Se usa, por ejemplo, para validar que un teléfono tenga 10 dígitos.

```js
function validarLongitud(numero, longitud){
    return numero.toString().length === longitud
}
```

```js
validarLongitud("5512345678", 10) // true
validarLongitud("123", 10)        // false
```

### `calcularEdad(fechaNacimiento)` → `number`
Calcula la edad exacta (en años cumplidos) a partir de una fecha de nacimiento.

```js
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
```

```js
calcularEdad("2000-05-10") // ej. 26
```

### `esMayorDeEdad(fechaNacimiento)` → `boolean`
Indica si, a partir de la fecha de nacimiento, la persona ya es mayor de edad (18+).

```js
function esMayorDeEdad(fechaNacimiento){
    return calcularEdad(fechaNacimiento) >= 18
}
```

```js
esMayorDeEdad("2000-05-10") // true
esMayorDeEdad("2015-01-01") // false
```

### `validarPassword(password)` → `boolean`
Valida que la contraseña tenga al menos una mayúscula, una minúscula, un número, un carácter especial y un mínimo de 8 caracteres.

```js
function validarPassword(password){
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)
}
```

```js
validarPassword("Abcdef1!") // true
validarPassword("abcdefgh") // false
```

### `generarId()` → `string`
Genera un identificador único simple, con el prefijo `ID-` seguido de un número aleatorio. Pensado para asignar un ID temporal a un registro nuevo sin necesitar backend.

```js
function generarId(){
    return "ID-" + Math.floor(Math.random()*1000000)
}
```

```js
generarId() // "ID-482913"
```

### `promedioCalificaciones(cadena)` → `string`
Recibe una cadena de números separados por comas (por ejemplo, calificaciones de un alumno) y devuelve el promedio con 2 decimales.

```js
function promedioCalificaciones(cadena){
    let nums = cadena.split(',').map(n=>parseFloat(n))
    let suma = nums.reduce((a,b)=>a+b,0)
    return (suma / nums.length).toFixed(2)
}
```

```js
promedioCalificaciones("8,9,10,7") // "8.50"
```

---

## 🖼️ Capturas de pantalla

---

## 🎥 Video
