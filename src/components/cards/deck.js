import Card from "./CardToRender"

export default function Deck({render}){
    let oneCards = render.cards.oneCards;
    let twoCards = render.cards.twoCards;
    var clickable = render.clickable

    if(render.turn == 'one'){
        console.log('Deck rendering player one cards')
        return(
            <>
                <Card render={{clickable: clickable, pc: render.pc, nums: {typeNum: oneCards[0][0], Num: oneCards[0][1]}}}/>
                <Card render={{clickable: clickable, pc: render.pc, nums: {typeNum: oneCards[1][0], Num: oneCards[1][1]}}}/>
                <Card render={{clickable: clickable, pc: render.pc, nums: {typeNum: oneCards[2][0], Num: oneCards[2][1]}}}/>
                <Card render={{clickable: clickable, pc: render.pc, nums: {typeNum: oneCards[3][0], Num: oneCards[3][1]}}}/>
                <Card render={{clickable: clickable, pc: render.pc, nums: {typeNum: oneCards[4][0], Num: oneCards[4][1]}}}/>
            </>
        )
    }
    else if(render.turn == 'two'){
        console.log('Deck rendering player two cards')
        return(
            <>
                <Card render={{clickable: clickable, pc: render.pc, nums: {typeNum: twoCards[0][0], Num: twoCards[0][1]}}}/>
                <Card render={{clickable: clickable, pc: render.pc, nums: {typeNum: twoCards[1][0], Num: twoCards[1][1]}}}/>
                <Card render={{clickable: clickable, pc: render.pc, nums: {typeNum: twoCards[2][0], Num: twoCards[2][1]}}}/>
                <Card render={{clickable: clickable, pc: render.pc, nums: {typeNum: twoCards[3][0], Num: twoCards[3][1]}}}/>
                <Card render={{clickable: clickable, pc: render.pc, nums: {typeNum: twoCards[4][0], Num: twoCards[4][1]}}}/>
            </>
        )
    }
}