// wait for the dom to finish loading 
// get the button elements and ad event listeners

document.addEventListener("DOMContentLoaded", function() {
            let buttons = document.getElementsByTagName("button");
            
            for (let button of buttons) {
                button.addEventListener("click", function() {
                    let gameType = this.getAttribute("data-type");    
                    if (this.getAttribute("data-type") === "submit") {
                        alert(`you clicked ${gameType}`);
                    } else {
                        alert(`you clicked ${gameType}`);
                    }
                })
            }
        })

        function runGame() {

        }

        function checkAnswer() {

        }

        function calculateCorrectAnswer() {

        }

        function incrementScore() {

        }

        function incrementWrongAnswer() {

        }

        function displayAdditionQuestion() {

        }

        function displaySubstractQuestion() {

        }

        function displayMultiplyQuestion() {}