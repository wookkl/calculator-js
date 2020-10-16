const calc_box = document.querySelector(".calc-box");
const FOUR_RULES = ["/", "*", "-", "+"];
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");

let current_input = "";
let current_value = 0;
let current_result = 0;
let current_rule = "=";

function Calculation(a, r, b) {
    if (r == "+") {
        return a + b;
    } else if (r == "-") {
        return a - b;
    } else if (r == "*") {
        return a * b;
    } else if (r == "/") {
        if (b !== 0) return a / b;
        else return "Can not divide by 0!";
    }
}
//=를 누르면 결과 값과 현재 값을 계산한다. 그리고 다 초기화
function handleEqual(e) {
    if (current_rule !== "=")
        result.innerText = Calculation(current_result, current_rule, current_value);

    current_result = 0;
    current_value = 0;
    current_input = "";
    current_rule = e.target.value;

}
//사칙연산 버튼을 누르면 그 연산을 저장 하되 만약에 그전 값이 = 이 아니면 계산해준다.
function handleRule(e) {
    if (current_rule !== "=") {
        current_result = Calculation(current_result, current_rule, current_value);
        result.innerText = current_result;
    } else {
        current_result = current_value;
    }

    current_value = 0;
    current_input = "";
    current_rule = e.target.value;
}

function handleInputNumber(e) {
    current_input += e.target.value;
    current_value = parseInt(current_input);
    result.innerText = current_input;
}

function handleReset(e) {
    current_input = "";
    current_value = 0;
    current_result = 0;
    current_rule = "=";
    result.innerText = current_value;
}

function paintButtonsRow(num) {
    const divRowBox = document.createElement("div");
    divRowBox.classList = "calc-box__row";
    const bottonNumber = (num - 1) * 3 + 1;
    const ruleButton = document.createElement("button");
    if (num === 0) {
        const buttonZero = document.createElement("button");
        buttonZero.innerText = num;
        buttonZero.value = num;
        buttonZero.onclick = handleInputNumber;
        const buttonEqual = document.createElement("button");
        buttonEqual.innerText = "=";
        buttonEqual.value = "=";
        buttonEqual.onclick = handleEqual;
        divRowBox.appendChild(buttonZero);
        divRowBox.appendChild(buttonEqual);

    }
    else {
        for (let i = 0; i < 3; i++) {
            const button = document.createElement("button");

            button.innerText = bottonNumber + i;
            button.value = bottonNumber + i;
            button.onclick = handleInputNumber;
            divRowBox.appendChild(button);

        }
    }
    ruleButton.innerText = FOUR_RULES[num];
    ruleButton.value = FOUR_RULES[num];
    ruleButton.onclick = handleRule;
    divRowBox.appendChild(ruleButton);
    return divRowBox;
}

function paintCalculator() {
    for (let i = 3; i >= 0; i--) {
        calc_box.appendChild(paintButtonsRow(i));
    }
}

function init() {
    paintCalculator();
    reset.onclick = handleReset;
}

init();