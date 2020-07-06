export function AddLeftDigit(D: number, K: number) {
    const x = K.toString().length;
    const result = D * Math.pow(10, x) + K;
    return result;
}