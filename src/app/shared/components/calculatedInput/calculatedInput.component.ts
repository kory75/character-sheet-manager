import {Component, Output, Input, EventEmitter, ViewChild} from '@angular/core';
import {RandomInputComponent} from '../randomInput/randomInput.component';
import {IBandModel} from '../../models/bands/band.model';


@Component({
    selector: 'calculated-input',
    templateUrl: './calculatedInput.component.html',
    styleUrls: ['./calculatedInput.component.scss']
})
export class CalculatedInputComponent extends RandomInputComponent {

    @ViewChild(RandomInputComponent, {static: false}) randomInput: RandomInputComponent;
    @Input() map: IBandModel[];
    @Input() disabled: boolean;
    @Input() unit: string;

    public randomize () {
    }

    public calculate(parentValue: number) {
        this.map.forEach(item => {
           if (parentValue >= item.limit ) {
               this.inputValue = item.value;
           }
        });
    }
}
