import { Component } from '@angular/core';

@Component({
  selector: 'app-ird',
  templateUrl: './ird.component.html',
  styleUrls: ['./ird.component.css']
})
export class IrdComponent {
  
 // alumnos: any [] = [];

   alumnos: any [] = [
    {
     "matricula": 1234,
     "nombre": "Mario",
     "edad": 23,
     "correo": "Mario@gmail.com",
     "pago": 56.4,
     "foto": "https://pbs.twimg.com/media/BCjgIVPCIAA4195.jpg:large"
    },
    {
      "matricula": 19002414,
      "nombre": "Diego",
      "edad": 23,
      "correo": "Diego@gmail.com",
      "pago": 56.3,
      "foto": "https://th.bing.com/th/id/R.e4c53614f8d1b7abe9311887d636aad2?rik=13TEre05%2bhD1NQ&pid=ImgRaw&r=0"
     }
     ,{
      "matricula": 19002212,
      "nombre": "Angel",
      "edad": 23,
      "correo": "Angel@gmail.com",
      "pago": 56.3,
      "foto": "https://th.bing.com/th/id/R.f5a59602f7402c43891f96537e5676d4?rik=O5i4Da7soJmi0g&pid=ImgRaw&r=0"
     }
]

}
