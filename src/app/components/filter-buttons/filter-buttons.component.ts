import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hd-filter-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent {
  @Input() filters: string[] = [];
  @Output() selectedFilter = new EventEmitter<string>();
  _selectedFilter?: string;

  selectFilter(filter?: string) {
    this._selectedFilter = filter;
    this.selectedFilter.emit(filter);
  }
}
