/*calculator-basic*/
function AddFunction() {
    let mot = parseInt(document.getElementById("first").value);
    let hai = parseInt(document.getElementById("second").value);
    document.getElementById("result").innerHTML = "Result Addition: "+ (mot + hai);
}
function SubFunction() {
    let mot = parseInt(document.getElementById("first").value);
    let hai = parseInt(document.getElementById("second").value);
    document.getElementById("result").innerHTML = "Result Subtraction: "+ (mot - hai);
}
function MulFunction() {
    let mot = parseInt(document.getElementById("first").value);
    let hai = parseInt(document.getElementById("second").value);
    document.getElementById("result").innerHTML = "Result Addition: "+ (mot * hai);
}
function DivFunction() {
    let mot = parseInt(document.getElementById("first").value);
    let hai = parseInt(document.getElementById("second").value);
    document.getElementById("result").innerHTML = "Result Addition: "+ (mot / hai);
}
/*calculator-upgrade1*/
function tinh(toan) {
    let mot = parseInt(document.getElementById("first").value);
    let hai = parseInt(document.getElementById("second").value);
    switch(toan) {
        case '+':
            document.getElementById("result").innerHTML = "Result Addition: "+ (mot + hai);
            break;
        case '-':
            document.getElementById("result").innerHTML = "Result Subtraction: "+ (mot - hai);
            break;
        case 'x':
            document.getElementById("result").innerHTML = "Result Addition: "+ (mot * hai);
            break;
        case '/':
            document.getElementById("result").innerHTML = "Result Addition: "+ (mot / hai);
            break;
    }
}