import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  @Input()title:String ="";
  @Input()items:Activity[]=[];
  @Input()color:String ="";

  @Output() crudItemEvent = new EventEmitter<string>();

  modalId_="#activity-dash";

  constructor() { }

  ngOnInit(): void {
  }
  
  edit(){

    console.log("Edit activity")
    this.crudItemEvent.emit("Modifier une activité");
  }

  delete(){
    console.log("Delete activity")
    this.crudItemEvent.emit("Supprimer une activité");
  }

  copy(){
    console.log("Copy activity")
    this.crudItemEvent.emit("Créer une activité");
  }

}
