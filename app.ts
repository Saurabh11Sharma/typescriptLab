interface Warrior {
    name: string;
    weapon: string;
    strength: number;
};

type Category<T> = {
    [P in keyof T] ?: T[P];
}

type Samurai = Category<Warrior>;

let samuraiOne: Samurai = {
    name: 'SamuraiOne',
    weapon: 'staff'
}

console.log(samuraiOne);

let vreegKing = {
    size: 250,
    ocean: 'Pacific',
    snout: 'Big'
}

console.log(vreegKing);

// rest
let { snout, ...vreegQueen } = vreegKing;
vreegQueen.ocean = 'Atlantic';
console.log(vreegQueen);

// spread
let monsters = {...vreegKing, ...vreegQueen};
console.log(monsters);