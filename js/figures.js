//Código del cuadrado
console.group('Squares')

function squarePerimeter (side) {
    return side * 4
}

function squareArea (side) {
    return side * side
}
console.groupEnd()

//Código del triángulo
console.group('Triángulos')

function trianglePerimeter (side1, base) {
    const perimeter = parseFloat(side1 * 2) + parseFloat(base)
    return perimeter
}

function triangleHeight(side1, base) {
    return Math.sqrt(side1 ** 2 - (base / 2) ** 2)
}

function triangleArea (side1, base) {
    const height = triangleHeight(side1, base)
    return (base * height) / 2
}

console.groupEnd()

console.group('Círculos')

//Radio
const circleRadio = 4

//Diámetro
function circleDiameter (radio) {
    return radio * 2
}

//PI
const PI = Math.PI

//Cicunferencia
function circlePerimeter (radio) {
    const diameter = circleDiameter(radio)
    return  diameter * PI 
}

//Área
function circleArea (radio) {
    return (radio * radio) * PI
}

console.groupEnd()

//Interacción con HTML

//SQUARE
function calcSquarePerimeter() {
    const measure = document.getElementById('measure')
    const squareInput = document.getElementById('SquareInput')
    const squareOutput = document.getElementById('SquareOutput')
    const value = squareInput.value

    const perimeter = squarePerimeter(value)
    squareOutput.innerHTML = (`El perímetro del cuadrado es: ${perimeter}${measure.value}<sup></sup>`)
}

function calcSquareArea() {
    const measure = document.getElementById('measure')
    const squareInput = document.getElementById('SquareInput')
    const squareOutput = document.getElementById('SquareOutput')
    const value = squareInput.value

    const area = squareArea(value)
    squareOutput.innerHTML = (`El área del cuadrado es: ${area}${measure.value}<sup>2</sup>`)
}

//TRIANGLE
function calcTrianglePerimeter() {
    const measure2 = document.getElementById('measure2')
    const triangleInput1 = document.getElementById('TriangleInput1')
    const triangleInput2 = document.getElementById('TriangleInput2')
    const triangleOutput = document.getElementById('triangleOutput')
    const value1 = triangleInput1.value
    const value2 = triangleInput2.value

    const perimeter = trianglePerimeter(value1, value2)
    if(value1 === value2) {
        triangleOutput.innerHTML = 'No es un triángulo isósceles'
    } else {
        triangleOutput.innerHTML = (`El perímetro del triángulo es: ${perimeter}${measure2.value}<sup></sup>`)
    }
}
function calcTriangleArea() {
    const measure2 = document.getElementById('measure2')
    const triangleInput1 = document.getElementById('TriangleInput1')
    const triangleInput2 = document.getElementById('TriangleInput2')
    const triangleOutput = document.getElementById('triangleOutput')
    const value1 = triangleInput1.value
    const value2 = triangleInput2.value

    const area = triangleArea(value1, value2).toFixed(2)
    if(value1 === value2) {
        triangleOutput.innerHTML = 'No es un triángulo isósceles'
    } else {
        triangleOutput.innerHTML = (`El área del triángulo es: ${area}  ${measure2.value}<sup>2</sup>`)
    }
}

//CIRCLE
function calcCirclePerimeter () {
    const measure3 = document.getElementById('measure3')
    const circleInput = document.getElementById('circleInput')
    const circleOutput = document.getElementById('circleOutput')    
    const value = circleInput.value

    const perimeter = circlePerimeter(value).toFixed(4)
    circleOutput.innerHTML = (`El perímetro del círculo es: ${perimeter}${measure3.value}<sup></sup>`)
}
function calcCircleArea () {
    const measure3 = document.getElementById('measure3')
    const circleInput = document.getElementById('circleInput')
    const circleOutput = document.getElementById('circleOutput')    
    const value = circleInput.value

    const area = circleArea(value).toFixed(4)
    circleOutput.innerHTML = (`El área del círculo es: ${area}${measure3.value}<sup>2</sup>`)
}
function calcCircleDiameter () {
    const measure3 = document.getElementById('measure3')
    const circleInput = document.getElementById('circleInput')
    const circleOutput = document.getElementById('circleOutput')        
    const value = circleInput.value

    const diameter = circleDiameter(value)
    circleOutput.innerHTML = (`El diámetro del círculo es: ${diameter}${measure3.value}<sup></sup>`)
}