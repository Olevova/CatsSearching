import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root',

})
export class GetcatsService {
  apiKey: string = 'live_dGRUrY1XPdwGTJS5lbgR8KnMloZ0MDk7MgeV2B7Fml7LNJafh6tqljEpeSLbMmwg'

  constructor(private http: HttpClient) { }
  getbreeds(): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/breeds')
  }

  getAllcats(): Observable<any>{
    return this.http.get(`https://api.thecatapi.com/v1/breeds`)
  };

  getLimitsPhoto(number:number): Observable<any>{
    return this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${number}&breed_ids=beng&api_key=${this.apiKey}`)
  };

  getCatsByBreed(breed:string, limit: number = 10): Observable<any>{
    return this.http.get(` https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breed}&api_key=${this.apiKey}`)
  };
  
}
