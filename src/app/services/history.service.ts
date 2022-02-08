import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private myAppUrl = 'https://localhost:44328/';
  private myApiUrl = 'api/History/';
  
  constructor(private http: HttpClient) { }

  getListHistory(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
