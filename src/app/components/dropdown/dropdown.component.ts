import { Component } from '@angular/core';
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
  options: string[] = [];
  newOption: string = '';

  addOption() {
    if (this.newOption.trim() !== '') {
      this.options.push(this.newOption);
      this.newOption = '';
    }
  }

}
