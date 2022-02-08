import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent{

  public num1!: number;
	public result!: number;
	public resultheading: any;

	
  factorial() {
			this.result = 1;
      for (let i = this.num1; i > 1; i--) {
        this.result = this.result * i;
      }
      return this.result;
		}


}
