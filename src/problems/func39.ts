import {Power1} from "./func37";
import {Power2} from './func38';

export function Power3(A: number, B: number) {
    let frac: number = B - Math.floor(B);
    if (frac == 0) {
        return Power2(A, B);
    } else {
        return Power1(A, B);
    }
}