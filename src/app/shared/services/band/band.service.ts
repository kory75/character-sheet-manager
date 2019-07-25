import {IBandModel} from '../../models/bands/band.model';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class BandService {

    constructor() {
    }

    public evaluate(value: number, bands: IBandModel[]): number {
        let result = 0;
        bands.forEach( band => {
            if (band.limit <= value) {
                result = band.value;
            }
        });
        return result;
    }
}
