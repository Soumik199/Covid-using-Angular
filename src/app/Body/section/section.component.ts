import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

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
