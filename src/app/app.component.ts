import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IGS903-ANGULAR';
  grupo = 'IDGS903'

  alumno = {

    matricula:'19002212',
    nombre: 'Juan',
    pago: 19.2,
    fecha: new Date()

  }

  duplicarN (valor:number): number {
    return valor*2;
  }
}
