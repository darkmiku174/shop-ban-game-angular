import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.class';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public API: string = 'http://localhost:5000/api/carts';
  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.API);
  }
}
