import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {

  public num1!: number;
	public num2!: number;
	public result!: number;
	public resultheading: any;

	sum() {
		this.result = this.num1 + this.num2;
		this.resultheading = this.num1 + ' + ' + this.num2;
	}

	diff() {
		this.result = this.num1 - this.num2;
		this.resultheading = this.num1 + ' - ' + this.num2;
	}
	mult() {
		this.result = this.num1 * this.num2;
		this.resultheading = this.num1 + ' x ' + this.num2;
	}
	div() {
			this.result = this.num1 / this.num2;
			this.resultheading = this.num1 + ' / ' + this.num2;
		}
  factorial() {
			this.result = 1;
      for (let i = this.num1; i > 1; i--) {
        this.result = this.result * i;
      }
      return this.result;
		}

}
