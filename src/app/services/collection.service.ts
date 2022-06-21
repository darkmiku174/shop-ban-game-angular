import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Collection } from "../models/collections.model"
@Injectable()
export class CollectionService {
  public API: string = 'http://localhost:5000/api/collections/';
  constructor(
    public http: HttpClient
  ) { }
  getAllCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.API)
  }
  getHotCollection(): Observable<Collection> {
    return this.http.get<Collection>(this.API + '61accfa63bd1a62f4346b907')
  }
  getNewReleaseCollection(): Observable<Collection> {
    return this.http.get<Collection>(this.API + '61accfa63bd1a62f4346b908')
  }
  getMostPopularCollection(): Observable<Collection> {
    return this.http.get<Collection>(this.API + '61accfa63bd1a62f4346b909')
  }
  getRecentlyUpdateCollection(): Observable<Collection> {
    return this.http.get<Collection>(this.API + '61accfa63bd1a62f4346b911')
  }
  getTopSaleCollection(): Observable<Collection> {
    return this.http.get<Collection>(this.API + '61accfa63bd1a62f4346b912')
  }
}
