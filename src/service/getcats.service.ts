import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',

})
export class GetcatsService {
  // apiKey: string = environment.apiKey;
  apiKey: string  = 'live_dGRUrY1XPdwGTJS5lbgR8KnMloZ0MDk7MgeV2B7Fml7LNJafh6tqljEpeSLbMmwg'
  constructor(private http: HttpClient) { }

  getAllcats(): Observable<any>{
    return this.http.get(`https://api.thecatapi.com/v1/breeds`)
  };

  getLimitsCards(number:number): Observable<any>{
    return this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${number}&api_key=${this.apiKey}`)
  };

  getCatsByBreed(breed:string, limit: number = 10): Observable<any>{
    return this.http.get(` https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breed}&api_key=${this.apiKey}`)
  };
  
}
