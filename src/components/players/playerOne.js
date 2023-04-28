import ResourceStats from '../stats/resources';
import Deck from '../cards/deck'
import '../../styles/ComponentStyles/playerStyles.css'


export default function PlayerOne({controls}){
    let one = controls.you;
    let oneDeck = controls.turn[0];
    let clickable = controls.clickable;


    return(
        <>
            <div id='player-one-container' className='player-container'>
                <div className="player-resources-container">
                    <ResourceStats render={{type: {helper: {name: 'Builders', amount: one.resources.build.helpers}, currency: {name: 'Bricks', amount: one.resources.build.currency}},  class: "build"}}></ResourceStats>
                    <ResourceStats render={{type: {helper: {name: 'Soldiers', amount: one.resources.attack.helpers}, currency: {name: 'Weapons', amount: one.resources.attack.currency}}, class: "attack"}}></ResourceStats>
                    <ResourceStats render={{type: {helper: {name: 'Magicians', amount: one.resources.magic.helpers}, currency: {name: 'Crystals', amount: one.resources.magic.currency}}, class: "magic"}}></ResourceStats>
                </div>
                <Deck render={{cards: {oneCards: one.cards}, oneDeck: oneDeck, clickable: clickable}}></Deck>
            </div>
        </>
    )
}


/*

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

*/