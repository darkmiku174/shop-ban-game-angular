import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from '../models/collection.class';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  public API: string = 'http://localhost:5000/api/collections';
  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.API);
  }
}
