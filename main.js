const divEl = document.querySelector('.movie-seat-reservation');
const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const selectedNum = document.querySelector('.selected-num');
const btnSelectedSeat = document.querySelector('.selected-seat');

const seat = document.querySelector('#seat');
const screen = document.querySelector('#screen');

let selectedResult = parseInt(selectedNum.innerText);
let arrResult = [];

function numberOfPeopleHandler(type) {
  if(type === 'plus') {
    selectedResult ++;
    
    if(selectedResult > 20) {
      alert('최대 20명까지 예매가 가능합니다.');
      selectedResult = 20;
    }
  } else if (type === 'minus') {
    selectedResult --;

    if(type === 'minus' && selectedResult > 0) { //0초과인 상태에서 -누르면 1씩 작아지기
      console.log(selectedResult)
      selectedResult-1;
    } else if(type === 'minus' && selectedResult) { // 0인 상태에서 -누르면 0유지
      selectedResult = 0;
    }

  }
  selectedNum.innerText = selectedResult;
}


function numberOfPeolpleChk() {
  if(selectedResult === 0) {
    alert('인원수를 선택하세요');      
  } else {
    divEl.style.display = 'none';
    screen.style.display = 'flex';
    const textEl = seat.querySelector('div');
    textEl.innerText = `${selectedResult}명의 자리를 선택하세요. `;
    seatArrange();

  }  
  
}

function seatArrange() { // 가로 4 : 6 : 4 , 세로 10
  arrResult = [selectedResult];

  const ulEl = seat.querySelector('ul');
  for(let i=0; i<140; i++) {
    const privateSeatBtn = document.createElement('button');
    privateSeatBtn.classList = `private${[i+1]}`;
    const liEl = document.createElement('li');
    ulEl.append(liEl);
    liEl.append(privateSeatBtn);
    privateSeatBtn.innerText = `${i+1}`;
    privateSeatBtn.addEventListener('click', ()=>{
      privateSeatBtn.classList.toggle('private');
      console.log(privateSeatBtn.classList.length)
      // if(selectedResult) {
      //   console.log(typeof selectedResult)
      //   console.log(typeof privateSeatBtn.classList.length)
      //   console.log('실패')

      // } else {
      //   console.log('예매성공')

      // }
    });
    console.log(liEl);

  }

  console.log(arrResult);

}


btnSelectedSeat.addEventListener('click', numberOfPeolpleChk);

numberOfPeopleHandler();
