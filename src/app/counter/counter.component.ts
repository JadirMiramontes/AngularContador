import { Component } from "@angular/core";

@Component({
    selector:"app-contador",
    standalone:true,
    templateUrl:"./counter.component.html"
})
export class CounterComponent{
    contador: number = 0;

    add(){
      this.contador++;
    }
  
    dis(){
      this.contador--;
    }
}