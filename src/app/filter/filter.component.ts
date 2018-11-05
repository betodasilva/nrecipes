import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filterBy( type ) {
    console.log(`Filtering recipes by ${type}`);
  }
}
