import {Persona} from '../Proyecto2/Personas'
export class Estudiante extends Persona{
    curso:String="";

    estudiante(curso=""){
      this.curso=curso;  
    }

    set Curso(value:String){
      this.curso=value;
    }
    get Curso(){
      return this.curso;
    }

    nuevoCurso(cambioCurso:String){
      this.curso=cambioCurso;
    }
    
    SalidadatosEstudiante(){
      return("Los datos son: "+this.nombres+"," +this.apellidos+"," +this.curso);
    }
}


