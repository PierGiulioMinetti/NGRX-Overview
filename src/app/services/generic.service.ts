import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlEnum } from '../url.enum';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(
    private http: HttpClient
  ) { }


  getData<T>(url:string): Observable<T>{
    return this.http.get<T>(url);
  }
}
