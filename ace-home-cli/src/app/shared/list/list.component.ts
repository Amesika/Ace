import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Modal } from 'src/app/models/modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()title:String ="";
  @Input()items:any[]=[];
  @Input()color:String ="";

  @Output() crudItemEvent = new EventEmitter<Modal>();

  modalId_="#activity-dash";

  constructor() { }

  ngOnInit(): void {
  }
  
  edit(item:any){

    console.log("Edit activity")
    let mdCli = new Modal();
    mdCli.title="Modifier une activité";
    mdCli.option=1;
    mdCli.data=item;
    this.crudItemEvent.emit(mdCli);
  }

  delete(item:any){
    console.log("Delete activity")
    let mdCli = new Modal();
    mdCli.title="Supprimer une activité";
    mdCli.option=3;
    mdCli.data=item;
    this.crudItemEvent.emit(mdCli);
  }

  copy(item:any){
    console.log("Copy activity")
    let mdCli = new Modal();
    mdCli.title="Créer une activité";
    mdCli.option=2;
    mdCli.data=item;
    this.crudItemEvent.emit(mdCli);
  }

}
