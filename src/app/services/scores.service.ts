import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
const AUTH_API = 'https://boiling-cove-73889.herokuapp.com/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ScoresService {
  id = this.token.getUser().id;
  constructor(
    private http: HttpClient,
    public token: TokenStorageService
  ) { }
  getScores(){
    if(this.id){
      return this.http.get(
        `${AUTH_API}score/${this.id}`,
        httpOptions
      );
    }
    return null;
  }
}
