let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = 'X';
let isgameover = false;
music.play();


const changeTurn = () => {
  return turn === "X"?"0" : "X"
; 
}


const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtest"); 
  let wins = [
    [0, 1, 2, "horizontal", "top: 15%; left: 0"],
    [3, 4, 5, "horizontal", "top: 48%; left: 0"],
    [6, 7, 8, "horizontal", "top: 82%; left: 0"],
    [0, 3, 6, "vertical", "top: 0; left: 15%"],
    [1, 4, 7, "vertical", "top: 0; left: 50%"],
    [2, 5, 8, "vertical", "top: 0; left: 83%"],
    [0, 4, 8, "diagonal-left", "top: 50%; left: 0"],
    [2, 4, 6, "diagonal-right", "top: 50%; right: 0"],
];
  wins.forEach(e => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
        (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&
        (boxtext[e[0]].innerText !== "")) {
      document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won"; // Added space before "won"
      isgameover = true;
      document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px";
   
        // Show the winning line
        const winningLine = document.getElementById("winningLine");
        winningLine.className = `winning-line ${e[3]}`;
        winningLine.style.cssText = e[4];
        gameover.play();
 
      
    }
  });
};



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector(".boxtest");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") { 
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if(!isgameover){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
      
    }
  });
});

// add onclick listner to reset btn
reset.addEventListener("click",()=>{
  let boxtext = document.querySelectorAll(".boxtest");
  Array.from(boxtext).forEach(element =>{
  console.log(element);
  element.innerText = ""
 })
 turn = "X";
 isgameover = false;
 document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
 document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = 0;
 const winningLine = document.getElementById("winningLine");
 winningLine.style= "width:0";
})


