import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-carsoul',
  templateUrl: './carsoul.component.html',
  styleUrls: ['./carsoul.component.css']
})
export class CarsoulComponent implements OnInit {

  hideElement = false;
  
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/case' || event.url === '/vaccine') {
          this.hideElement = true;
        }  else {
          this.hideElement = false;
        }
      }
    });
  }
  ngOnInit(): void {
  }

}
