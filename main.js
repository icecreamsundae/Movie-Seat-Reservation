const divEl = document.querySelector('.movie-seat-reservation');
const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const selectedNum = document.querySelector('.selected-num');
const btnSelectedSeat = document.querySelector('.selected-seat');

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
    // 0인 상태에서 - 누르면 0 유지하기, 지금은 -1로 내려감
  }
  selectedNum.innerText = selectedResult;

  btnSelectedSeat.addEventListener('click', () => { // 인원을 선택해야지 event 실행
    divEl.classList.add('hidden');
  });

}

// function selectedSeatHandler() {

// }

numberOfPeopleHandler();
