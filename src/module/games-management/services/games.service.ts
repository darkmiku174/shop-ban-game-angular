import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Games } from 'src/app/models/games.class';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public API: string = 'http://localhost:5000/api/games';
  constructor(
    public http: HttpClient
  ) { }

  getAllGames(): Observable<Games[]> {
    return this.http.get<Games[]>(this.API);
  }
}
