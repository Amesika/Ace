import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Menu } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ace-home-cli';

  env = environment.ENV;

  menus: Menu[] = [];


  ngOnInit() {
    this.menus = [
      {
        title: "Tableau de bord",
        icon: "fa fa-tachometer",
        link: ['home'],
        linkActive: "is-active",
        subMenus: [],
      },
      {
        title: "Activité",
        icon: "fa fa-briefcase",
        href: "#activity",
        linkActive: "is-active",
        subMenus: 
        [
          {
            title: "Gestion des activités",
            icon: "",
            link: ['activity'],
            linkActive: "is-active",
            subMenus: [],
          },     
          {
            title: "Personnel",
            icon: "",
            link: ['activity-private'],
            linkActive: "is-active",
            subMenus: [],
          },
          {
            title: "Trading",
            icon: "",
            link: ['trading'],
            linkActive: "is-active",
            subMenus: [],
          },
        ],
      },
      {
        title: "Banques",
        icon: "fa fa-university",
        link: ['bank'],
        linkActive: "is-active",
        subMenus: [],
      },
      {
        title: "Dêttes",
        icon: "fa fa-credit-card-alt",
        link: ['debt'],
        linkActive: "is-active",
        subMenus: [],
      }
    ]
  }
}
