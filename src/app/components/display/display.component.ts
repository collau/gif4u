import { Component, OnInit, Input } from '@angular/core';
import {Search} from '../search/search';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input()
  searchText: Search;

  constructor() { }

  ngOnInit() {
  }

}
