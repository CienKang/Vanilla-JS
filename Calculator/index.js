function deleteLastOne() {
    var str = document.calc.txt.value;
    var required = "";
    for (var i = 0; i < str.length - 1; i++)
        required += str[i];
    document.calc.txt.value = required;
}

function Evaluation() {
    var ans = eval(document.calc.txt.value);
    document.calc.txt.value = ans;
}

document.addEventListener("keyup", key => {
    if (/^\d$/.test(key.key)) {
        document.calc.txt.value += key.key;
    }
    if ((/[+-/*]/).test(key.key)) {
        document.calc.txt.value += key.key;
    }

    if (key.key === "Enter")
        Evaluation();
});