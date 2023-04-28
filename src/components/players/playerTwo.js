import ResourceStats from '../stats/resources'


let two = {
    name: 'Dos',
    resources: {
        build: {
            helpers: 2,
            currency: 6
        },
        attack: {
            helpers: 3,
            currency: 3
        },
        magic: {
            helpers: 1,
            currency: 2
        },
    },
    cards: [
        [0, 7],
        [2, 1],
        [0, 3],
        [1, 5],
        [2, 9]
    ],
    constructs: {
        castle: 40,
        fence: 20,
    }
}

export default function PlayerTwo(){

    function Resources(){
        return(
            <>
                <ResourceStats render={{type: {helper: {name: 'Builders', amount: two.resources.build.helpers}, currency: {name: 'Bricks', amount: two.resources.build.currency}},  class: "build"}}></ResourceStats>
                <ResourceStats render={{type: {helper: {name: 'Soldiers', amount: two.resources.attack.helpers}, currency: {name: 'Weapons', amount: two.resources.attack.currency}}, class: "attack"}}></ResourceStats>
                <ResourceStats render={{type: {helper: {name: 'Magicians', amount: two.resources.magic.helpers}, currency: {name: 'Crystals', amount: two.resources.magic.currency}}, class: "magic"}}></ResourceStats>
            </>
        )
    }

    function Deck(){
        return(
            <>
                <Deck render={{cards: {twoCards: two.cards}}}></Deck>
            </>
        )
    }


    let player_two = {
        resources: Resources,
        deck: Deck
    };
    

    return player_two;
}