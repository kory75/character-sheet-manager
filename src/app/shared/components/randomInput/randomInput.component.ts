import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DiceService} from '../../services/dice/dice.service';

@Component({
    selector: 'randomInput',
    templateUrl: './randomInput.component.html',
    styleUrls: ['./randomInput.component.scss']
})


export class RandomInputComponent {
    @Input() type: string;
    @Input() label: string;
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;
    @Input() showDice: boolean = true;


    @Output() randomizeEvent = new EventEmitter();
    public inputValue: any;

    public constructor(public diceService: DiceService) {
    }

    public  randomClicked() {
        this.randomizeEvent.emit();
    }
}
