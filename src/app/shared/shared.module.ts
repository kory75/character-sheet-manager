import { NgModule } from '@angular/core';

import { TopMenuComponent } from "./components/topMenu/topMenu.component";
import { RandomInputComponent } from "./components/randomInput/randomInput.component";
import { RandomDropdownComponent } from "./components/randomDropdown/randomDropdown.component";


import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {CalculatedInputComponent} from './components/calculatedInput/calculatedInput.component';



@NgModule({
    declarations: [
        TopMenuComponent,
        RandomInputComponent,
        RandomDropdownComponent,
        CalculatedInputComponent,
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        TopMenuComponent,
        RandomInputComponent,
        RandomDropdownComponent,
        CalculatedInputComponent,
    ],
    providers: [],
})

export class SharedModule { }
