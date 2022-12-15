let input = document.getElementsByClassName('inputNum')[0];
let result = document.querySelector('#result');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  let num = Number(input.value);
  if (!(num >= 1 && num <= 15)){
    result.innerHTML = "";
    return;
  }
  num = Math.round(num);
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  result.innerHTML = res;
});



