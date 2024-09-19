import { DecimalPipe } from "@angular/common";

export class Estudiante {
    nombre:string;
    edad:number;
    carrera:string;
    universidad:string;
    promedio:DecimalPipe;
}
