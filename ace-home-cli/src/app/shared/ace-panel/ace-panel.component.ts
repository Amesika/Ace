import { Component, Input, OnInit } from '@angular/core';
import { AcePanel } from '../model/ace-panel';

@Component({
  selector: 'app-ace-panel',
  templateUrl: './ace-panel.component.html',
  styleUrls: ['./ace-panel.component.css']
})
export class AcePanelComponent implements OnInit {

  @Input()
  acePanel!: AcePanel;
  option:number = 100;

  constructor() {
    this.acePanel = new AcePanel;
  }

  ngOnInit(): void {
  }

}
