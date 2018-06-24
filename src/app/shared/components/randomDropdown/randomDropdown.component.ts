import {Component, EventEmitter, Input, Output} from '@angular/core';


import { IDropdownData } from '../../models/dropdownData/dropdownData.model';

@Component({
    selector: 'randomDropdown',
    templateUrl: './randomDropdown.component.html',
    styleUrls: ['./randomDropdown.component.scss']
})


export class RandomDropdownComponent {
    @Input() type: string;
    @Input() label: string;
    @Input() data: IDropdownData[] = [
        { name: 'test 0 ', value:"0" },
        { name: 'test 1 ', value:"1" }
    ];


    @Output() randomizeEvent = new EventEmitter();
    public inputValue: any;

    public  randomClicked(){
        this.randomizeEvent.emit();
    };

}