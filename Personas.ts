export class Persona{
    nombres:String="";
    apellidos:String="";
    numeroIdentificacion:number=0;
    estadocivil:String="";

    constructor(nombres="", apellidos="", numeroIndentificacion=0, estadocivil=""){
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.numeroIdentificacion=numeroIndentificacion;
        this.estadocivil=estadocivil;
    }

    set Nombres(value:String){
        this.nombres=value;
    }
    get Nombres(){
        return this.nombres;
    }
    set Apellidos(value:String){
        this.apellidos=value;
    }
    get Apellidos(){
        return this.apellidos;
    }
    set Numeroidentificacion(value:number){
        this.numeroIdentificacion=value;
    }
    get Numeroidentificacion(){
        return this.numeroIdentificacion;
    }
    set Estadocivil(value:String){
        this.estadocivil=value;
    }
    get Estadocivil(){
        return this.estadocivil;
    }

    cambioEstadoCivil(nuevoEstado:String){
        this.estadocivil=nuevoEstado;
    }

    SalidadatosPersona(){
        return "Los datos son: "+this.nombres+"," +this.apellidos+"," +this.estadocivil;
    }
}