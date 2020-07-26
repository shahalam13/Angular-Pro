import { Component, OnInit, ViewChild } from "@angular/core";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: "app-ngx-datatable",
  templateUrl: "./ngx-datatable.component.html",
  styleUrls: ["./ngx-datatable.component.css"]
})
export class NgxDatatableComponent implements OnInit {
  test: any =  `<button (click)="onSelect($event)">Click me</button>`;
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      name: "Chao Lee",
      account: "112123100251",
      office: "Edinburgh",
      amount: "1000"
    },
    {
      name: "Garrett Winters",
      account: "112123100256",
      office: "Tokyo",
      amount: "6300"
    },
    {
      name: "Ashton Cox",
      account: "112123100257",
      office: "San Francisco",
      amount: "660"
    },
    {
      name: "Cedric Kelly",
      account: "112123100250",
      office: "Edinburgh",
      amount: "2200"
    },


    {
      name: "Olivia Liang",
      account: "112123100256",
      office: "Singapore",
      amount: "6450"
    }
  ];




  constructor(private toastr: ToastrService) {

    this.temp = this.rows.map((prop,key)=>{
      return {
        ...prop,
        id: key
      };

    });
  }
  showNotification(from, align) {
    const color = Math.floor(Math.random() * 5 + 1);

    switch (color) {
      case 1:
   
        this.toastr.success(
          '<span class="now-ui-icons ui-1_check"></span> Success!  <b>Status</b> - has been update successfully.',
          "",
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;

      case 2:
        this.toastr.success(
          '<span class="now-ui-icons ui-1_check"></span> Success!  <b>Status</b> - has been update successfully.',
          "",
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;



      default:
        break;
    }
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
