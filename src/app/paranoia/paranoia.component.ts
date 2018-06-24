import { Component } from '@angular/core';
import {RulesService} from './services/rules/rules.service';

@Component({
    selector: 'paranoia',
    templateUrl: './paranoia.component.html',
    styleUrls: ['./paranoia.component.scss']
})
export class ParanoiaComponent {
    public rules: any;

    constructor(public rulesService: RulesService) {
        this.rulesService.getBasicRules().subscribe(data => {
            console.log(data);
            this.rules = data;
        });
    }

}
