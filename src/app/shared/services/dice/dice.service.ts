import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root",
})

export class DiceService {

    constructor() {
    }

    public roll(dices: string): number {
        let total = 0;
        let elements: string[];
        const regex = /^(\d*)[d]{1}(\d+)$/gi;
            elements = this.splitElements(dices);
            elements.forEach(function (element) {
                let addition = true;
                if (element.substring(0, 1) === '+' || element.substring(0, 1) === '-') {
                    addition = this.isAddition(element.substring(0, 1));
                    element = element.substring(1);
                }
                if (element.match(regex)) {
                    const dice = regex.exec(element);
                    let num = 0;
                    if (!dice[1]) {
                        dice[1] = '1';
                    }
                    for (let i = 0; i < Number(dice[1]); i++) {
                        num += Math.ceil(Math.random() * Number(dice[2]));
                    }
                    if (addition) {
                        total += Number(num);
                    } else {
                        total -= Number(num);
                    }
                } else if (Number(element)) {
                    console.log(element + ' ' + Number(element));
                    if (addition) {
                        total += Number(element);
                    } else {
                        total -= Number(element);
                    }
                }
            });
            return total;
    }

    private isAddition(sign: string): boolean {
        if (sign === '+') {
            return true;
        } else {
            return false;
        }
    }

    //privat adjustTotal();

    private splitElements(dices: string): string[] {
        dices = dices.toLowerCase().replace(/\s+/g, '').replace(/\+/g, ',+').replace(/-/g, ',-');	// Strip whitespaces
        return dices.split(',');
    }

}
