import {Empleado} from '../Proyecto2/Empleados'
export class Profesor extends Empleado{
    departamento:number=0;

    profesor(departamento=0){
        this.departamento=departamento;
    }

    set Departamento(value:number){
        this.departamento=value;
    }
    get Departamento(){
        return this.departamento;
    }

    cambioDepartamento(nuevoDepartamento:number){
        this.departamento=nuevoDepartamento;
    }

    SalidadatosProfesor(){
        return("Los datos son: "+this.nombres+"," +this.apellidos+"," +this.departamento);
    }
}

