export class FunctionBuilder {
    private readonly N: number;
    private readonly func: Function;

    constructor(N: number, func: Function) {
        this.N = N;
        this.func = func;
    }

    generateSignal() {
        const result: number[] = [];
        for (let i = 0; i < this.N; i++) {
            const tmp = this.func( 2 * Math.PI * i / this.N );
            result.push(tmp);
        }
        return result;
    }


}
