import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const AUTH_API = 'https://boiling-cove-73889.herokuapp.com/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  constructor(
    private http: HttpClient,
  ) { }
  login(name: string, password: string): Observable<any> {
    return this.http.post(
      `${AUTH_API}login`,
      { name, password },
      httpOptions,
    );
  }
  register(name: string, password: string, /*email: string*/): Observable<any>{
    console.log('Register done');
    return this.http.post(
      `${AUTH_API}register`,
      { name, password }
    );
  }
}
