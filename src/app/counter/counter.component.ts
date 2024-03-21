import { Component } from "@angular/core";
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonDisComponent } from "./button-dis/button-dis.component";

@Component({
    selector: "app-contador",
    standalone: true,
    templateUrl: "./counter.component.html",
    imports: [ButtonAddComponent, ButtonDisComponent]
})
export class CounterComponent{
  contador: number = 0;

  handleCount(value: number){
   this.contador= value;
   console.log(value);
   
  }
}