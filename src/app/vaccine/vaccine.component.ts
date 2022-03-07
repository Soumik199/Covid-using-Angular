import { Component, OnInit } from '@angular/core';
import Vaccine from '../files/Vaccine.json'
@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
  getdata:any;
  constructor() {}
  public vaccinedata:{
    state:string, 
    confirmed:number, 
    vaccinated1:number,
    vaccinated2:number
   }[] = Vaccine;
  ngOnInit(): void {
  }
}
