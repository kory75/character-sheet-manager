import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DiceService} from '../../services/dice/dice.service';
import {IBandModel} from '../../models/bands/band.model';
import {BandService} from '../../services/band/band.service';

@Component({
    selector: 'random-input',
    templateUrl: './randomInput.component.html',
    styleUrls: ['./randomInput.component.scss']
})


export class RandomInputComponent {
    @Input() type: string;
    @Input() label: string;
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;
    @Input() showDice = true;
    @Input() disabled = false;
    @Input() bands: IBandModel[];
    @Input() unit: string;


    @Output() randomizeEvent = new EventEmitter();
    public inputValue: any;

    public constructor(public diceService: DiceService, public bandService: BandService) {
    }

    public randomClicked() {
        this.randomizeEvent.emit();
    }
}
