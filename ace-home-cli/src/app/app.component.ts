import { Component, OnInit } from '@angular/core';
import { Menu } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ace-home-cli';

  menus: Menu[] = [];


  ngOnInit() {
    this.menus = [
      {
        title: "Tableau de bord",
        icon: "fa fa-tachometer",
        link: ['home'],
        linkActive: "is-active"
      },
      {
        title: "Activité",
        icon: "fa fa-briefcase",
        link: ['activity'],
        linkActive: "is-active"
      },
      {
        title: "Banques",
        icon: "fa fa-university",
        link: ['bank'],
        linkActive: "is-active"
      },
      {
        title: "Dêttes",
        icon: "fa fa-credit-card-alt",
        link: ['debt'],
        linkActive: "is-active"
      }
    ]
  }
}
