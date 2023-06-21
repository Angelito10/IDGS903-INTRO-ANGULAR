import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  valorRadio = '';
  
  num1 = 0;
  num2 = 0;

  resultado:number = 0;


  op(){
    if(this.valorRadio == 'suma'){
      
      this.resultado = this.num1 + this.num2;
    }

    if(this.valorRadio == 'resta'){
      
      this.resultado = this.num1 - this.num2;
    }

    if(this.valorRadio == 'multi'){
      
      this.resultado = this.num1 * this.num2;
    }
  
  
  
  }

}
