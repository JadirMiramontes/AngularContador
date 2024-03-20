import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  contador: number = 0;

  add(){
    this.contador++;
  }

  dis(){
    this.contador--;
  }
}
