export function Sign(x: number) {
    if (x < 0) {
        return -1;
    }
    if (x == 0) {
        return 0;
    }
    if (x > 1) {
        return 1;
    }
}