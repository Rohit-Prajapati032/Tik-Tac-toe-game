let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let msg = document.querySelector(".msg");
let msgContiner = document.querySelector(".msg-continer");
let turn0 = true;


const winPattern = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
];
const resetGame = () => {
turn0 = true;
enableBoxes();
msgContiner.classList.add("hide");
};

boxes.forEach((box) => {
        box.addEventListener("click",() => {
       
       if(turn0){
        box.innerHTML = "x";
        turn0 = false;
       }
       else{
        box.innerHTML = "O";
        turn0 = true;
       }
       box.disabled = true;
       checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations winner is ${winner}`;
    msgContiner.classList.remove("hide");
    disableBoxes();
}
const showDrow = (winner) => {
    msg.innerHTML = "game is Drow";
    msgContiner.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPattern) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerHTML,
        //     boxes[pattern[1]].innerHTML,
        //     boxes[pattern[2]].innerHTML);
            let pos1 = boxes[pattern[0]].innerHTML ;
            let pos2 = boxes[pattern[1]].innerHTML;
            let pos3 = boxes[pattern[2]].innerHTML;
            if(pos1 !== "" && pos2 !== "" && pos3 !==""){
                if(pos1 ===pos2 && pos2 === pos3){
                   
                    showWinner(pos1);
                    
                
                }
            }
    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
