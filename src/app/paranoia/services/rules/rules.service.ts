import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root',
})

export class RulesService {

    constructor(private http: HttpClient) {}


    public getBasicRules (): Observable<any> {
        return this.http.get('./assets/paranoia.rules.json');
    }

    public getLevelUpRules () {

    }
}
