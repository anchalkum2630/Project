
        let randomNum = parseInt(Math.random() * 100 + 1);
        const uservalue = document.querySelector('#userInput');
        const submit = document.querySelector('#submit');
        let prevGuess = [];
        let remainingGuess = 1;
        const displaymessage = document.querySelector('#display');
        const game = document.createElement('p')
        const guessvalue = document.querySelector("#GuessInput")
        const GuessIncrease = document.querySelector('#guessupdate')
        const add = document.querySelector(".container")
        let playgame = true;
        let guess;
        if (playgame) {
            submit.addEventListener('click', function (e) {
                e.preventDefault();
                const guess = parseInt(uservalue.value);
                validateNum(guess)
            })
        }
        //number is valid or not
        function validateNum(guess) {
            if (isNaN(guess)) {
                displaymessage.style.color='purple';
                displaymess("Enter valid number (1-100)")
            }
            else if (guess > 100) {
                displaymessage.style.color='purple';
                displaymess("Enter a valid number less than 101")
            }
            else if (guess < 1) {
                displaymessage.style.color='purple';
                displaymess("Enter a valid number more than 0")
            }
            else {
                prevGuess.push(guess)
                if (remainingGuess === 11) {
                    displaynum(guess)
                    displaymess(`Game Over! random number is ${randomNum}`)
                    endgame()
                }
                else {
                    checknum(guess)
                }
            }
        }
        //number is equal to the number or not
        function checknum(guess) {
            if (guess < randomNum) {
                displaynum(guess);
                displaymessage.style.color='orange';
                displaymess("Number is too low")
            }
            else if (guess > randomNum) {
                displaynum(guess);
                displaymessage.style.color='red';
                displaymess("Number is too high")
            }
            else {
                displaynum(guess);
                displaymessage.style.color='green';
                displaymess("Great you win !")
                endgame()
            }
        }
        function displaynum(guess) {
            uservalue.value = "";
            remainingGuess++;
            guessvalue.value += `${guess} `;
            GuessIncrease.innerHTML = `${11 - remainingGuess}`;
        }
        //display message in textbox
        function displaymess(message) {
            displaymessage.innerHTML = message;
        }
        //end the game 
        function endgame() {
            uservalue.value = "";
            uservalue.setAttribute('disabled', '')
            game.classList.add('button')
            game.innerHTML = `<button id="newgame" style="height:35px;width:150px;"> Start a game </button>`;
            console.log(game)
            add.appendChild(game);
            playgame = false;
            newgame()
        }
        //start new game
        function newgame() {
            const newGameButton = document.querySelector("#newgame")
            newGameButton.addEventListener('click', function (e) {
                randomNum = parseInt(Math.random() * 100 + 1);
                prevGuess = [];
                remainingGuess = 1;
                playgame = true;
                guessvalue.value = "";
                displaymessage.innerHTML = ""
                GuessIncrease.innerHTML = `${11 - remainingGuess}`;
                uservalue.removeAttribute('disabled');
                add.removeChild(game);

            })
        }