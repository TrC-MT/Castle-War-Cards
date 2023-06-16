export default [
    [ //build: 
        {
            name: "Babylon",
            cost: "39",
            description: "castle +32",
            effect: ""
        },
        {
            name: "Wain",
            cost: "10",
            description: "opponent castle -4, castle +8",
            effect: ""
        },
        {
            name: "Base",
            cost: "1",
            description: "castle +2",
            effect: ""
        },
        {
            name: "Defence",
            cost: "3",
            description: "fence +6",
            effect: ""
        },
        {
            name: "Fence",
            cost: "12",
            description: "fence +22",
            effect: ""
        },
        {
            name: "Fort",
            cost: "18",
            description: "castle +20",
            effect: ""
        },
        {
            name: "Reserve",
            cost: "3",
            description: "castle +8, fence -4",
            effect: ""
        },
        {
            name: "School",
            cost: "8",
            description: "builders +1",
            effect: ""
        },
        {
            name: "Tower",
            cost: "5",
            description: "castle +5",
            effect: ""
        },
        {
            name: "Wall",
            cost: "1",
            description: "fence +3",
            effect: ""
        },
    ],
    [ // attack:
        {
            name: "Archer",
            cost: "1",
            description: "attack 2",
            effect: ""
        },
        {
            name: "Catapult", //Known in the game as Attack
            cost: "10",
            description: "attack 12",
            effect: ""
        },
        {
            name: "Banshee",
            cost: "28",
            description: "attack 32",
            effect: ""
        },
        {
            name: "Knight",
            cost: "2",
            description: "attack 3",
            effect: ""
        },
        {
            name: "Platoon",
            cost: "4",
            description: "attack 6",
            effect: ""
        },
        {
            name: "Recruit",
            cost: "8",
            description: "soldiers +1",
            effect: ""
        },
        {
            name: "Rider",
            cost: "2",
            description: "attack 4",
            effect: ""
        },
        {
            name: "Saboteur",
            cost: "12",
            description: "opponent stocks -4",
            effect: ""
        },
        {
            name: "Swat",
            cost: "18",
            description: "opponent castle -10",
            effect: ""
        },
        {
            name: "Thief",
            cost: "15",
            description: "opponent stocks -5, stocks +5",
            effect: ""
        },
        
    ],
    [ //magic: 
        {
            name: "Conjure bricks",
            cost: "4",
            description: "bricks +8",
            effect: ""
        },
        {
            name: "Conjure crystals",
            cost: "4",
            description: "crystals +8",
            effect: ""
        },
        {
            name: "Conjure weapons",
            cost: "4",
            description: "weapons +8",
            effect: ""
        },
        {
            name: "Crush bricks",
            cost: "4",
            description: "opponent bricks -8",
            effect: ""
        },
        {
            name: "Crush crystals",
            cost: "4",
            description: "opponent crystals -8",
            effect: ""
        },
        {
            name: "Crush weapons",
            cost: "4",
            description: "opponent weapons -8",
            effect: ""
        },
        {
            name: "Curse",
            cost: "25",
            description: "all +1, opponent all -1",
            effect: ""
        },
        {
            name: "Dragon",
            cost: "21",
            description: "attack 25",
            effect: ""
        },
        {
            name: "Pixies",
            cost: "22",
            description: "castle +22",
            effect: ""
        },
        {
            name: "Sorcerer",
            cost: "8",
            description: "magicians +1",
            effect: ""
        },
    ],
    [ //Food
        {
            name: "Farmer",
            cost: "8",
            description: "harvest +1",
            effect: ""
        },
    ],
    [ //Random
        {
            name: "Random",
            cost: "//between 1 to 4 of any resource",
            description: "any resource either player + or - 3 to 5"
        },
    ]
];