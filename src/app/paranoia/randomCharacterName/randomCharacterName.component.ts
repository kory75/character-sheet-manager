import {Component, Output, EventEmitter, ViewChild} from '@angular/core';
import {RandomInputComponent} from '../../shared/components/randomInput/randomInput.component';

@Component({
    selector: 'paranoia-random-character-name',
    templateUrl: './randomCharacterName.component.html',
    styleUrls: ['./randomCharacterName.component.scss']
})
export class RandomCharacterNameComponent extends RandomInputComponent {

    //@Output colorChanged = new EventEmitter();
    @ViewChild(RandomInputComponent, {static: false}) randomInput: RandomInputComponent;

    public randomize () {
        this.randomInput.inputValue = 'Joe-'+Math.random().toString(36).replace(/[^a-z]+/g, '')
            .substr(0, 3).toUpperCase()+'-R-1';
        //TODO set color rank to red
        //emit color red
       // this.colorChanged.emit("red");
    }
}