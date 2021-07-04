import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  faSearch = faSearch;
  @Output() inputChange: EventEmitter<any> = new EventEmitter();
  onInputChange(event: Event): void {
    this.inputChange.emit(event);
  }
}
