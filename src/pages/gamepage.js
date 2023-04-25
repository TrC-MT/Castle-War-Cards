import '../styles/pageStyles/gamepageStyles.css'
import Card from "../components/cards/CardToRender";
import ResourceStats from "../components/stats/resources";


export default function GamePage(){

    function randnum(max){
        let num = Math.floor(Math.random() * (max -1));
        return num;
    }


    return(
        <>
            <div id="gamepage-container">
                <div id="left-player-container" class="player-container">
                    <ResourceStats render={{type: {helper: {name: 'Build', amount: 2}, currency: {name: 'Bricks', amount: 8}},  class: "build"}}></ResourceStats>
                    <ResourceStats render={{type: {helper: {name: 'Soldiers', amount: 3}, currency: {name: 'Weapons', amount: 6}}, class: "attack"}}></ResourceStats>
                    <ResourceStats render={{type: {helper: {name: 'Magicians', amount: 1}, currency: {name: 'Crystals', amount: 3}}, class: "magic"}}></ResourceStats>
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
                <ResourceStats render={{type: {helper: {name: 'Build', amount: 2}, currency: {name: 'Bricks', amount: 10}},  class: "build"}}></ResourceStats>
                <ResourceStats render={{type: {helper: {name: 'Soldiers', amount: 2}, currency: {name: 'Weapons', amount: 4}}, class: "attack"}}></ResourceStats>
                <ResourceStats render={{type: {helper: {name: 'Magicians', amount: 2}, currency: {name: 'Crystals', amount: 6}}, class: "magic"}}></ResourceStats>
                </div>
            </div>

        </>
    )
}