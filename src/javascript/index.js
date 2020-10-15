const calc_box = document.querySelector(".calc-box");
const FOUR_RULES = ["/", "*", "-", "+"];
let current_result = 0;


function paintResultRow() {
    const divRowBox = document.createElement("div");
    const divResultBox = document.createElement("div");
    const divResetButton = document.createElement("button");
    divRowBox.classList = "calc-box__row";
    divResultBox.innerText = current_result;
    divResetButton.innerText = "C";
    divRowBox.appendChild(divResultBox);
    divRowBox.appendChild(divResetButton);

    return divRowBox;
}

function paintButtonsRow(num) {
    const divRowBox = document.createElement("div");
    const bottonNumber = (num - 1) * 3 + 1;
    const ruleButton = document.createElement("button");
    if (num === 0) {
        const buttonZero = document.createElement("button");
        buttonZero.innerText = 0;
        const buttonEqual = document.createElement("button");
        buttonEqual.innerText = "=";
        divRowBox.appendChild(buttonZero);
        divRowBox.appendChild(buttonEqual);

    }
    else {
        for (let i = 0; i < 3; i++) {
            const button = document.createElement("button");
            button.innerText = bottonNumber + i;
            divRowBox.appendChild(button);
        }
    }
    ruleButton.innerText = FOUR_RULES[num];
    divRowBox.appendChild(ruleButton);
    return divRowBox;
}

function paintCalculator() {
    calc_box.appendChild(paintResultRow());
    for (let i = 3; i >= 0; i--) {
        calc_box.appendChild(paintButtonsRow(i));
    }
}

function init() {
    paintCalculator();
}

init();