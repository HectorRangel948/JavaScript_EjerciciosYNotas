let altura = prompt("Introduce la Altura en centimetros");
let peso = prompt("Introduce el Peso en libras");
let clasificacionIMC = "clasificaiondelIMC";
const libras= 0.453592;
const metro= 100;
function conversionLibras(peso) {
    let conversion = peso * libras;
    return conversion;
}
function conversionAltura(altura) {
    let conversion = altura / metro;
    return conversion;
}
indiceDeMasaCorporal= conversionLibras(peso) / ((conversionAltura(altura)**2));
//console.log(indiceDeMasaCorporal);

if (indiceDeMasaCorporal >=16 && indiceDeMasaCorporal <=16.9) {
    clasificacionIMC = "criterio de ingreso";
}
else if (indiceDeMasaCorporal >=17 && indiceDeMasaCorporal <=18.4) {
    clasificacionIMC = "infrapeso";
}
else if (indiceDeMasaCorporal >=18.5 && indiceDeMasaCorporal <=24.9) {
    clasificacionIMC = "Peso normal";
}
else if (indiceDeMasaCorporal >=25 && indiceDeMasaCorporal <=29.9) {
    clasificacionIMC = "Sobrepeso";
}
else if (indiceDeMasaCorporal >=30 && indiceDeMasaCorporal <=34.9) {
    clasificacionIMC = "Obesidad Premórbida";
}
else if (indiceDeMasaCorporal >=40 && indiceDeMasaCorporal <=45) {
    clasificacionIMC = "Obesidad mórbida";
}
else{
    clasificacionIMC = "Obesidad hipermórbida";
} 
console.log("Tu peso en kilogramos aproximados es " , conversionLibras(peso));
console.log("Tu altura en metros es " , conversionAltura(altura),"m");
console.log("Tu clasificacion de acuero a tu IMC es ", clasificacionIMC);