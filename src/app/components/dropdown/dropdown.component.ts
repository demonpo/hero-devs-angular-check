import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'hd-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Input()
  set preselectedOption(option: string | undefined) {
    if(!option) return;
    this._selectedOption = option;
  }
  @Output() newOption: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectedOption: EventEmitter<string> = new EventEmitter<string>();
  _selectedOption: string = '';
  _newOption: string = '';

  addOption() {
    if (this._newOption.trim() !== '') {
      this.newOption.emit(this._newOption);
      this._newOption = '';
    }
  }

  selectOption() {
    this.selectedOption.emit(this._selectedOption);
  }
}
