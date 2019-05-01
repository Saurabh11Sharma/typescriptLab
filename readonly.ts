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

// Show error
// vreeg.ocean = 'Atlantic';
console.log(vreeg);
