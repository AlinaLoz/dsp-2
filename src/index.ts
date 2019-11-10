import { FunctionBuilder } from "./FunctionBuilder";

function buildGraphics() {
    // @ts-ignore
    const N: number = parseInt(document.getElementById('inputN').value);
    const researchFunc = Math.sin;
    const builder = new FunctionBuilder(N, researchFunc);
    const values = builder.generateSignal();
    console.log(values);
}

document.getElementById('buttonN').addEventListener('click', buildGraphics);
