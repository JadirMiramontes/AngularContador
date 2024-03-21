import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  standalone: true,
  templateUrl: './button-dis.component.html',
})
export class ButtonDisComponent {
  @Input()
  contador:number = 0;

  @Output()
  onDis: EventEmitter<number> = new EventEmitter();

  dis(){
    this.contador--;
    this.onDis.emit(this.contador);
  }
}
