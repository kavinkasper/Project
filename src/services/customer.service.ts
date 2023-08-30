import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CUSTOMER } from 'src/models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "http://localhost:3000/customerdetails";

  constructor(private HTTP: HttpClient) { }

  add_details(details: CUSTOMER): Observable<CUSTOMER> {
    return this.HTTP.post<CUSTOMER>(`${this.url}`, details)
  }

  get_details(): Observable<CUSTOMER[]> {
    return this.HTTP.get<CUSTOMER[]>(this.url);
  }
}
