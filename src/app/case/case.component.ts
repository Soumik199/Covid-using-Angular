import { Component, OnInit } from '@angular/core';
import{CovidService} from '../service/covid.service'
@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
    getdata:any;
    
  constructor(private covid:CovidService) { this.getDatafromApi()}

  getDatafromApi(){
    this.covid.getdata().subscribe((data)=>{
     this.getdata = data;
     console.log(this.getdata)
    },
    (err)=>{
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
