let count = 0;
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function matrixArray(len,arrB){
  const art = document.getElementsByClassName('art')[0];
  const arr = [];
  for(let i =0; i< len;i++){
    let mainDiv = document.createElement('div');
      mainDiv.className = 'img-card';
      art.appendChild(mainDiv);
      mainDiv.setAttribute('type', `${i}`);
      arr.push(mainDiv);

  }
  shuffle(arr);
  return arr;
}

var displayCard = function (){
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
};

let massiv = matrixArray(10)




let card = document.getElementsByClassName("img-card");
let cards = [...card];
for (var i = 0; i < cards.length; i++){
  cards[i].addEventListener("click", displayCard);
}
console.log(cards.length)
let mas = []
let masN = []
shuffle(cards);
cards[0].onclick = () => {
  let num=0;
  try {
    cards[0].style.background =  'black';
    qq(num)
  } catch (e) {
  }
}
cards[1].onclick = () => {
  let num=1;
  try {
    cards[1].style.background =  'black';
    qq(num)
  } catch (e) {
  }
}
cards[2].onclick = () => {
  let num=2;
  try {
    cards[2].style.background =  'white';
    qq(num)
  } catch (e) {
  }
}
cards[3].onclick = () => {
  let num=3;
    try {
      cards[3].style.background =  'white';
      qq(num)
    } catch (e) {
    }
}
cards[4].onclick = () => {
  let num=4;
    try {
      cards[4].style.background =  'yellow';
      qq(num)
    } catch (e) {
    }
}
cards[5].onclick = () => {
  let num=5;
  try {
    cards[5].style.background =  'yellow';
    qq(num)
  } catch (e) {
  }
}
cards[6].onclick = () => {
  let num=6;
    try {
      cards[6].style.background =  'green';
      qq(num)
    } catch (e) {
    }
}
cards[7].onclick = () => {
  let num=7;
  try {
    cards[7].style.background =  'green';
    qq(num)
  } catch (e) {
  }
}
cards[8].onclick = () => {
  let num=8;
    try {
      cards[8].style.background =  'blue';
      qq(num)
    } catch (e) {
    }
}

