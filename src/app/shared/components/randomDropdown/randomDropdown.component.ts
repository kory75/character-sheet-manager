import {Component, EventEmitter, Input, Output} from '@angular/core';


import { IDropdownData } from '../../models/dropdownData/dropdownData.model';

@Component({
    selector: 'random-dropdown',
    templateUrl: './randomDropdown.component.html',
    styleUrls: ['./randomDropdown.component.scss']
})


export class RandomDropdownComponent {
    @Input() type: string;
    @Input() label: string;
    @Input() name: string;
    @Input() showDice = true;
    @Input() data: IDropdownData[];


    @Output() randomizeEvent = new EventEmitter();
    public inputValue: any;

    public  randomClicked() {
        this.randomizeEvent.emit();
    };
}