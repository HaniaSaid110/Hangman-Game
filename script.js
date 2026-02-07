// alphabets
const letters = `abcdefghijklmnopqrstuvwxyz`;

// array of letters
const lettersArray = Array.from(letters);
// console.log(lettersArray);

// select elements
const lettersContainer = document.querySelector(`.letters-container`);
const category = document.querySelector(`.category span span`);
const attempts = document.querySelector(`.attempts span span`);
const letterDashesContainer = document.querySelector(
  `.letter-dashes-container`,
);

// select the hangman
const hangman = document.querySelector(`.hangman-structure`);

// create a span and a node for each letter in the array
for (const item of lettersArray) {
  // create spans
  let span = document.createElement(`span`);
  // create text nodes
  let letter = document.createTextNode(item);
  //   append letter to span
  span.appendChild(letter);
  //   add class to span
  span.className = `letter-box`;
  //   append spans to letters container
  lettersContainer.appendChild(span);
}

//////////////////////////////////////////////////////////////////
// create an object of categories
const categories = {
  animals: ["cat", "dog", "fish", "lion", "tiger", "elephant", "monkey"],
  cities: ["cairo", "alexandria", "bucharest", "madrid", "tokyo", "seoul"],
  plants: ["rose", "lily", "orchid", "cactus", "fern", "ivy", "bamboo"],
  movies: [
    "avatar",
    "titanic",
    "star wars",
    "the matrix",
    "the lord of the rings",
    "the dark knight",
    "the joker",
    "the lion king",
  ],
};

// get an array of category keys
const categoryKeys = Object.keys(categories);
// console.log(categoryKeys);

// get a random index of a category
let randomCategoryIndex = Math.floor(Math.random() * categoryKeys.length);
// console.log(randomCategoryIndex);

// get random category name from the generated index
let randomCategoryName = categoryKeys[randomCategoryIndex];
console.log(randomCategoryName);

// get gategory array of values
let randomCategoryArray = categories[randomCategoryName];
// console.log(randomCategoryArray);

// get a random word from the random array
let randomCategoryWordIndex = Math.floor(
  Math.random() * randomCategoryArray.length,
);
// console.log(randomCategoryWordIndex);

// get the word of the random index
let randomCategoryWordName = randomCategoryArray[randomCategoryWordIndex];
console.log(randomCategoryWordName);
/////////////////////////////////////////////////////////////////

// add category name to the document
category.insertAdjacentHTML(`beforeend`, `${randomCategoryName}`);

// create an array of the letters & spaces of that word
let chosenWordArray = Array.from(randomCategoryWordName);
console.log(chosenWordArray);

// loop over the word to create a span for each letter/space
chosenWordArray.forEach(function (item) {
  let span = document.createElement(`span`);

  if (item === ` `) {
    // add a specific class to it
    span.className = `space`;
  }
  // append spans
  letterDashesContainer.appendChild(span);
  // console.log(letterDashesContainer);
});

// select all letter spans
let letterSpans = letterDashesContainer.querySelectorAll(`span`);
console.log(letterSpans);

////////////////////////////////////////////////////////////

// set count of wrong attempts
let wrongAttemptsCount = 0;
let totalAttemptsLeft = 6;
attempts.innerHTML = totalAttemptsLeft;

// hide the structure initially
// for (let index = 4; index < hangman.children.length; index++) {
//   hangman.children[index].classList.add(`hide-structure`);
// }

// delegate a click event to every letter box inside the container
lettersContainer.addEventListener(`click`, function (event) {
  // set a boolean to invert in the loop,
  // which will be used to calculate the total number of wrong guesses
  let isCorrectLetter = false;

  if (event.target.className === `letter-box`) {
    event.target.className = `letter-box-clicked`;

    // get clicked letter
    let clickedLetter = event.target.innerHTML.toLowerCase();

    // loop over chosen word array, then compare each letter with the clicked one
    chosenWordArray.forEach(function (letter, letterIndex) {
      if (clickedLetter === letter) {
        // if the letters match, check whether the indices match as well
        letterSpans.forEach(function (span, spanIndex) {
          if (letterIndex === spanIndex) {
            // set a boolean to invert in the loop,
            // which will be used to calculate the total number of wrong guesses
            isCorrectLetter = true;
            span.innerHTML = letter;
          }
        });
      }
    });

    if (isCorrectLetter !== true) {
      // decrease attempts left by 1, increase wrong attempts count by 1
      if (totalAttemptsLeft >= 1) {
        wrongAttemptsCount++;
        totalAttemptsLeft--;
        attempts.innerHTML = totalAttemptsLeft;
      }

      console.log(wrongAttemptsCount);

      // check if we still have parts to reveal
      if (wrongAttemptsCount + 3 < hangman.children.length) {
        hangman.children[wrongAttemptsCount + 3].classList.remove(
          `hide-structure`,
        );
      }
    }

    checkGameStatus();
  }
});

// modal elements
const modal = document.querySelector("#game-modal");
const modalTitle = document.querySelector("#modal-title");
const modalMessage = document.querySelector("#modal-message");
const playAgainBtn = document.querySelector("#play-again-btn");

function checkGameStatus() {
  // check for Win
  // check if all letters in the word array are revealed
  // or check if there are no empty spans (excluding spaces)
  let won = true;
  letterSpans.forEach((span) => {
    // if not a space and innerHTML is empty, we haven't won
    if (!span.classList.contains("space") && span.innerHTML === "") {
      won = false;
    }
  });

  if (won) {
    endGame(true);
    return;
  }

  // check for Loss
  if (totalAttemptsLeft === 0) {
    endGame(false);
  }
}

function endGame(isWin) {
  if (isWin) {
    modalTitle.innerText = "Congratulations!";
    modalMessage.innerHTML = `You guessed the word: <strong>${randomCategoryWordName}</strong>`;
    modalTitle.style.color = "var(--success-color)";
  } else {
    modalTitle.innerText = "Game Over";
    modalMessage.innerHTML = `The correct word was: <strong>${randomCategoryWordName}</strong>`;
    modalTitle.style.color = "var(--accent-color)";
  }
  modal.classList.add("show");
}

playAgainBtn.addEventListener("click", function () {
  location.reload();
});

/////////////////////////////////////////////////////////
