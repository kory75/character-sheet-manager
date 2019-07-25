import {Component, Output, Input} from '@angular/core';


@Component({
    selector: 'paranoia-color-rank',
    templateUrl: './colorRank.component.html',
    styleUrls: ['./colorRank.component.scss']
})
export class ColorRankComponent {
    @Input() label: string;
    @Output() public selectedColor: string = 'r';

    //@Output colorChanged = new EventEmitter();

    private Data: any[] =  [
        {title: "(IR)", id:"ir"},
        {title: "R", id:"r"},
        {title: "O", id:"o"},
        {title: "Y", id:"y"},
        {title: "G", id:"g"},
        {title: "I", id:"i"},
        {title: "V", id:"v"},
        {title: "(UV)", id:"uv"},
    ]

    public selectColor (color) {
        this.selectedColor = color;
    }
}
