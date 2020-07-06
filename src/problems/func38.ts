export function Power2(A:number,N:number) {
    if(N==0){
        return 1;
    }
    if(N>0){
        return Math.pow(A,N);
    }
    if(N<0){
        return 1/Math.pow(A,Math.abs(N));
    }
}