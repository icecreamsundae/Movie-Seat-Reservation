const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const selectedNum = document.querySelector('.selected-num');

const seat = document.querySelector('.seat');
const privateSeatBtn = document.createElement('button');
privateSeatBtn.classList = 'private';
seat.append(privateSeatBtn);

function numberOfPeopleHandler(type) {
  let selectedResult = parseInt(selectedNum.innerText);

  if(type === 'plus') {
    selectedResult ++;
    if(selectedResult === 21) {
      alert('최대 20명까지 예매가 가능합니다.');
    }
  } else if (type == 'minus') {
    selectedResult --;
    
  }
  selectedNum.innerText = selectedResult;
}


numberOfPeopleHandler();
