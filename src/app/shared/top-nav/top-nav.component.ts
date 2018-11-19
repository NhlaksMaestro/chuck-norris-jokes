import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  selectedRouter: string;
  constructor() {
    this.selectedRouter = 'home';
  }

  ngOnInit() {
  }
  changeRoute(routeName: string) {
    this.selectedRouter = routeName;
  }
}
