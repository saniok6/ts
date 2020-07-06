export function Power1(A:number,B:number) {
    if(A>0) {
        let power = Math.exp(B * Math.log(A));
        return Math.round(power);
    }
    else
    {
        return 0;
    }
}