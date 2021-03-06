var decimal = document.getElementById("decimal");
var clear = document.getElementById("clear");
var display = document.getElementById("calculator__display");

var refreshArr = "0";
var displayValue;
var pendingValue;
var evalStringArray = [];

var btnNumber = document.getElementsByClassName("btn-number");
var btnOperators = document.getElementsByClassName("btn-operator");

var updateDisplayValue = function (e) {
  var btnText = e.target.innerText;
  if (refreshArr === "0") {
    refreshArr = "";
  }
  refreshArr += btnText;
  displayValue = refreshArr;
  display.innerText = displayValue;
};

var performOperation = function (e) {
  var operator = e.target.innerText;

  switch (operator) {
    case "+":
      pendingValue = displayValue;
      refreshArr = "0";
      display.innerText = displayValue;
      evalStringArray.push(pendingValue);
      evalStringArray.push("+");
      console.log(displayValue);
      console.log(evalStringArray);
      break;
    case "-":
      pendingValue = displayValue;
      refreshArr = "0";
      display.innerText = displayValue;
      evalStringArray.push(pendingValue);
      evalStringArray.push("-");
      break;
    case "*":
      pendingValue = displayValue;
      refreshArr = "0";
      display.innerText = displayValue;
      evalStringArray.push(pendingValue);
      evalStringArray.push("*");
      break;
    case "/":
      pendingValue = displayValue;
      refreshArr = "0";
      display.innerText = displayValue;
      evalStringArray.push(pendingValue);
      evalStringArray.push("/");
      break;
    case "=":
      evalStringArray.push(refreshArr);
      console.log(refreshArr);
      console.log(evalStringArray);
      refreshArr = displayValue;
      var evaluation = eval(evalStringArray.join(""));
      displayValue = evaluation + "";
      display.innerText = displayValue;
      evalStringArray = [];
      break;
    default:
      break;
  }
};

for (let i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener("click", updateDisplayValue);
}
for (let i = 0; i < btnOperators.length; i++) {
  btnOperators[i].addEventListener("click", performOperation);
}

clear.onclick = function () {
  refreshArr = "0";
  display.innerHTML = refreshArr;
};

decimal.onclick = function () {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  display.innerText = displayValue;
};
