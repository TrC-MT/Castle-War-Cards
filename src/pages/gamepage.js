import '../styles/pageStyles/gamepageStyles.css'
import Card from "../components/cards/CardToRender";
import ResourceStats from "../components/stats/resources";


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
            constructs: {
                castle: 40,
                fence: 20,
            }
        }
    }

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
                        <Card nums={{typeNum: randnum(4), Num: randnum(10)}}/>
                        <Card nums={{typeNum: randnum(4), Num: randnum(10)}}/>
                        <Card nums={{typeNum: randnum(4), Num: randnum(10)}}/>
                        <Card nums={{typeNum: randnum(4), Num: randnum(10)}}/>
                        <Card nums={{typeNum: randnum(4), Num: randnum(10)}}/>
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

    //------------------------------
    let turn_count = 0;
    let player_turn = 'one';
    function turn(){
        turn_count += 1;
        if(turn_count %2 == 0){
            player_turn = 'two';
        }
        else{
            player_turn = 'one';
        }

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
        // show correct player cards
        
        // let player pick a card

        //play the card, get a new one

        //update players resources //make sure none of them are below 1

        // if neither player is out, then recall turn()
    }

    

    //---------------------------
}