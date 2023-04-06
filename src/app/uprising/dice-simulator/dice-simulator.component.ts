import { Component } from '@angular/core';
import {FadeInOutAnimation} from "../../shared/animations/fadeInOutAnimation";

@Component({
  selector: 'app-dice-simulator',
  templateUrl: './dice-simulator.component.html',
  styleUrls: ['./dice-simulator.component.scss'],
  animations: [
    FadeInOutAnimation
  ]
})
export class DiceSimulatorComponent {

  diceTower: Array<string> = new Array<string>();

  addDiceToDiceTower(green: string) {
    this.diceTower.push(green);
  }
}
