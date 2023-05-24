import {Persona} from '../Proyecto2/Personas'
export class Empleado extends Persona{
    tipo:String="";
    anioIncorporacion:number = 0 ;
    numeroDespacho:number = 0;

    empleado(tipo="", anioIncorporacion=0, numeroDespacho=0){
        this.tipo=tipo;
        this.anioIncorporacion=anioIncorporacion;
        this.numeroDespacho=numeroDespacho;
    }

    set Tipo(value:String){
        this.tipo=value;
    }
    get Tipo(){
        return this.tipo;
    }
    set Anioincorporacion(value:number){
        this.anioIncorporacion=value;
    }
    get Anioincorporacion(){
        return this.anioIncorporacion;
    }
    set Numerodespacho(value:number){
        this.numeroDespacho=value;
    }
    get Numerodespacho(){
        return this.numeroDespacho;
    }

    cambioDespacho(nuevoDespacho:number){
        this.numeroDespacho=nuevoDespacho;
    }

    SalidadatosEmpleados(){
        return this.SalidadatosPersona() + this.tipo+"," +this.anioIncorporacion+"," +this.numeroDespacho;
    }
}


