let text = document.getElementById("inputText");
let btn = document.querySelector('#btn');
let resultBox = document.querySelector('#resultBox');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  while (resultBox.firstChild) {
    resultBox.removeChild(resultBox.firstChild);
  };
  let textMsg = text.value;
  let arr = textMsg.split(" ");
  let arrNum = [];
  if (textMsg === "") return;

  for (let i = 0; i < arr.length; i++) {
    arrNum.push(arr[i].length);
  };

  let maxWidth = 1;
  for (let i = 0; i <arrNum.length; i++){
    let width = 1;
    for (let j = i - 1; j >= 0; j--){
      if (arrNum[i] <= arrNum[j]){
        width++;
      }else break;
    }
    for (let k = i + 1; k < arrNum.length; k++){
      if (arrNum[i] <= arrNum[k]){
        width++;
      }else break;
    }
    let sqLen = width >= arrNum[i] ? arrNum[i]:width;
    maxWidth = maxWidth < sqLen ? sqLen:maxWidth;
  };

  for (let i = 0; i < maxWidth*maxWidth; i++){
    let div = document.createElement('div');
    div.className = 'block';
    div.style.width = 1/maxWidth*100 + '%';
    div.style.height = 1/maxWidth*100 + '%';
    resultBox.appendChild(div);
  };
});