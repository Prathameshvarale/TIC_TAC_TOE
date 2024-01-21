//Getting All The boxexs
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let container = document.querySelector(".container");

let newBtn = document.querySelector("#newGame");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

// Intitalizing the starting turn
let turnX = true;

// Intitalizing the Winning Pattern array

const winnerPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

// if user clicks first then Show X click next then Show O;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.style.backgroundColor = "#ffffff";
    box.disabled = true;
    checkWinner();
  });
});

// Showing winner in the msg
const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations!  Winner is ${winner} 🎉`;
  msgContainer.classList.remove("hide");
  container.classList.add("hide");
};

// Winner Checking Function

const checkWinner = () => {
  for (let pattern of winnerPattern) {
    //Getting box value using winningPattern
    let PosVal1 = boxes[pattern[0]].innerText;
    let PosVal2 = boxes[pattern[1]].innerText;
    let PosVal3 = boxes[pattern[2]].innerText;

    if (PosVal1 != "" && PosVal2 != "" && PosVal3 != "") {
      if (PosVal1 === PosVal2 && PosVal2 === PosVal3) {
        showWinner(PosVal1);
      }
    }
  }
};

// Enable all boxes button
const enableAllBoxesButton = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "#bae8e8";
  }
};

//reset game
const resetGame = () => {
  turnX = true;
  enableAllBoxesButton();
};

// new game

const newGame = () => {
  msgContainer.classList.add("hide");
  container.classList.remove("hide");
  enableAllBoxesButton();
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", newGame);
