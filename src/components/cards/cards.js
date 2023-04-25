export default [
    [ //build: 
        {
            name: "Babylon",
            cost: "39",
            effect: "castle +32"
        },
        {
            name: "Wain",
            cost: "10",
            effect: "enemy castle -4, castle +8"
        },
        {
            name: "Base",
            cost: "1",
            effect: "castle +2"
        },
        {
            name: "Defence",
            cost: "3",
            effect: "fence +6"
        },
        {
            name: "Fence",
            cost: "12",
            effect: "fence +22"
        },
        {
            name: "Fort",
            cost: "18",
            effect: "castle +20"
        },
        {
            name: "Reserve",
            cost: "3",
            effect: "caste +8, fence -4"
        },
        {
            name: "School",
            cost: "8",
            effect: "builders +1"
        },
        {
            name: "Tower",
            cost: "5",
            effect: "castle +5"
        },
        {
            name: "Wall",
            cost: "1",
            effect: "fence +3"
        },
    ],
    [ // attack:
        {
            name: "Archer",
            cost: "1",
            effect: "attack 2"
        },
        {
            name: "Catapult", //Known in the game as Attack
            cost: "10",
            effect: "attack 12"
        },
        {
            name: "Banshee",
            cost: "28",
            effect: "attack 32"
        },
        {
            name: "Knight",
            cost: "2",
            effect: "attack 3"
        },
        {
            name: "Platoon",
            cost: "4",
            effect: "attack 6"
        },
        {
            name: "Recruit",
            cost: "8",
            effect: "soldiers +1"
        },
        {
            name: "Rider",
            cost: "2",
            effect: "attack 4"
        },
        {
            name: "Saboteur",
            cost: "12",
            effect: "enemy_stocks -4"
        },
        {
            name: "Swat",
            cost: "18",
            effect: "enemy_castle -10"
        },
        {
            name: "Thief",
            cost: "15",
            effect: "enemy_stocks -5 stocks +5"
        },
        
    ],
    [ //magic: 
        {
            name: "Conjure bricks",
            cost: "4",
            effect: "bricks +8"
        },
        {
            name: "Conjure crystals",
            cost: "4",
            effect: "crystals +8"
        },
        {
            name: "Conjure weapons",
            cost: "4",
            effect: "weapons +8"
        },
        {
            name: "Crush bricks",
            cost: "4",
            effect: "enemy bricks -8"
        },
        {
            name: "Crush crystals",
            cost: "4",
            effect: "enemy crystals -8"
        },
        {
            name: "Crush weapons",
            cost: "4",
            effect: "enemy weapons -8"
        },
        {
            name: "Curse",
            cost: "25",
            effect: "all +1, enemy all -1"
        },
        {
            name: "Dragon",
            cost: "21",
            effect: "attack 25"
        },
        {
            name: "Pixies",
            cost: "22",
            effect: "castle +22"
        },
        {
            name: "Sorcerer",
            cost: "8",
            effect: "magic +1"
        },
    ]
]