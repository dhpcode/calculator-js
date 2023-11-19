const elNum1 = document.querySelector("#num1");
const elNum2 = document.querySelector("#num2");
const elResult = document.querySelector("#result");

document.getElementById("add").addEventListener("click", function () {
  elResult.value = parseInt(num1.value) + parseInt(num2.value);
});
document.getElementById("sub").addEventListener("click", function () {
  elResult.value = parseInt(num1.value) - parseInt(num2.value);
});
document.getElementById("mul").addEventListener("click", function () {
  elResult.value = parseInt(num1.value) * parseInt(num2.value);
});
document.getElementById("div").addEventListener("click", function () {
  elResult.value = parseInt(num1.value) / parseInt(num2.value);
});
