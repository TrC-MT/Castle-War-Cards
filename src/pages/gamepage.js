import '../styles/pageStyles/gamepageStyles.css'
import {useCallback, useState} from 'react';
import PlayerOne from '../components/players/playerOne';
import PlayerTwo from '../components/players/playerTwo'

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
    }

    
    //------------------------------
    let turn_count = 0;
    let [player_turn_one, setPlayerTurnOne] = useState(true)
    let [player_turn_two, setPlayerTurnTwo] = useState(false)
    let clickable = false;
    function turnStart(){
        console.log('before replace player one cards: ', )
        //determine which player is going
        turn_count += 1;
        if(turn_count %2 == 0){
                setPlayerTurnOne(false)
                setPlayerTurnTwo(true)
        }
        else{
                setPlayerTurnOne(true)
                setPlayerTurnTwo(false)
        }

        console.log('\n \n turn_count: ', turn_count, " player_turn: ")

        // show correct player cards
            //the Deck component should automatically do that

        //update player resources
        if(player_turn_one == true){
            players.one.resources.build.currency += players.one.resources.build.helpers
            players.one.resources.attack.currency += players.one.resources.attack.helpers
            players.one.resources.magic.currency += players.one.resources.magic.helpers

        }
        else if(player_turn_two == true){
            players.two.resources.build.currency += players.two.resources.build.helpers
            players.two.resources.attack.currency += players.two.resources.attack.helpers
            players.two.resources.magic.currency += players.two.resources.magic.helpers
        }
        else{
            console.log('player_turn malfunction')
        }

        // show correct player resources
            //the Resources components should automatically do that
        
        // let player pick a card
        clickable = true

        console.log('You may now pick a card.')
    }
    //---------
    function playCard(whichCard){
        console.log('playCard just started')
        clickable = false //stop players from playing another card
        let effect = whichCard.effect;

        //update players resources //make sure none of them are below 1
        ///The effect will be used here

        //render the structures

        turnEnd(whichCard.nums)
    }
    //--------
    let card_replaced = false;
    function turnEnd(nums){
        console.log('turnEnd just started.')
        // console.log('nums: ', nums)
        //replace that card in the deck
        card_replaced = false;
        if(player_turn_one == true){
            for(let i = 0; i < 5; i++){
                if(card_replaced == false){
                    // console.log('players.one.cards[i][0] : ', players.one.cards[i][0])
                    // console.log('typeNum: ', nums.typeNum)
                    // console.log('players.one.cards[i][1] : ', players.one.cards[i][1])
                    // console.log('num: ', nums.num)
                    if(players.one.cards[i][0] == nums.typeNum && players.one.cards[i][1] == nums.Num){
                        console.log('The card played ', i, " ", players.one.cards[i], ' has been replaced with: ')
                        players.one.cards[i][0] = randnum(4);
                        players.one.cards[i][1] = randnum(10);
                        console.log(players.one.cards[i])
                        card_replaced = true
                    }
                }
                
            }
        }
        else if(player_turn_two == true){
            console.log('A card from players.two is going to be replaced.')
            for(let i = 0; i < 5; i++){
                if(card_replaced == false){
                    if(players.two.cards[i][0] == nums.typeNum && players.two.cards[i][1] == nums.num){
                        console.log('The card played ', i, " ", players.two.cards[i], ' has been replaced with: ')
                        players.two.cards[i][0] = randnum(4);
                        players.two.cards[i][1] = randnum(10);
                        console.log(players.two.cards[i])
                        card_replaced = true
                    }
                }
            }
        }
        else{
            console.log('player_count not working')
        }

        console.log('player one cards after replace: ', players.one.cards)

        //check to see if either player is out
        if(players.one.constructs.castle == 0){
            console.log('Player two wins')
        } 
        else if(players.two.constructs.castle == 0){
            console.log('Player one wins')   
        }
        else{
            turnStart()
        }
    }

    

    //---------------------------

    function randnum(max){
        let num = Math.floor(Math.random() * (max -1));
        return num;
    }


    //Start the game
    // turnStart()


    return(
        <>
            <div id="gamepage-container">
                <PlayerOne controls={{turn: [player_turn_one, player_turn_two], you: players.one}}></PlayerOne>
                <PlayerTwo controls={{turn: [player_turn_one, player_turn_two], you: players.two}}></PlayerTwo>
            </div>

        </>
    )

    
}


//============================
/* Gameflow */
/*
    SETUP
    randomly pick the players starting cards
    start the turn with player one
    render the page with the default starting resources
    and render generated cards for player one
    
    GAMEPLAY
    player picks a card
    the cards effect is used
    update the players resources according to the effect
    render the players resources
    remove that card from the players deck
    replace the played card with a random one
    set the players_turn to the next player
    render that players cards




*/


// =================================================================

/*
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
    }

*/