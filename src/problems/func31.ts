export function Swap(X:number[]) {
    let I = X[0];
    let J = X[1];
    I = X[1];
    J = X[0];
    X = [I, J];
    return X;
}