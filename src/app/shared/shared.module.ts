import { NgModule } from '@angular/core';

import { TopMenuComponent } from "./components/topMenu/topMenu.component";
import { RandomInputComponent } from "./components/randomInput/randomInput.component";
import { RandomDropdownComponent } from "./components/randomDropdown/randomDropdown.component";


import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";



@NgModule({
    declarations: [
        TopMenuComponent,
        RandomInputComponent,
        RandomDropdownComponent,
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        TopMenuComponent,
        RandomInputComponent,
        RandomDropdownComponent,
    ],
    providers: [],
})

export class SharedModule { }
