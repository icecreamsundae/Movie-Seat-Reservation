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
    
    if(selectedResult > 20) {
      alert('최대 20명까지 예매가 가능합니다.');
      selectedResult = 20;
    }
  } else if (type === 'minus') {
    selectedResult --;

    // 0인 상태에서 - 누르면 0 유지하기
    if(type === 'minus' && selectedResult) {  // 수정할 것 : 6일때 -누르면 바로 0으로 바뀜
      selectedResult = 0;
    }

  }
  selectedNum.innerText = selectedResult;

  btnSelectedSeat.addEventListener('click', () => { // 인원을 선택해야지 event 실행
    divEl.classList.add('hidden');
    const h4El = seat.querySelector('h4');
    h4El.innerText = `${selectedResult}명의 자리를 선택하세요 `;
  });

}

// function selectedSeatHandler() {

// }

numberOfPeopleHandler();
