import { Component, OnInit } from '@angular/core';
import Vaccine from '../files/Vaccine.json'
@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {
  constructor() {}
  public vaccinedata:{
    state:string, 
    confirmed:number, 
    recovered:number,
    tested:number,
    vaccinated1:number,
    vaccinated2:number
   }[] = Vaccine;
  ngOnInit(): void {
  }

}
