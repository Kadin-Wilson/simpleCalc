// class for the logical calculator
class Calculator {
    constructor() {
        this.display = "0"; // current display value
        this.store = ""; // non displayed value
        this.last = ""; // last action taken
        this.func = ""; // function being performed
    }
    input_number(number) {
        if (this.last != "number") {
            this.display = number;
            this.last = "number";
        }
        else {
            this.display += number;
        }
    }
    add() {
        this.check_compute();
        if (this.last == "number" || "equal") {
            this.store = this.display;
            this.last = "add";
            this.func = "add";
        }
    }
    subtract() {
        this.check_compute();
        if (this.last == "number" || "equal") {
            this.store = this.display;
            this.last = "subtract";
            this.func = "subtract";
        }
    }
    multiply() {
        this.check_compute();
        if (this.last == "number" || "equal") {
            this.store = this.display;
            this.last = "multiply";
            this.func = "multiply";
        }
    }
    divide() {
        this.check_compute();
        if (this.last == "number" || "equal") {
            this.store = this.display;
            this.last = "divide";
            this.func = "divide";
        }
    }
    dot() {
        if (this.last == "number") 
            this.display += ".";
        else
            this.display = "0.";

        this.last = "number"
    }
    equal() {
        if (this.last == "number") {
            if (this.func == "add")
                this.display = String(Number(this.store) + Number(this.display));
            if (this.func == "subtract")
                this.display = String(Number(this.store) - Number(this.display));
            if (this.func == "multiply")
                this.display = String(Number(this.store) * Number(this.display));
            if (this.func == "divide")
                this.display = String(Number(this.store) / Number(this.display));

            this.last = "equal"
            this.func = "";
        }
    }
    // check if a function needs to be performed and do it
    check_compute() {
        if (this.last == "number" && this.function != "") {
            this.equal();
        }
    }
}

// logical calculator
let calc = new Calculator();
// actual displayed calculator
let calc_div = document.querySelector(".calculator");
// hook up the buttons
for (let button of calc_div.querySelectorAll("button"))
    button.addEventListener("click", (e) => input(e.target.className, 
                                                  button.innerText));

// operate the logical calc based on button presses
// then update the displayed calc's display
function input(className, text) {
    if (className == "number")
        calc.input_number(text);
    if (className == "add")
        calc.add();
    if (className == "subtract")
        calc.subtract();
    if (className == "multiply")
        calc.multiply();
    if (className == "divide")
        calc.divide();
    if (className == "dot")
        calc.dot();
    if (className == "equal")
        calc.equal();

    calc_div.querySelector(".calculator_display").innerText = calc.display;
}

