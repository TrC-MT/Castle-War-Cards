import cards from './cards';
import '../../styles/ComponentStyles/cardStyles.css';

export default function Card({render}){
    let clickable = render.clickable;
    let typeNum = render.nums.typeNum;
    let num = render.nums.Num;
    var type = '';
    var currency = '';
    let playCard = render.pc;
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
        console.log('typeNum is out of bounds');
    };

    let card = cards[typeNum][num];
    let whichCard = {effect: card.effect, nums: render.nums};

    return(
        <>
            <div className={`card-container ${type}`} onClick={(e) => tryPlayCard(whichCard)}>
                <h3 className="card-heading">{card.name}</h3>
                <span className="card-cost">Cost: {card.cost} {currency}</span>
                <hr/>
                <p className="card-effect">{card.description}</p>
            </div>
        </>
    );

    function tryPlayCard(whichCard){
        if(clickable == true){
            console.log('Playing a card.', " whichCard: ", whichCard);
            playCard(whichCard)
        }
        else{
            console.log('Not clickable yet.');
        };
    };
};