import ResourceStats from '../stats/resources';
import Deck from '../cards/deck'


let one = {
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
}

export default function PlayerOne(){

    return(
        <>
            <ResourceStats render={{type: {helper: {name: 'Builders', amount: one.resources.build.helpers}, currency: {name: 'Bricks', amount: one.resources.build.currency}},  class: "build"}}></ResourceStats>
            <ResourceStats render={{type: {helper: {name: 'Soldiers', amount: one.resources.attack.helpers}, currency: {name: 'Weapons', amount: one.resources.attack.currency}}, class: "attack"}}></ResourceStats>
            <ResourceStats render={{type: {helper: {name: 'Magicians', amount: one.resources.magic.helpers}, currency: {name: 'Crystals', amount: one.resources.magic.currency}}, class: "magic"}}></ResourceStats>
            <Deck render={{cards: {oneCards: one.cards}}}></Deck>
        </>
    )
}