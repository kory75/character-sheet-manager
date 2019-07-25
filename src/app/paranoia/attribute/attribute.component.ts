import {Component, Output, Input, EventEmitter, ViewChild} from '@angular/core';
import {RandomInputComponent} from '../../shared/components/randomInput/randomInput.component';

@Component({
    selector: 'paranoia-random-attribute',
    templateUrl: './attribute.component.html',
    styleUrls: ['./attribute.component.scss']
})
export class RandomAttributeComponent extends RandomInputComponent {

    @ViewChild(RandomInputComponent, {static: false}) randomInput: RandomInputComponent;
    @Input() min: number;
    @Input() max: number;
    @Input() dices: string;

    public randomize () {
        this.randomInput.inputValue = this.diceService.roll(this.dices);
    }
}
