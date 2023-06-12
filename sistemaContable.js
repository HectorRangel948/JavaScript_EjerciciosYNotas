class sistemaContable
{
    nombre= "";
    edad = 0 ;
    RFC = 0;
    diasTrabajadosQuincena = 0;
    sueldoDiario= 0;
    ISR = 0;

    constructor(nombre, edad, RFC, sueldoDiario, ISR, diasTrabajadosQuincena){
        this.nombre = nombre;
        this.edad = edad;
        this.RFC = RFC;
        this.sueldoDiario = sueldoDiario;
        this.ISR = ISR;
        this.diasTrabajadosQuincena = diasTrabajadosQuincena;
    }

    calcularSueldoBruto(){
        return this.sueldoDiario*this.diasTrabajadosQuincena;
    }

    calcularSueldoNeto(){
        let bruto= this.calcularSueldoBruto();
        return bruto-(bruto*this.ISR);
    }

    imprimirInformacion()
    {
        alert(
            "nombre: "+ this.nombre + "\n"+
            "edad: "+ this.edad + "\n"+
            "RFC: "+ this.RFC + "\n"+
            "Sueldo Diario: "+ this.sueldoDiario + "\n"+
            "ISR: "+ this.ISR + "\n"+
            "Días trabajados en la quincena: "+ this.diasTrabajadosQuincena + "\n" +
            "Sueldo bruto: " + this.calcularSueldoBruto() + "\n"+
            "Sueldo neto: " + this.calcularSueldoNeto() + "\n" 
        );
    }
}

const botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", ingresarDatos);

function ingresarDatos(){

    let nombre = prompt("Ingresa tu nombre");
    let edad = prompt("Ingresa tu edad");
    let RFC = prompt("Ingresa tu RFC");
    let diasTrabajadosQuincena = prompt("Ingresa la cantidad de días trabajados en la quincena");
    const sueldoDiario= 156.78;
    const ISR = 0.31;

    var calcular = new sistemaContable(nombre, edad, RFC, sueldoDiario, ISR, diasTrabajadosQuincena);
    calcular.imprimirInformacion();
}




