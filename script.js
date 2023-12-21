let isgameover = false;
let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      let win = boxtext[e[0]].innerText;
      document.querySelector(
        ".gameBox"
      ).innerHTML = `<div class="winner">${win} is Win</div>`;
      isgameover = true;
    }
  });
};

let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxtext.innerHTML === "") {
      boxtext.innerHTML = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("turn-text")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});
// -----------------------------------------------------
const reset = document.querySelector(".btn");
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxText");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
});
