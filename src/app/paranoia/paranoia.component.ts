import {Component, ViewChild, ViewChildren} from '@angular/core';
import {RulesService} from './services/rules/rules.service';
import {CalculatedInputComponent} from '../shared/components/calculatedInput/calculatedInput.component';

@Component({
    selector: 'paranoia',
    templateUrl: './paranoia.component.html',
    styleUrls: ['./paranoia.component.scss']
})
export class ParanoiaComponent {
    public rules: any;


    @ViewChildren (CalculatedInputComponent) calculatedInputs: CalculatedInputComponent;

    constructor(public rulesService: RulesService) {
        this.rulesService.getBasicRules().subscribe(data => {
            console.log(data);
            this.rules = data;
        });

    }



}
