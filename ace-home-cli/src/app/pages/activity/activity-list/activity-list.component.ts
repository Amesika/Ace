import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { Modal } from 'src/app/models/modal';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  @Input()title:String ="";
  @Input()items:Activity[]=[];
  @Input()color:String ="";

  @Output() crudItemEvent = new EventEmitter<Modal>();

  modalId_="#activity-dash";

  constructor() { }

  ngOnInit(): void {
  }
  
  edit(item:Activity){

    console.log("Edit activity")
    let mdCli = new Modal();
    mdCli.title="Modifier une activité";
    mdCli.option=1;
    mdCli.data=item;
    this.crudItemEvent.emit(mdCli);
  }

  delete(item:Activity){
    console.log("Delete activity")
    let mdCli = new Modal();
    mdCli.title="Supprimer une activité";
    mdCli.option=3;
    mdCli.data=item;
    this.crudItemEvent.emit(mdCli);
  }

  copy(item:Activity){
    console.log("Copy activity")
    let mdCli = new Modal();
    mdCli.title="Créer une activité";
    mdCli.option=2;
    mdCli.data=item;
    this.crudItemEvent.emit(mdCli);
  }

}
