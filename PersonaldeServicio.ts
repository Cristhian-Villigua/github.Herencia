import {Empleado} from '../Proyecto2/Empleados'
export class PersonaldeServicio extends Empleado{
   seccion:String = "";

   personaldeservicio(seccion=""){
    this.seccion=seccion;
   }

   set Seccion(value:String){
      this.seccion=value;
   }
   get Seccion(){
      return this.seccion;
   }
   cambioSeccion(nuevoSeccion:String){
      this.seccion=nuevoSeccion;
    }

    SalidadatosPersonaldeSevicio(){
      return("Los datos son: "+this.nombres+"," +this.apellidos+"," +this.seccion);
    }
}

