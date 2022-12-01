let dIn = document.getElementsByClassName("calc-d-in")[0].children[0];
let val = [];
let result = 0;
let pointer = -1;
let starter = 0;

function clearDisplay() {
    let clear = "0";
    document.getElementsByClassName("calc-d-in")[0].children[0].innerHTML = clear;
    document.getElementsByClassName("calc-d-out")[0].innerHTML = 0;

    val = [];
}

function getDigits(digit) {
    if (dIn.innerHTML == "in" || dIn.innerHTML == "0") {
        dIn.innerHTML = "";
    }
    pointer++;
    dIn.innerHTML += digit.innerHTML;

}

function addValue(e) {
    // values.push(Number())
    pointer++;
    dIn.innerHTML += e.innerHTML;
    console.log(pointer);
    val.push(dIn.innerHTML.slice(starter, pointer--));
    starter = ++pointer;
    val.push(dIn.innerHTML[starter]);
    console.log(val);
}


function displayResult() {
    val.push(dIn.innerHTML.slice(++starter));
    for (let i = 0; i < val.length; i++) {
        if (val[i] == "+") {
            result ;
        } else if (val[i] == "X") {

        } else if (val[i] == "/") {

        } else if (val[i] == "-") {
            result += val[i];
        } else {
            result += Number(val[i]);
        }
    }


    let finalResult = document.getElementsByClassName("calc-d-out")[0].children[0];
    finalResult.innerHTML = result;
}