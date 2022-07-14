const body = document.querySelector('body');
const container = document.querySelector('#container');
const divEl = document.querySelector('.movie-seat-reservation');
const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const selectedNum = document.querySelector('.selected-num');
const btnSelectedSeat = document.querySelector('.selected-seat');

const seat = document.querySelector('#seat');
const screen = document.querySelector('#screen');
const textEl = seat.querySelector('.title');
const ulEl = seat.querySelector('ul');
const doneBtn = document.querySelector('.btn-done');

let selectedResult = parseInt(selectedNum.innerText);
let arrResult = [];
let arrClassName = [];

const CLASSNAME_HIDDEN = 'hidden';
const CLASSNAME_PRIVATE = 'private';
const STLYE_FLEX ='flex';
const STLYE_NONE ='none';



function numberOfPeopleHandler(type) {
  if(type === 'plus') {
    selectedResult ++;
    arrResult.push(selectedResult);
    if(selectedResult > 20) {
      alert('최대 20명까지 예매가 가능합니다.');
      selectedResult = 20;
    }
  } else if (type === 'minus') {
    selectedResult --;
    arrResult.splice(selectedResult);
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
    divEl.style.display = STLYE_NONE;
    screen.style.display = STLYE_FLEX;
    textEl.innerText = `${selectedResult}명의 자리를 선택하세요. `;
    doneBtn.classList.remove(CLASSNAME_HIDDEN);
    container.classList.remove(CLASSNAME_HIDDEN);
    seat.classList.remove(CLASSNAME_HIDDEN);
    textEl.classList.remove(CLASSNAME_HIDDEN);
    ulEl.classList.remove(CLASSNAME_HIDDEN);
    // ulEl.style.display = 'grid';
    // seat.style.display = 'felx';
    container.style.display = STLYE_FLEX;

    seatArrange();
  }  
  
}

function seatArrange() { // 가로 4 : 6 : 4 , 세로 10
  for(let i=0; i<140; i++) {
    const privateSeatBtn = document.createElement('button');
    privateSeatBtn.classList = `${CLASSNAME_PRIVATE}${[i+1]}`;
    const liEl = document.createElement('li');
    ulEl.append(liEl);
    liEl.append(privateSeatBtn);
    privateSeatBtn.innerText = `${i+1}`;
    privateSeatBtn.addEventListener('click', ()=>{
      if(privateSeatBtn.classList.toggle(CLASSNAME_PRIVATE)) {
        arrClassName.push(privateSeatBtn.classList);
        // console.log('arr', arrClassName);
      }else if(privateSeatBtn.classList !== CLASSNAME_PRIVATE) {
        privateSeatBtn.classList.remove(CLASSNAME_PRIVATE);
        console.log(DOMTokenList)
        arrClassName.pop(DOMTokenList);
        console.log('삭제', arrClassName)
      }
    });
  }
  doneBtn.addEventListener('click', ()=>{
    const notice = document.createElement('div');
    notice.classList.add('notice')
    body.append(notice);
    const regex = /[^0-9]/g;
    let seatNum = [];
    seatNum = String(arrClassName).replace(regex, '');
    if(arrResult.length == arrClassName.length) {
      container.classList.add(CLASSNAME_HIDDEN);
      container.style.display = STLYE_NONE;
      console.log(seatNum);
      notice.innerHTML = `<span>${seatNum}</span>번의 자리를 예매했습니다.`
      
    } else {
      alert('인원 수에 맞게 자리를 선택하세요!');
    }
  });
  

  console.log(arrResult);

}


btnSelectedSeat.addEventListener('click', numberOfPeolpleChk);

numberOfPeopleHandler();
