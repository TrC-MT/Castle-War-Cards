import Card from "../components/Card";


export default function GamePage(){

    function randnum(max){
        let num = Math.floor(Math.random() * (max -1));
        return num;
    }


    return(
        <>
            <Card nums={{typeNum: randnum(4), Num: randnum(10)}}/>
            <Card nums={{typeNum: randnum(4), Num: randnum(10)}}/>
            <Card nums={{typeNum: randnum(4), Num: randnum(10)}}/>
            <Card nums={{typeNum: randnum(4), Num: randnum(10)}}/>
            <Card nums={{typeNum: randnum(4), Num: randnum(10)}}/>

        </>
    )
}