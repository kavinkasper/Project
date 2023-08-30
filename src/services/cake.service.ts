import { Injectable } from '@angular/core';
import { CAKE } from 'src/models/cake';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  url = "http://localhost:3000/cake";

  constructor(private http: HttpClient) { }

  getcake(): Observable<CAKE[]> {
    return this.http.get<CAKE[]>(this.url);
  }

  getcakebyid(id: number): Observable<CAKE> {
    return this.http.get<CAKE>(`${this.url}/${id}`);
  }


}
