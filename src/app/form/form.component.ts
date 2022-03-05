import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
