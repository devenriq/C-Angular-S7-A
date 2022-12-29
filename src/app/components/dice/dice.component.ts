import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  listNumbers: number[]=[]

  rollDice(){
    let result = Math.floor(Math.random()*7)
    this.listNumbers.push(result)
    console.log(this.listNumbers[this.listNumbers.length-2])
    if(this.listNumbers[this.listNumbers.length-2] === result){
      result = Math.floor(Math.random()*7)
    }
    return result
  }
}
