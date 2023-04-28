import ResourceStats from '../stats/resources';
import Deck from '../cards/deck'


export default function PlayerOne({controls}){
    let two = controls.you


    return(
        <>
            <ResourceStats render={{type: {helper: {name: 'Builders', amount: two.resources.build.helpers}, currency: {name: 'Bricks', amount: two.resources.build.currency}},  class: "build"}}></ResourceStats>
            <ResourceStats render={{type: {helper: {name: 'Soldiers', amount: two.resources.attack.helpers}, currency: {name: 'Weapons', amount: two.resources.attack.currency}}, class: "attack"}}></ResourceStats>
            <ResourceStats render={{type: {helper: {name: 'Magicians', amount: two.resources.magic.helpers}, currency: {name: 'Crystals', amount: two.resources.magic.currency}}, class: "magic"}}></ResourceStats>
            <Deck render={{cards: {twoCards: two.cards}}}></Deck>
        </>
    )
}


/*

 let two = {
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

*/