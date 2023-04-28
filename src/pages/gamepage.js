import '../styles/pageStyles/gamepageStyles.css'
import {useCallback, useState} from 'react';
import PlayerOne from '../components/players/playerOne'
import PlayerTwo from '../components/players/playerTwo';


export default function GamePage(){

    
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
            PlayerOne.resources.build.currency += PlayerOne.resources.build.helpers
            PlayerOne.resources.attack.currency += PlayerOne.resources.attack.helpers
            PlayerOne.resources.magic.currency += PlayerOne.resources.magic.helpers

        }
        else if(player_turn_two == true){
            PlayerTwo.resources.build.currency += PlayerTwo.resources.build.helpers
            PlayerTwo.resources.attack.currency += PlayerTwo.resources.attack.helpers
            PlayerTwo.resources.magic.currency += PlayerTwo.resources.magic.helpers
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
                    // console.log('PlayerOne.cards[i][0] : ', PlayerOne.cards[i][0])
                    // console.log('typeNum: ', nums.typeNum)
                    // console.log('PlayerOne.cards[i][1] : ', PlayerOne.cards[i][1])
                    // console.log('num: ', nums.num)
                    if(PlayerOne.cards[i][0] == nums.typeNum && PlayerOne.cards[i][1] == nums.Num){
                        console.log('The card played ', i, " ", PlayerOne.cards[i], ' has been replaced with: ')
                        PlayerOne.cards[i][0] = randnum(4);
                        PlayerOne.cards[i][1] = randnum(10);
                        console.log(PlayerOne.cards[i])
                        card_replaced = true
                    }
                }
                
            }
        }
        else if(player_turn_two == true){
            console.log('A card from PlayerTwo is going to be replaced.')
            for(let i = 0; i < 5; i++){
                if(card_replaced == false){
                    if(PlayerTwo.cards[i][0] == nums.typeNum && PlayerTwo.cards[i][1] == nums.num){
                        console.log('The card played ', i, " ", PlayerTwo.cards[i], ' has been replaced with: ')
                        PlayerTwo.cards[i][0] = randnum(4);
                        PlayerTwo.cards[i][1] = randnum(10);
                        console.log(PlayerTwo.cards[i])
                        card_replaced = true
                    }
                }
            }
        }
        else{
            console.log('player_count not working')
        }

        console.log('player one cards after replace: ', PlayerOne.cards)

        //check to see if either player is out
        if(PlayerOne.constructs.castle == 0){
            console.log('Player two wins')
        } 
        else if(PlayerTwo.constructs.castle == 0){
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
                <div id="left-player-container" className="player-container">
                    {PlayerOne.resources}
                </div>
                <div id="middle-box">
                    <div id="field-container">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div id="deck">
                        {player_turn_one && PlayerOne.deck}
                        {player_turn_two && PlayerTwo.deck}
                    </div>
                </div>
                <div id="right-player-container" className="player-container">
                    {PlayerTwo.resources}
                </div>
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