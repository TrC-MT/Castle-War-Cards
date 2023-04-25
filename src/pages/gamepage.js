import '../styles/pageStyles/gamepageStyles.css'
import ResourceStats from "../components/stats/resources";
import Deck from '../components/cards/deck';


export default function GamePage(){

    let players = {
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
        two: {
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
                [1, 2],
                [2, 1],
                [0, 4],
                [1, 5],
                [2, 1]
            ],
            constructs: {
                castle: 40,
                fence: 20,
            }
        }
    }
    //------------------------------
    let turn_count = 0;
    let player_turn = 'one';
    let clickable = false;
    function turnStart(){
        //determine which player is going
        turn_count += 1;
        if(turn_count %2 == 0){
            player_turn = 'two';
        }
        else{
            player_turn = 'one';
        }

        // show correct player cards
            //the Deck component automatically does that

        //update player resources
        if(player_turn == 'one'){
            players.one.resources.build.currency += players.one.resources.build.helpers
            players.one.resources.attack.currency += players.one.resources.attack.helpers
            players.one.resources.magic.currency += players.one.resources.magic.helpers

        }
        else if(player_turn == 'two'){
            players.two.resources.build.currency += players.two.resources.build.helpers
            players.two.resources.attack.currency += players.two.resources.attack.helpers
            players.two.resources.magic.currency += players.two.resources.magic.helpers
        }
        else{
            console.log('player_turn malfunction')
        }
        
        // let player pick a card
        clickable = true
    }
    //---------
    function playCard(whichCard){
        clickable = false //stop players from playing another card
        let effect = whichCard.effect;

        //update players resources //make sure none of them are below 1

        //render the structures

        turnEnd(whichCard.nums)
    }
    //--------
    function turnEnd(nums){
        //replace that card in the deck
        if(player_turn == 'one'){
            for(let i = 0; i < 5; i++){
                if(players.one.cards[i][0] == nums.typeNum && players.one.cards[i][1] == nums.num){
                    players.one.cards[i][0] = randnum(4);
                    players.one.cards[i][1] = randnum(10)
                    break;
                }
            }
        }
        if(player_turn == 'two'){
            for(let i = 0; i < 5; i++){
                if(players.two.cards[i][0] == nums.typeNum && players.two.cards[i][1] == nums.num){
                    players.two.cards[i][0] = randnum(4);
                    players.two.cards[i][1] = randnum(10)
                    break;
                }
            }
        }
        else{
            console.log('player_count not working')
        }

        //check to see if either player is out
        if(players.one.constructs.castle == 0){
            console.log('Player two wins')
        } 
        else if(players.two.constructs.castle == 0){
            console.log('Player one wins')   
        }
        else{
            //turnStart()
        }
    }

    

    //---------------------------

    function randnum(max){
        let num = Math.floor(Math.random() * (max -1));
        return num;
    }


    return(
        <>
            <div id="gamepage-container">
                <div id="left-player-container" class="player-container">
                    <ResourceStats render={{type: {helper: {name: 'Build', amount: players.one.resources.build.helpers}, currency: {name: 'Bricks', amount: players.one.resources.build.currency}},  class: "build"}}></ResourceStats>
                    <ResourceStats render={{type: {helper: {name: 'Soldiers', amount: players.one.resources.attack.helpers}, currency: {name: 'Weapons', amount: players.one.resources.attack.currency}}, class: "attack"}}></ResourceStats>
                    <ResourceStats render={{type: {helper: {name: 'Magicians', amount: players.one.resources.magic.helpers}, currency: {name: 'Crystals', amount: players.one.resources.magic.currency}}, class: "magic"}}></ResourceStats>
                </div>
                <div id="middle-box">
                    <div id="field-container">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div id="deck">
                        <Deck render={{turn: player_turn, cards: {oneCards: players.one.cards, twoCards: players.two.cards}, clickable: clickable, pc: playCard}}></Deck>
                    </div>
                </div>
                <div id="right-player-container" class="player-container">
                <ResourceStats render={{type: {helper: {name: 'Build', amount: players.two.resources.build.helpers}, currency: {name: 'Bricks', amount: players.two.resources.build.currency}},  class: "build"}}></ResourceStats>
                <ResourceStats render={{type: {helper: {name: 'Soldiers', amount: players.two.resources.attack.helpers}, currency: {name: 'Weapons', amount: players.two.resources.attack.currency}}, class: "attack"}}></ResourceStats>
                <ResourceStats render={{type: {helper: {name: 'Magicians', amount: players.two.resources.magic.helpers}, currency: {name: 'Crystals', amount: players.two.resources.magic.currency}}, class: "magic"}}></ResourceStats>
                </div>
            </div>

        </>
    )

    
}