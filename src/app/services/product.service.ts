import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from "../models/products.model";
@Injectable()
export class ProductService {
  public API: string = 'http://localhost:5000/api/games/';
  constructor(
    public http: HttpClient
  ) { }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API)
  }
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.API + id)
  }
}
