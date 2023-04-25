import cards from '../cards/cards';
import '../styles/ComponentStyles/cardStyles.css';

export default function Card({nums}){
    let typeNum = nums.typeNum;
    let num = nums.Num;
    var type = '';
    var currency = '';
    if(typeNum == 0){
        type = 'build';
        currency = 'bricks';
    }
    else if(typeNum == 1){
        type = 'attack';
        currency = 'weapons';
    }
    else if(typeNum == 2){
        type = 'magic';
        currency = 'crystals';
    }
    else{
        console.log('typeNum is out of bounds')
    }

    let card = cards[typeNum][num]

    return(
        <>
            <div class={`card-container ${type}`}>
                <h3 class="card-heading">{card.name}</h3>
                <span class="card-cost">Cost: {card.cost} {currency}</span>
                <p class="card-effect">{card.effect}</p>
            </div>
        </>
    )
}