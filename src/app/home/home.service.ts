import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getSpaceData():Observable<any>{
    let url = "https://api.spaceXdata.com/v3/launches?limit=100"
    return this.http.get(url);
  }
}
