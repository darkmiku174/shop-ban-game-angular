import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products.class';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public API: string = 'http://localhost:5000/api/games';
  public API2: string = 'http://localhost:5000/api/games/add';
  public API3: string = 'http://localhost:5000/api/games/delete/';

  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API2, product);
  }
  deleteProduct(_id: string): Observable<Product> {
    return this.http.delete<Product>(this.API3 + _id);
  }


  handelErro(err: { error: Error; }) {
    if (err.error instanceof Error) {
      console.log("Error client side" + err.error.message);
    } else {
      console.log("Error server side:" + err.error);
    }
  }
}
