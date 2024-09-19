import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{
  info: Estudiante[]=[
    {
        "nombre": "Juan P\u00e9rez",
        "edad": 20,
        "carrera": "Ingenier\u00eda de Software",
        "universidad": "CORHUILA",
        "promedio": 4.3
    },
    {
        "nombre": "Laura Gomez",
        "edad": 22,
        "carrera": "Ingeniería Industrial",
        "universidad": "CORHUILA",
        "promedio": 4.1
    },
    {
        "nombre": "Carlos D\u00edaz",
        "edad": 21,
        "carrera": "Econom\u00eda",
        "universidad": "CORHUILA",
        "promedio": 4.5
    }
]

  ngOnInit(): void {
  }

}
