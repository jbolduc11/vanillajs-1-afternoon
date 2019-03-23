let turn = 'o'

let xMoves = [];
let oMoves = [];
const blocks = [
    {id:1, hasBeenClicked: false},
    {id:2, hasBeenClicked: false},
    {id:3, hasBeenClicked: false},
    {id:4, hasBeenClicked: false},
    {id:5, hasBeenClicked: false},
    {id:6, hasBeenClicked: false},
    {id:7, hasBeenClicked: false},
    {id:8, hasBeenClicked: false},
    {id:9, hasBeenClicked: false},
]


const hasBeenClicked = (num) => {
    const answer = blocks.reduce((bool, e)=>{
        if(e.id === Number(num) && !e.hasBeenClicked){
             e.hasBeenClicked = true;
             bool = false;
        }
        return bool;
    }, true)
    return answer
}

const handleClick = (num) => {
    if(!hasBeenClicked(num)){
        const element = document.getElementById(`block-${num}`)
        turn = turn === "x" ? "o" : "x";
        if(turn === "x"){
            xMoves.push(Number(num))
        }else{
            oMoves.push(Number(num))
        }
        element.innerHTML = turn;
    
        if(isWinner()){
            alert(`${turn} wins`)
    
            setTimeout(reset,5000)
        }else if(isCat()){
            alert(`It's a tie!`)
    
            setTimeout(reset,5000)
        }

    }
}

const winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

const reset = () => {
    blocks.forEach((e)=> {
        const element = document.getElementById(`block-${e.id}`)
        element.innerHTML = "";
        e.hasBeenClicked = false;
    })
    xMoves = []
    oMoves = []

}

const isWinner = () => {
    
    return winningCombos.reduce((bool, a)=>{
        // console.log(a)
        const movesX = xMoves.filter((e)=>{
            return a.includes(e)
        })

        const movesO = oMoves.filter((e)=>{
            return a.includes(e)
        })
        // console.log(moves)
        if(movesO.length > 2){
            bool = true;
        }else if(movesX.length > 2){
            bool = true;
        }
        return bool

    }, false)
}

const isCat = () => {
    return blocks.reduce((bool, e)=> {
        if(!e.hasBeenClicked){
            bool = false;
        }
        return bool;
    }, true)
}