import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector:"app-button-add",
  standalone:true,
  templateUrl: './button-add.component.html',
})
export class ButtonAddComponent {
  @Input()
  contador: number=0;

  @Output() onAdd: EventEmitter<number> = new EventEmitter();
  add(){
    this.contador++;
    this.onAdd.emit(this.contador);
  }
}
