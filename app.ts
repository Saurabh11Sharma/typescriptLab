let myControlFlow: string | number;

myControlFlow = `Hello I'm a string`;
console.log(typeof myControlFlow);

myControlFlow = 4;
console.log(typeof myControlFlow);

interface Creature {
    readonly height: number;
    readonly width: number;
    readonly ocean: string;
}

let vreeg: Creature = {
    height: 100,
    width: 150,
    ocean: 'Pacific'
}
console.log(vreeg);

vreeg.ocean = 'Atlantic';
console.log(vreeg);