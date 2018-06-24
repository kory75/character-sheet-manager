import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ParanoiaComponent } from "./paranoia.component";
import { RandomCharacterNameComponent } from "./randomCharacterName/randomCharacterName.component";
import { SharedModule } from "../shared/shared.module";
import { ColorRankComponent } from "./colorRank/colorRank.component";
import { RandomAttributeComponent } from "./attribute/attribute.component";
import {CommonModule} from '@angular/common'

const paranoiaRoutes: Routes = [
    {
        path: 'paranoia',
        component: ParanoiaComponent,
    }
];

@NgModule({
    declarations: [
        ParanoiaComponent,
        RandomCharacterNameComponent,
        ColorRankComponent,
        RandomAttributeComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(paranoiaRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class ParanoiaModule { }
