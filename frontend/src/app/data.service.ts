import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getInterventions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/interventions`);
  }
  getFavorites(): Observable<any> {
    return this.http.get(`${this.apiUrl}/surgeon-favorites`);
  }
  
}
