one: {
    name: 'Uno',
    resources: {
        build: {
            helpers: 2,
            currency: 4
        },
        attack: {
            helpers: 2,
            currency: 4
        },
        magic: {
            helpers: 2,
            currency: 4
        },
    },
    cards: [
        [1, 2], //card 1: {type: 0-3, num: 0-9}
        [2, 1],
        [1, 9],
        [1, 5],
        [2, 1]
    ],
    constructs: {
        castle: 40,
        fence: 20,
    }
},

// return    resources and deck