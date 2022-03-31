import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
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
  useLogin(login: any): Observable<boolean>{
    if(login && login.name && login.password){
      const sample = 'k';
      return of(sample).pipe(
        map((token)=>{
          if(!token){
            return false;
          }
          //this.storage.set('access_token', token);
          const decodedUser = this.jwtHelper.decodeToken(token);
          this.userInfo.next(decodedUser);
          console.log(decodedUser);
          return true;
        })
      );
    }
    return of(false);
  }
}