cards[9].onclick = () => {
  let num=9;
  try {
    cards[9].style.background =  'blue';
    qq(num)
  } catch (e) {
  }
}



 function qq(num){
   mas.push(cards[num]);
   mas.push(num);
   if(mas.length === 4){
     if(mas[0].style.background === mas[2].style.background){
        mas[0].style.background = cards[num].style.background
        mas[2].style.background = cards[num].style.background
        delete cards[mas[1]];
        delete cards[mas[3]];
        mas.pop();
        mas.pop();
        mas.pop();
        mas.pop();
        count++;
      } else {

       setTimeout(()=>{
          mas[0].style.background = 'red'
          mas[2].style.background = 'red'
          mas.pop();
          mas.pop();
          mas.pop();
          mas.pop();

     }, 1000)
       console.log(false);
     }
   }
   if(count === 3){
     setTimeout(()=>{alert('you win')}, 1000)

   }

 }

 /*--------------------------------------------------------------------*/
 // const containersGameOne = document.querySelectorAll("div.img-card-game-one");
 //
 // const selectorAllImgOne = document.querySelectorAll("div.game-one-img-one-background");
 // const selectorAllImgTwo = document.querySelectorAll("div.game-one-img-two-background");
 // const selectorAllImgThree = document.querySelectorAll("div.game-one-img-three-background");
 // const selectorAllImgFour = document.querySelectorAll("div.game-one-img-four-background");
 // const selectorAllImgFive = document.querySelectorAll("div.game-one-img-five-background");
 //
 // let colorOne = colorTwo = colorThree = colorFour = colorFive = 0;
 // let newCOntainersArr = [];
 //
 // for(let i = 0; i< containersGameOne.length; i++){
 //   newCOntainersArr.push(containersGameOne[i]);
 //   document.getElementsByClassName("game-one")[0].removeChild(containersGameOne[i]);
 // }
 //
 // function shuffle(array) {
 //   var currentIndex = array.length, temporaryValue, randomIndex;
 //
 //   // While there remain elements to shuffle...
 //   while (0 !== currentIndex) {
 //
 //     // Pick a remaining element...
 //     randomIndex = Math.floor(Math.random() * currentIndex);
 //     currentIndex -= 1;
 //
 //     // And swap it with the current element.
 //     temporaryValue = array[currentIndex];
 //     array[currentIndex] = array[randomIndex];
 //     array[randomIndex] = temporaryValue;
 //   }
 //
 //   return array;
 // }
 // shuffle(newCOntainersArr);
 // for(let i = 0; i< newCOntainersArr.length; i++){
 //   document.getElementsByClassName('game-one')[0].appendChild(newCOntainersArr[i]);
 // }
 //
 // selectorAllImgOne[0].onclick = () =>{
 //   if(colorTwo === 1 || colorThree === 1 || colorFour === 1 || colorFive === 1){
 //     colorOne++;
 //     colorTwo = colorThree = colorFour = colorFive = 0;
 //
 //   } else {
 //     colorOne++;
 //     colorTwo = colorThree = colorFour = colorFive = 0;
 //   }
 //   if(colorOne ===2){
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[0]);
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[1]);
 //   }
 // }
 // selectorAllImgOne[1].onclick = () => {
 //   if(colorTwo === 1 || colorThree === 1 || colorFour === 1 || colorFive === 1){
 //     colorOne++;
 //     colorTwo = colorThree = colorFour = colorFive = 0;
 //
 //   } else {
 //     colorOne++;
 //     colorTwo = colorThree = colorFour = colorFive = 0;
 //   }
 //     if(colorOne === 2){
 //       document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[0]);
 //       document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[1]);
 //     }
 //   }
 // selectorAllImgTwo[0].onclick = () =>{
 //   if(colorOne === 1 || colorThree === 1 || colorFour === 1 || colorFive === 1){
 //     colorTwo++;
 //     colorOne = colorThree = colorFour = colorFive = 0;
 //   } else {
 //     colorTwo++;
 //     colorOne = colorThree = colorFour = colorFive = 0;
 //   }
 //   if(colorTwo ===2){
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[2]);
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[3]);
 //   }
 // }
 // selectorAllImgTwo[1].onclick = () => {
 //   if(colorOne === 1 || colorThree === 1 || colorFour === 1 || colorFive === 1){
 //     colorTwo++;
 //     colorOne = colorThree = colorFour = colorFive = 0;
 //   } else {
 //     colorTwo++;
 //     colorOne = colorThree = colorFour = colorFive = 0;
 //   }
 //   if(colorTwo === 2){
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[2]);
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[3]);
 //   }
 // }
 // selectorAllImgThree[0].onclick = () =>{
 //   if(colorTwo === 1 || colorOne === 1 || colorFour === 1 || colorFive === 1){
 //     colorThree++;
 //     colorTwo = colorOne = colorFour = colorFive = 0;
 //   } else {
 //     colorThree++;
 //     colorTwo = colorone = colorFour = colorFive = 0;
 //   }
 //   if(colorThree ===2){
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[4]);
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[5]);
 //   }
 // }
 // selectorAllImgThree[1].onclick = () => {
 //   if(colorTwo === 1 || colorOne === 1 || colorFour === 1 || colorFive === 1){
 //     colorThree++;
 //     colorTwo = colorOne = colorFour = colorFive = 0;
 //   } else {
 //     colorThree++;
 //     colorTwo = colorOne = colorFour = colorFive = 0;
 //   }
 //   if(colorThree === 2){
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[4]);
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[5]);
 //   }
 // }
 // selectorAllImgFour[0].onclick = () =>{
 //   if(colorTwo === 1 || colorThree === 1 || colorOne === 1 || colorFive === 1){
 //     colorFour++;
 //     colorTwo = colorThree = colorOne = colorFive = 0;
 //   } else {
 //     colorFour++;
 //     colorTwo = colorThree = colorOne = colorFive = 0;
 //   }
 //   if(colorFour ===2){
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[6]);
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[7]);
 //   }
 // }
 // selectorAllImgFour[1].onclick = () => {
 //   if(colorTwo === 1 || colorThree === 1 || colorOne === 1 || colorFive === 1){
 //     colorFour++;
 //     colorTwo = colorThree = colorOne = colorFive = 0;
 //   } else {
 //     colorFour++;
 //     colorTwo = colorThree = colorOne = colorFive = 0;
 //   }
 //   if(colorFour === 2){
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[6]);
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[7]);
 //   }
 // }
 // selectorAllImgFive[0].onclick  = () =>{
 //   if(colorTwo === 1 || colorThree === 1 || colorFour === 1 || colorOne === 1){
 //     colorFive++;
 //     colorTwo = colorThree = colorFour = colorOne = 0;
 //   } else {
 //     colorFive++;
 //     colorTwo = colorThree = colorFour = colorOne = 0;
 //   }
 //   if(colorFive === 2){
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[8]);
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[9]);
 //   }
 // }
 // selectorAllImgFive[1].onclick = () => {
 //   if(colorTwo === 1 || colorThree === 1 || colorFour === 1 || colorOne === 1){
 //     colorFive++;
 //     colorTwo = colorThree = colorFour = colorOne = 0;
 //   } else {
 //     colorFive++;
 //     colorTwo = colorThree = colorFour = colorOne = 0;
 //   }
 //   if(colorFive === 2){
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[8]);
 //     document.getElementsByClassName('game-one')[0].removeChild(containersGameOne[9]);
 //   }
 // }
 // /*--------------------------------------------------------------------*/
 // const containersGameTwo = document.querySelectorAll("div.img-card-game-two");
 //
 // const GameTwoImgOne = document.querySelectorAll("div.game-two-img-one-background");
 // const GameTwoImgTwo = document.querySelectorAll("div.game-two-img-two-background");
 // const GameTwoImgThree = document.querySelectorAll("div.game-two-img-three-background");
 // const GameTwoImgFour = document.querySelectorAll("div.game-two-img-four-background");
 // const GameTwoImgFive = document.querySelectorAll("div.game-two-img-five-background");
 // const GameTwoImgSix = document.querySelectorAll("div.game-two-img-six-background");
 // const GameTwoImgSeven = document.querySelectorAll("div.game-two-img-seven-background");
 // const GameTwoImgEight = document.querySelectorAll("div.game-two-img-eight-background");
 // const GameTwoImgNine = document.querySelectorAll("div.game-two-img-nine-background");
 //
 // let newCOntainersGameTwoArr = [];
 // let gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0;
 //
 // for(let i = 0; i< containersGameTwo.length; i++){
 //     newCOntainersGameTwoArr.push(containersGameTwo[i]);
 //     document.getElementsByClassName("game-two")[0].removeChild(containersGameTwo[i]);
 // }
 //
 // function shuffle(array) {
 //     var currentIndex = array.length, temporaryValue, randomIndex;
 //     while (0 !== currentIndex) {
 //       randomIndex = Math.floor(Math.random() * currentIndex);
 //       currentIndex -= 1;
 //         temporaryValue = array[currentIndex];
 //         array[currentIndex] = array[randomIndex];
 //         array[randomIndex] = temporaryValue;
 //     }
 //
 // return array;
 // }
 // shuffle(newCOntainersGameTwoArr);
 // for(let i = 0; i< newCOntainersGameTwoArr.length; i++){
 //     document.getElementsByClassName('game-two')[0].appendChild(newCOntainersGameTwoArr[i]);
 // }
 // GameTwoImgOne[0].onclick = () =>{
 //   if(gameTwoColorGameTwo  === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameOne++;
 //     gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameOne++;
 //       gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 // }
 //   if(gameTwoColorGameOne ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[0]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[1]);
 //     }
 // }
 // GameTwoImgOne[1].onclick = () => {
 //   if(gameTwoColorGameTwo  === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameOne++;
 //     gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameOne++;
 //       gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 // }
 //   if(gameTwoColorGameOne ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[0]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[1]);
 //     }
 // }
 // GameTwoImgTwo[0].onclick = () =>{
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameTwo++;
 //     gameTwoColorGameOne = gameTwoColorGameThree = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameTwo++;
 //       gameTwoColorGameOne = gameTwoColorGameThree = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 // }
 //   if(gameTwoColorGameTwo ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[2]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[3]);
 //     }
 // }
 // GameTwoImgTwo[1].onclick = () => {
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameTwo++;
 //     gameTwoColorGameOne = gameTwoColorGameThree = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameTwo++;
 //       gameTwoColorGameOne = gameTwoColorGameThree = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 // }
 //   if(gameTwoColorGameTwo ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[2]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[3]);
 //     }
 // }
 // GameTwoImgThree[0].onclick = () =>{
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameThree++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameThree++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 // }
 //   if(gameTwoColorGameThree ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[4]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[5]);
 //     }
 // }
 // GameTwoImgThree[1].onclick = () => {
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameThree++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameThree++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameFour = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameThree ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[4]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[5]);
 //     }
 // }
 // GameTwoImgFour[0].onclick = () =>{
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameFour++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameFour++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameFour ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[6]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[7]);
 //     }
 // }
 // GameTwoImgFour[1].onclick = () => {
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameFour++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameFour++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFive  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameFour ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[6]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[7]);
 //     }
 // }
 // GameTwoImgFive[0].onclick  = () =>{
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameFive++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameFive++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameFive ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[8]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[8]);
 //     }
 // }
 // GameTwoImgFive[1].onclick = () => {
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameFive++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameFive++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameFive ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[8]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[9]);
 //     }
 // }
 // GameTwoImgSix[0].onclick  = () =>{
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameSix++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameSix++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameSix ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[10]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[11]);
 //     }
 //
 // }
 // GameTwoImgSix[1].onclick = () => {
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameSix++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameSix++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSeven = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameSix ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[10]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[11]);
 //     }
 // }
 // GameTwoImgSeven[0].onclick  = () =>{
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameSeven++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameSeven++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameSeven ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[12]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[13]);
 //     }
 //
 // }
 // GameTwoImgSeven[1].onclick = () => {
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameEight === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameSeven++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameSeven++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameEight = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameSeven ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[12]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[13]);
 //     }
 // }
 // GameTwoImgEight[0].onclick  = () =>{
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameEight++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameEight++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameEight ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[14]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[15]);
 //     }
 // }
 // GameTwoImgEight[1].onclick = () => {
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameEight++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameEight++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameEight ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[14]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[15]);
 //     }
 // }
 // GameTwoImgNine[0].onclick  = () =>{
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameNine === 1){
 //     gameTwoColorGameEight++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameNine = 0
 //     } else {
 //       gameTwoColorGameEight++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameNine = 0
 //   }
 //   if(gameTwoColorGameEight ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[16]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[17]);
 //     }
 // }
 // GameTwoImgNine[1].onclick = () => {
 //   if(gameTwoColorGameOne  === 1 || gameTwoColorGameTwo === 1 || gameTwoColorGameThree === 1 || gameTwoColorGameFour === 1 || gameTwoColorGameFive === 1 || gameTwoColorGameSix === 1 || gameTwoColorGameSeven === 1 || gameTwoColorGameEight === 1){
 //     gameTwoColorGameNine++;
 //     gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = 0
 //     } else {
 //       gameTwoColorGameNine++;
 //       gameTwoColorGameOne = gameTwoColorGameTwo = gameTwoColorGameThree = gameTwoColorGameFour  = gameTwoColorGameFive = gameTwoColorGameSix = gameTwoColorGameSeven = gameTwoColorGameEight = 0
 //   }
 //   if(gameTwoColorGameNine ===2){
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[16]);
 //     document.getElementsByClassName('game-two')[0].removeChild(containersGameTwo[17]);
 //     }
 // }
 // /*------------------------------------------------------------*/
 // const containersGameThree = document.querySelectorAll("div.img-card-game-three");
 //
 // const GameThreeImgOne = document.querySelectorAll("div.game-three-img-one-background");
 // const GameThreeImgTwo = document.querySelectorAll("div.game-three-img-two-background");
 // const GameThreeImgThree = document.querySelectorAll("div.game-three-img-three-background");
 // const GameThreeImgFour = document.querySelectorAll("div.game-three-img-four-background");
 // const GameThreeImgFive = document.querySelectorAll("div.game-three-img-five-background");
 // const GameThreeImgSix = document.querySelectorAll("div.game-three-img-six-background");
 // const GameThreeImgSeven = document.querySelectorAll("div.game-three-img-seven-background");
 // const GameThreeImgEight = document.querySelectorAll("div.game-three-img-eight-background");
 // const GameThreeImgNine = document.querySelectorAll("div.game-three-img-nine-background");
 // const GameThreeImgTen = document.querySelectorAll("div.game-three-img-ten-background");
 // const GameThreeImgEleven = document.querySelectorAll("div.game-three-img-eleven-background");
 // const GameThreeImgTwelve = document.querySelectorAll("div.game-three-img-twelve-background");
 //
 // let newCOntainersGameThreeArr = [];
 // let gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0;
 //
 // for(let i = 0; i< containersGameThree.length; i++){
 //     newCOntainersGameThreeArr.push(containersGameThree[i]);
 //     document.getElementsByClassName("game-three")[0].removeChild(containersGameThree[i]);
 // }
 //
 // function shuffle(array) {
 //     var currentIndex = array.length, temporaryValue, randomIndex;
 //     while (0 !== currentIndex) {
 //       randomIndex = Math.floor(Math.random() * currentIndex);
 //       currentIndex -= 1;
 //         temporaryValue = array[currentIndex];
 //         array[currentIndex] = array[randomIndex];
 //         array[randomIndex] = temporaryValue;
 //     }
 //
 // return array;
 // }
 // shuffle(newCOntainersGameThreeArr);
 // for(let i = 0; i< newCOntainersGameThreeArr.length; i++){
 //     document.getElementsByClassName('game-three')[0].appendChild(newCOntainersGameThreeArr[i]);
 // }
 //
 // GameThreeImgOne[0].onclick = () =>{
 //   if(gameThreeColorGameTwo  === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameOne++;
 //     gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve = 0
 //     } else {
 //       gameThreeColorGameOne++;
 //       gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 // }
 //   if(gameThreeColorGameOne ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[0]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[1]);
 //     }
 // }
 // GameThreeImgOne[1].onclick = () =>{
 //   if(gameThreeColorGameTwo  === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameOne++;
 //     gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve = 0
 //     } else {
 //       gameThreeColorGameOne++;
 //       gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //   }
 //   if(gameThreeColorGameOne ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[0]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[1]);
 //     }
 // }
 // GameThreeImgTwo[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameTwo++;
 //     gameThreeColorGameOne = gameThreeColorGameThree = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameTwo++;
 //       gameThreeColorGameOne = gameThreeColorGameThree = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameTwo ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[2]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[3]);
 //     }
 // }
 // GameThreeImgTwo[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameTwo++;
 //     gameThreeColorGameOne = gameThreeColorGameThree = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameTwo++;
 //       gameThreeColorGameOne = gameThreeColorGameThree = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameTwo ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[2]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[3]);
 //     }
 // }
 // GameThreeImgThree[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameThree++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameThree++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameThree ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[4]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[5]);
 //     }
 // }
 // GameThreeImgThree[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameThree++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameThree++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameFour = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameThree ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[4]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[5]);
 //     }
 // }
 // GameThreeImgFour[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameFour++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameFour++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameFour ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[6]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[7]);
 //     }
 // }
 // GameThreeImgFour[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameFour++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameFour++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFive  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameFour ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[6]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[7]);
 //     }
 // }
 // GameThreeImgFive[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameFive++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameFive++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameFive ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[8]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[9]);
 //     }
 // }
 // GameThreeImgFive[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameFive++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameFive++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameFive ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[8]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[9]);
 //     }
 // }
 // GameThreeImgSix[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameSix++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameSix++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameSix ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[10]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[11]);
 //     }
 // }
 // GameThreeImgSix[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameSix++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameSix++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameSix ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[10]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[11]);
 //     }
 // }
 // GameThreeImgSeven[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameSeven++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameSeven++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameSeven ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[12]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[13]);
 //     }
 // }
 // GameThreeImgSeven[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameSeven++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameSeven++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameSeven ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[12]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[13]);
 //     }
 // }
 // GameThreeImgEight[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameEight++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameEight++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameEight ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[14]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[15]);
 //     }
 // }
 // GameThreeImgEight[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameEight++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameEight++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameEight ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[14]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[15]);
 //     }
 // }
 // GameThreeImgNine[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameNine++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameNine++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameNine ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[16]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[17]);
 //     }
 // }
 // GameThreeImgNine[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameNine++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameNine++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameTen = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameNine ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[16]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[17]);
 //     }
 // }
 // GameThreeImgTen[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameTen++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameTen++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameTen ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[18]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[19]);
 //     }
 // }
 // GameThreeImgTen[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameEleven === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameTen++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameTen++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameEleven = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameTen ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[18]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[19]);
 //     }
 // }
 // GameThreeImgEleven[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameEleven++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameEleven++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameEleven ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[20]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[21]);
 //     }
 // }
 // GameThreeImgEleven[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameTwelve === 1){
 //     gameThreeColorGameEleven++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameTwelve  = 0
 //     } else {
 //       gameThreeColorGameEleven++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameTwelve  = 0
 //     }
 //   if(gameThreeColorGameEleven ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[20]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[21]);
 //     }
 // }
 // GameThreeImgTwelve[0].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1){
 //     gameThreeColorGameTwelve++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven  = 0
 //     } else {
 //       gameThreeColorGameTwelve++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven  = 0
 //     }
 //   if(gameThreeColorGameTwelve ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[22]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[23]);
 //     }
 // }
 // GameThreeImgTwelve[1].onclick = () =>{
 //   if(gameThreeColorGameOne  === 1 || gameThreeColorGameTwo === 1 || gameThreeColorGameThree === 1 || gameThreeColorGameFour === 1 || gameThreeColorGameFive === 1 || gameThreeColorGameSix === 1 || gameThreeColorGameSeven === 1 || gameThreeColorGameEight === 1 || gameThreeColorGameNine === 1 || gameThreeColorGameTen === 1 || gameThreeColorGameEleven === 1){
 //     gameThreeColorGameTwelve++;
 //     gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven  = 0
 //     } else {
 //       gameThreeColorGameTwelve++;
 //       gameThreeColorGameOne = gameThreeColorGameTwo = gameThreeColorGameThree = gameThreeColorGameFour  = gameThreeColorGameFive = gameThreeColorGameSix = gameThreeColorGameSeven = gameThreeColorGameEight = gameThreeColorGameNine = gameThreeColorGameTen = gameThreeColorGameEleven  = 0
 //     }
 //   if(gameThreeColorGameTwelve ===2){
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[22]);
 //     document.getElementsByClassName('game-three')[0].removeChild(containersGameThree[23]);
 //     }
 // }
