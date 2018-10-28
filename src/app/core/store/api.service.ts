import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, filter, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getLaunches$ = (): Observable<any[]> => {
    return this.http.get('../../assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches,
        ));
  }

  public getEstados$ = (): Observable<any[]> => {
    return this.http.get('../../assets/launchstatus.json')
      .pipe(
        map((res: any) => res.types,
        ));
  }
}
