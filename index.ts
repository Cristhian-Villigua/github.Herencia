import {Persona} from '../Proyecto2/Personas'
import {Estudiante} from '../Proyecto2/Estudiantes'
import {Empleado} from '../Proyecto2/Empleados'
import {Profesor} from '../Proyecto2/Profesores'
import {PersonaldeServicio} from '../Proyecto2/PersonaldeServicio'

const nuevaPersona=new Persona();
nuevaPersona.nombres="Andres";
nuevaPersona.apellidos="Zamora";
nuevaPersona.estadocivil="Soltero";

const nuevoEstudiante=new Estudiante();
nuevoEstudiante.nombres="Cristhian";
nuevoEstudiante.apellidos="Villigua";
nuevoEstudiante.curso="Primer Semestre";
nuevoEstudiante.SalidadatosEstudiante();

const nuevoEmpleado=new Empleado();
nuevoEmpleado.nombres="Fabian";
nuevoEmpleado.apellidos="Cedeño";
nuevoEmpleado.tipo="Masculino";
nuevoEmpleado.anioIncorporacion=2020;
nuevoEmpleado.numeroDespacho=2075;
nuevoEmpleado.SalidadatosPersona();

const nuevoProfesor=new Profesor();
nuevoProfesor.nombres="Michael";
nuevoProfesor.apellidos="Zambrano";
nuevoProfesor.departamento=15;
nuevoProfesor.SalidadatosProfesor();

const nuevoPersonaldeServicio=new PersonaldeServicio();
nuevoPersonaldeServicio.nombres="Mateo";
nuevoPersonaldeServicio.apellidos="Mendoza";
nuevoPersonaldeServicio.seccion="Limpieza";
nuevoPersonaldeServicio.SalidadatosPersonaldeSevicio();

console.log(nuevaPersona.SalidadatosPersona());
console.log(nuevoEstudiante.SalidadatosEstudiante());
console.log(nuevoEmpleado.SalidadatosEmpleados());
console.log(nuevoProfesor.SalidadatosProfesor());
console.log(nuevoPersonaldeServicio.SalidadatosPersonaldeSevicio());
