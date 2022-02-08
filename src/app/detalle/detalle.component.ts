import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  listHistory: any[] = [];
  constructor(
    private _historyServices: HistoryService
    ) { }

  ngOnInit(): void {
    this.obtenerHistory();
  }

  obtenerHistory(){
    console.log("prueba");
    this._historyServices.getListHistory().subscribe(data =>{
      console.log(data);
      this.listHistory = data;
    }, error => {
      console.log(error);
    })  
  }

}
