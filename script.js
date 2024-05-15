// Set Initial Count
let count = 0;

// Select Value and buttons (querySelectoAll)

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// You can call the parameters as you want. Item, btn or banana.
//event.currentTarget Will show what you are clicking. 
//event.currentTarget.classList will show all the clases of the element that has been clicked.
btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("reset")) {
            count = 0;
        } else {
            count++;
        }
        if (count > 0) {
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color = "red"
        } else {
            value.style.color = "black"
        }
        value.textContent = count;
    })
})