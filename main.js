// class for the logical calculator
class Calculator {
    constructor() {
        this.display = 0; // current display value
        this.store = 0; // non displayed value
        this.last = ""; // last action taken
        this.func = ""; // function being performed
        this.dec = false; // additional numbers are decimal
    }
    input_number(number) {
        if (this.dec == false) {
            if (this.last != "number") {
                this.display = number;
                this.last = "number";
            }
            else {
                this.display = (this.display * 10) + number;
            }
        }
        else {
            this.display = this.appendDecimal(this.display, number);
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
        if (this.last != "number")
            this.display = 0.;
        this.dec = true;
        this.last = "number"
    }
    equal() {
        if (this.last == "number") {
            if (this.func == "add")
                this.display = this.store + this.display;
            if (this.func == "subtract")
                this.display = this.store - this.display;
            if (this.func == "multiply")
                this.display = this.store * this.display;
            if (this.func == "divide")
                this.display = this.store / this.display;

            this.last = "equal"
            this.func = "";
        }
        this.dec = false;
    }
    // check if a function needs to be performed and do it
    check_compute() {
        if (this.last == "number" && this.function != "") {
            this.equal();
        }
    }
    // use string representation to append decimal digits
    appendDecimal(num, digits) {
        let stringNum = String(num);
        if (!stringNum.includes("."))
            stringNum += ".";
        return Number(stringNum + digits);
    }
}

// logical calculator
let calc = new Calculator();
// actual displayed calculator
let calc_div = document.querySelector(".calculator");
// max digits for the calculator display
const MAX_DIGITS = 12;
// hook up the buttons
for (let button of calc_div.querySelectorAll("button"))
    button.addEventListener("click", (e) => input(e.target.className, 
                                                  button.innerText));

// operate the logical calc based on button presses
// then update the displayed calc's display
function input(className, text) {
    if (className == "number")
        calc.input_number(Number(text));
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

    let calc_text = resize(String(calc.display), MAX_DIGITS);
    calc_div.querySelector(".calculator_display").innerText = calc_text;
}

// resize number text to given size
function resize(text, size) {
    if (text.length > size) {
        let num = Number(text).toPrecision(size - 4); // 4 is space for e+x
        return String(num);
    }

    return text;
}
