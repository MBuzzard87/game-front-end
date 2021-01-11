import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/gameinventory';  
  
  constructor(private http:HttpClient) { }

  getGameList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/gamelist`);
  }

  getGame(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/game/${id}`);
  }

  createGame(videogame: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}/add`, videogame);  
  }  




}
