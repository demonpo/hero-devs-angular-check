import {Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoFormComponent} from "../todo-form/todo-form.component";

@Component({
  selector: 'hd-modal-holder',
  standalone: true,
    imports: [CommonModule, TodoFormComponent],
  templateUrl: './modal-holder.component.html',
  styleUrls: ['./modal-holder.component.scss']
})
export class ModalHolderComponent {
  @ViewChild('modal_1') modal_1!: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;
  showDialog(){
    let view = this.modal_1.createEmbeddedView(null);
    this.vc.insert(view);
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('hidden');
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('show');
  }

  closeDialog() {
    this.vc.clear()
  }
}
