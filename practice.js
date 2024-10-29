let boxes = document.querySelectorAll('.box');
let turnO = true; //playerX,PlayerO
let msg=document.querySelector('#msg');
let newGameBtn=document.querySelector('#newGame_btn');
let msgContainer=document.querySelector('.msg-container');
let resetBtn = document.querySelector('#reset_btn');
const winningPattern =
    [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;

        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is,${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
}

const checkWinner = () => {
    for (let pattern of winningPattern) {

       
            let pos1Val= boxes[pattern[0]].innerText;
            let pos2Val= boxes[pattern[1]].innerText;
            let pos3Val= boxes[pattern[2]].innerText;
            if(pos1Val != "" && pos2Val!="" && pos3Val!=""){
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    console.log("Winner",pos1Val);

                    showWinner(pos1Val);
                }
            }


    }
};

const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add('hide');
};
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);
