import { Injectable } from '@angular/core';
import{ HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class CovidService {
 
  constructor(private http:HttpClient) { }
   url="https://coronavirus-19-api.herokuapp.com/countries"; 
   
  getdata(){
     return this.http.get(this.url);
  }
 
}
