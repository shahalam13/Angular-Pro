import { Component, OnInit, ViewChild } from "@angular/core";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: "app-ngx-datatable",
  templateUrl: "./ngx-datatable.component.html",
  styleUrls: ["./ngx-datatable.component.css"]
})
export class NgxDatatableComponent implements OnInit {
  test: any =  `<button (click)="onSelect($event)">Click me</button>`;
  entries: number = 4;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      Account: "112-123-100251",
      CompleteReject: "System Architect"
     
    },
    {
      Account: "112-123-100251",
      CompleteReject: "Accountant"
    
    },
    
    {
      Account: "112-123-100251",
      CompleteReject: "Sales Assistant"
     
    },
   
    
    {
      Account: "112-123-100251",
      CompleteReject: "Chief Financial Officer (CFO)"
     
    }
  ];


  constructor() {
    this.temp = this.rows.map((prop,key)=>{
      return {
        ...prop,
        id: key
      };

    });
  }
  entriesChange($event){
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {

      for(var key in d){
        if(d[key].toLowerCase().indexOf(val) !== -1){
          return true;
        }
      }
      return false;
    });
  }
  onSelect($event) {
   console.log('Select Event', $event);
 }
 onActivate(event) {
    this.activeRow = event.row;
  }
  likeFunction($event){
    $event.preventDefault();
    let details = "You've clicked LIKE button on \n{\n";
    for(var key in this.activeRow){
      details += key + ": " + this.activeRow[key] + "\n";
    }
    details += "}.";
    alert(details);
  }
  editFunction($event){
    $event.preventDefault();
    let details = "You've clicked EDIT button on \n{\n";
    for(var key in this.activeRow){
      details += key + ": " + this.activeRow[key] + "\n";
    }
    details += "}.";
    alert(details);
  }
  deleteFunction($event){
    $event.preventDefault();
    this.temp = this.rows.filter(entry => entry.id !== this.activeRow.id);
  }
  ngOnInit() {}
}
