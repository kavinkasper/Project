import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchtext: string = "";

  @Output()
  searching: EventEmitter<string> = new EventEmitter<string>();

  search() {
    this.searching.emit(this.searchtext);
  }



}
