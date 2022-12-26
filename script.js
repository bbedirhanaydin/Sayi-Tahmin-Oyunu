"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", result);

function result() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  console.log(secretNumber, typeof secretNumber);

  if (!guess) {
    displayMessage("Bir sayı giriniz.");
  } else if (guess === secretNumber) {
    displayMessage("Doğru Tahmin!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(
        ".label-highscore"
      ).textContent = `En yüksek Skor: ${highScore}`;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ":Çok yüksek" : "Çok düşük");
      document.querySelector(".label-score").textContent = score;
    }
  } else {
    displayMessage("Oyunu Kaybettiniz");
    document.querySelector(".label-score").textContent = 0;
  }
}

document.querySelector(".again").addEventListener("click", againStart);

function againStart() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Tahmin Ediliyor");
  document.querySelector(".label-score").textContent = `Skor: ${score}`;
  document.querySelector(".number").textContent = "?";
  document.querySelector(
    ".label-highscore"
  ).textContent = `En Yüksek Skor: ${score}`;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}
