import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API: string = 'http://localhost:5000/api/users';
  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }
}
