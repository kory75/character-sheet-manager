import {Component, Output, Input, EventEmitter, ViewChild} from '@angular/core';
import {RandomInputComponent} from '../../shared/components/randomInput/randomInput.component';
import {CalculatedInputComponent} from '../../shared/components/calculatedInput/calculatedInput.component';

@Component({
    selector: 'paranoia-bonus-input',
    templateUrl: './bonus.component.html',
    styleUrls: ['./bonus.component.scss']
})
export class BonusComponent extends CalculatedInputComponent {

    @ViewChild(CalculatedInputComponent, {static: false}) randomInput: CalculatedInputComponent;

    public randomize () {
    }
}
