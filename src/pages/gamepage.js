import '../styles/pageStyles/gamepageStyles.css'
import ResourceStats from "../components/stats/resources";
import Deck from '../components/cards/deck';
import {useState} from 'react';


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
    let player_turn = 'one';
    let clickable = false;
    function turnStart(){
        console.log('before replace player one cards: ', players.one.cards)
        //determine which player is going
        turn_count += 1;
        if(turn_count %2 == 0){
            player_turn = 'two';
        }
        else{
            player_turn = 'one';
        }

        console.log('\n \n turn_count: ', turn_count, " player_turn: ", player_turn)

        // show correct player cards
            //the Deck component should automatically do that

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
        if(player_turn == 'one'){
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
        else if(player_turn == 'two'){
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
    turnStart()


    return(
        <>
            <div id="gamepage-container">
                <div id="left-player-container" className="player-container">
                    <ResourceStats render={{type: {helper: {name: 'Builders', amount: players.one.resources.build.helpers}, currency: {name: 'Bricks', amount: players.one.resources.build.currency}},  class: "build"}}></ResourceStats>
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
                <div id="right-player-container" className="player-container">
                <ResourceStats render={{type: {helper: {name: 'Builders', amount: players.two.resources.build.helpers}, currency: {name: 'Bricks', amount: players.two.resources.build.currency}},  class: "build"}}></ResourceStats>
                <ResourceStats render={{type: {helper: {name: 'Soldiers', amount: players.two.resources.attack.helpers}, currency: {name: 'Weapons', amount: players.two.resources.attack.currency}}, class: "attack"}}></ResourceStats>
                <ResourceStats render={{type: {helper: {name: 'Magicians', amount: players.two.resources.magic.helpers}, currency: {name: 'Crystals', amount: players.two.resources.magic.currency}}, class: "magic"}}></ResourceStats>
                </div>
            </div>

        </>
    )

    
}