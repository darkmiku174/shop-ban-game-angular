import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vocher } from '../models/vocher.class';

@Injectable({
  providedIn: 'root'
})
export class VocherService {

  public API: string = 'http://localhost:5000/api/vochers';
  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<Vocher[]> {
    return this.http.get<Vocher[]>(this.API);
  }
}
