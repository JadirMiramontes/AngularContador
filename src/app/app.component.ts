import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ButtonAddComponent } from './counter/button-add/button-add.component';
import { ButtonDisComponent } from './counter/button-dis/button-dis.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports:[RouterOutlet,CounterComponent,ButtonAddComponent,ButtonDisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
 
}
