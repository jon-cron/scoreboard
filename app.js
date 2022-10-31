let score1 = 0;
let score2 = 0;

function add1() {
  score1 += 1;
  drawScore1();
}
function add3() {
  score1 += 3;
  drawScore1();
}
function add21() {
  score2 += 1;
  drawScore2();
}
function add23() {
  score2 += 3;
  drawScore2();
}
function reset() {
  score1 = 0;
  score2 = 0;
  drawScore1();
  drawScore2();
}
function drawScore1() {
  let score1Elm = document.getElementById("Team1Score");
  console.log(score1);
  score1Elm.innerText = score1;
}
function drawScore2() {
  let score2Elm = document.getElementById("Team2Score");
  console.log(score2);
  score2Elm.innerText = score2;
}
