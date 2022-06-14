const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const selectedNum = document.querySelector('.selected-num');

const seat = document.querySelector('.seat');
const privateSeatBtn = document.createElement('button');
privateSeatBtn.classList = 'private';
seat.append(privateSeatBtn);

function numberOfPeopleHandler(type) {
  let selectedResult =  selectedNum.value;
  console.log(selectedResult);
  if(type == 'plus') {
    console.log('플러스')
    selectedNum.innerText = selectedNum +1;
  } else if (type == 'minus') {
    console.log('마이너스')
  }
}


numberOfPeopleHandler();
