import { Component } from '@angular/core';

import { ISheet } from '../shared/models/sheet/sheet.model';

@Component({
    selector: 'sheetList',
    templateUrl: './sheetList.component.html',
    styleUrls: ['./sheetList.component.scss']
})
export class SheetListComponent {
    sheetImageFallback = 'placeholder.jpg';
    sheets: ISheet[] = [
        {
            name: "Paranoia 2nd Edition",
            game: "Paranoia",
            edition: "2nd",
            sheetVersion: "0.1 - alpha",
            image: "paranoia2ndcharactersheet.jpg",
            link: "paranoia"
        },
        {
            name: "Call of Cthulhu",
            game: "Paranoia",
            edition: "2nd",
            sheetVersion: "0.1 - alpha",
            image: "",
            link: "callOfCthulhu/index.html"
        },
        {
            name: "Warhammer Fantasy",
            game: "Paranoia",
            edition: "2nd",
            sheetVersion: "0.1 - alpha",
            image: "",
            link: "WarhammerFantasy/whf.html"
        }
    ];
}