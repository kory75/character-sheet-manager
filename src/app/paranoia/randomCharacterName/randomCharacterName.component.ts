import {Component, Output, EventEmitter, ViewChild} from '@angular/core';
import {RandomInputComponent} from "../../shared/components/randomInput/randomInput.component";

@Component({
    selector: 'randomCharacterName',
    templateUrl: './randomCharacterName.component.html',
    styleUrls: ['./randomCharacterName.component.scss']
})
export class RandomCharacterNameComponent extends RandomInputComponent{

    //@Output colorChanged = new EventEmitter();
    @ViewChild(RandomInputComponent) randomInput: RandomInputComponent;

    public randomize () {
        console.log("random name"+this.inputValue);
        this.randomInput.inputValue = 'Joe-'+Math.random().toString(36).replace(/[^a-z]+/g, '')
            .substr(0, 3).toUpperCase()+'-R-1';
        console.log("random name"+this.inputValue);
        //TODO set color rank to red
        //emit color red
       // this.colorChanged.emit("red");
    }
}