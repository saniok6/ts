function factorial(n: number, accumulator: number = 1): number {
    if (n === 1)
        return accumulator

    return factorial(n - 1, n * accumulator)
}

export function Exp1(x: number, e: number) {
    if (e > 0) {
        let result = 1;
        for (let i = 0; i < x; i++) {
            let exp = Math.pow(x, i + 1) / factorial(i + 1);
            console.log("Pow " + i + " " + Math.pow(x, i + 1));
            console.log("Factorial " + i + " " + factorial(i + 1));
            console.log(exp);
            if (exp > e)
                result += exp;
            else
                result = result;
        }
        return result;
    } else
        return "Is equal or less than 0";
}
