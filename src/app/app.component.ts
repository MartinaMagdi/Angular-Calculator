import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calcButtons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'];
  result = ''

  getResult(button){
    console.log("clicked", button)
    switch(button){
      case 'C':
        return this.result = ''

      case '=':
      return this.result = eval(this.result)

      default:
        return this.result += button
    }
  }
}