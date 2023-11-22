import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio 9: Interpolación';
  nombre = "Arnold Torres Maldonado"
  edad = 21
  semestre = "Séptimo semestre"
  calificaciones = [10, 2, 10, 9,10,2,5]

  calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < this.calificaciones.length; i++) {
      suma += this.calificaciones[i];
    }
    return suma / this.calificaciones.length
  }

  estadoAlumno() {
    if (this.calcularPromedio() < 6) {
      return "Reprobaste"
    } else {
      return "Aprobaste"
    }
}
}
