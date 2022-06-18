import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public API: string = 'http://localhost:5000/api/orders';
  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API);
  }
}
