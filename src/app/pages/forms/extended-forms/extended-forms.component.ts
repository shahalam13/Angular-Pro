import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { NgbCalendar, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import noUiSlider from "nouislider";

@Component({
  selector: "app-extended-forms",
  templateUrl: "./extended-forms.component.html",
  styleUrls: ["./extended-forms.component.css"]
})
export class ExtendedFormsComponent implements OnInit {
  private tagItems = ["Minimal", "Light", "New", "Friends"];

  private simpleSlider = 40;
  private doubleSlider = [20, 60];

  private state: boolean = true;
  private state1: boolean = true;
  private state2: boolean = true;

  private dropdownList = [];
  private selectedItems = [];
  private dropdownSettings = {};

  private dropdownList1 = [];
  private selectedItems1 = [];
  private dropdownSettings1 = {};

  private dropdownList2 = [];
  private selectedItems2 = [];
  private dropdownSettings2 = {};

  private dropdownList3 = [];
  private selectedItems3= [];
  private dropdownSettings3 = {};


  private model: NgbDateStruct;
  private model1: NgbDateStruct;
  private model2: NgbDateStruct;

  private today = this.calendar.getToday();

  // @Input() footerTemplate: TemplateRef<any>;

  constructor(private calendar: NgbCalendar) {}

  ngOnInit() {

    // City
    this.dropdownList = [
      { id: 1, itemName: "USA" },
      { id: 2, itemName: "UK" },
      { id: 3, itemName: "India" },
      { id: 4, itemName: "Canada" },
      { id: 5, itemName: "Germany" },
      { id: 6, itemName: "China" }
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: true,
      text: " Select",
      enableSearchFilter: false,
      classes: "",
      lazyLoading: true
    };


    this.dropdownList1 = [
      { id: 1, itemName: "Roman" },
      { id: 2, itemName: "Paris" },
      { id: 3, itemName: "Bucharest" },
      { id: 4, itemName: "Rome" },
      { id: 5, itemName: "New York" },
      { id: 6, itemName: "Miami" },
      { id: 7, itemName: "Piatra Neamt" },
      { id: 8, itemName: "Paris" },
      { id: 9, itemName: "Bucharest" },
      { id: 10, itemName: "Rome" },
      { id: 11, itemName: "New York" },
      { id: 12, itemName: "Miami" },
      { id: 13, itemName: "Piatra Neamt" }
    ];
    this.selectedItems1 = [];
    this.dropdownSettings1 = {
      singleSelection: true,
      text: " Select",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: false,
      classes: "",
      lazyLoading: true
    };


    this.dropdownList2 = [
      { id: 1, itemName: "Roman" },
      { id: 2, itemName: "Paris" },
      { id: 3, itemName: "Bucharest" },
      { id: 4, itemName: "Rome" },
      { id: 5, itemName: "New York" },
      { id: 6, itemName: "Miami" },
      { id: 7, itemName: "Piatra Neamt" },
      { id: 8, itemName: "Paris" },
      { id: 9, itemName: "Bucharest" },
      { id: 10, itemName: "Rome" },
      { id: 11, itemName: "New York" },
      { id: 12, itemName: "Miami" },
      { id: 13, itemName: "Piatra Neamt" }
    ];
    this.selectedItems2= [];
    this.dropdownSettings2 = {
      singleSelection: true,
      text: " Select",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: false,
      classes: "",
      lazyLoading: true
    };


    // Currency
    this.dropdownList3 = [
      { id: 1, itemName: "USD" },
      { id: 2, itemName: "CAD" },
      { id: 3, itemName: "EURO" },
      { id: 4, itemName: "POUND" },
  
    ];
    this.selectedItems3= [];
    this.dropdownSettings3 = {
      singleSelection: true,
      text: " Select",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: false,
      classes: "",
      lazyLoading: true
    };

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}
