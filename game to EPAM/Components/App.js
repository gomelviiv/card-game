/*--------------------------------*/
const topPlayerMenu = document.getElementById('top-player');
const infoFieldMenu = document.getElementById('info');
const fieldRegistrationMenu = document.getElementById('registration');
const fieldLoginMenu = document.getElementById('login');
/*------------------------------------------------*/
const topPlayer = document.getElementsByClassName('field-top-player')[0]
const infoField = document.querySelector('.field-rule');
const fieldRegistration = document.getElementsByClassName('field-registration')[0];
const fieldLogin = document.getElementsByClassName('field-login')[0];
const fieldGameContent = document.getElementsByClassName('field-main-game')[0];

/*------------------------------------------------*/
const views = {
    top: topPlayer,
    info: infoField,
    registration: fieldRegistration,
    login: fieldLogin,
    game: fieldGameContent
};
/*------------------------------------------------*/

const registration = document.querySelectorAll('button.registration-button-registration');
const login = document.querySelectorAll('button.registration-button-login');
/*------------------------------------------------*/
let renderGame = 0;
const tableResultsField = document.getElementsByClassName('table-results')[0];
const gameRulesField = document.getElementsByClassName('game-rules')[0];
const gameOneField = document.getElementsByClassName('game-one')[0];
const gameTwoField = document.getElementsByClassName('game-two')[0];
const gameThreeField = document.getElementsByClassName('game-three')[0];
const nubmerName = document.querySelectorAll('li.number-game');
const shirtOne = document.getElementsByClassName('shirt-one')[0];
const shirtTwo = document.getElementsByClassName('shirt-two')[0];
const shirtThree = document.getElementsByClassName('shirt-three')[0];
const playGame = document.getElementsByClassName('play-game')[0];
const fieldGame = document.getElementsByClassName('field-game-content')[0];
let linkShirt = "";
let numberGame = "";
let countBackground= 0;
const gameCards = {
    gameRules: gameRulesField,
    gameOne: gameOneField,
    gameTwo: gameTwoField,
    gameThree: gameThreeField,
}
const wrapper = document.getElementsByClassName('wrapper')[0];
function randomFon(){
  countBackground++;
  setTimeout(()=>{
      wrapper.style.backgroundImage = `url("../images/form/fon${countBackground}.jpg")`;
      if(countBackground==4){
        countBackground=0;
      }

    randomFon();
  },20000)


}randomFon();
function setActiveNumberGame(numberGameKey){
    Object.keys(gameCards).forEach(numberGameKey => {
      gameCards[numberGameKey].style.display = "none";
    });
    gameCards[numberGameKey].style.display = "block";
}
shirtOne.addEventListener('click', ()=>{
  linkShirt = "url('../images/shirt/shirt5.jpg')"
})
shirtTwo.addEventListener('click', ()=>{
  linkShirt = "url('../images/shirt/shirt6.png')"
})
shirtThree.addEventListener('click', ()=>{
  linkShirt = "url('../images/shirt/shirt7.jpg')"
})

nubmerName[0].addEventListener('click', ()=>{
  numberGame = 'one'
})
nubmerName[1].addEventListener('click', ()=>{
  numberGame = 'two'
})
nubmerName[2].addEventListener('click', ()=>{
  numberGame = 'three'
})
let arrCard = 0;
function clearGameFeild(num){
    for(let i=0; i<arrCard.length; i++){
      try{gameOneField.removeChild(arrCard[i]);} catch(e){}
      try {gameTwoField.removeChild(arrCard[i]);} catch (e){}
      try {gameThreeField.removeChild(arrCard[i]);} catch (e){}
    }
}
function funRenderGame(game, arrCard){
  clearGameFeild(arrCard.length)
  setActiveNumberGame(game);
  StartStop();
}
playGame.addEventListener('click', ()=>{
  ClearСlock();
    if(linkShirt && numberGame == 'one' ){
      funRenderGame('gameOne', arrCard)
      arrCard = gamePlay(gameOneField, 10, linkShirt);
    } else if( linkShirt && numberGame === 'two' ){
      funRenderGame('gameTwo', arrCard)
      arrCard = gamePlay(gameTwoField, 18, linkShirt);
    } else if(linkShirt && numberGame === 'three' ){
      funRenderGame('gameThree', arrCard)
      arrCard = gamePlay(gameThreeField, 24, linkShirt);
    } else {
      let divInformationGame = document.createElement('div');
        divInformationGame.className = 'divInformationGame'
        divInformationGame.innerHTML = "Вы не выбрали обложку карт или режим игры!"
        fieldGameContent.appendChild(divInformationGame);
        setTimeout(()=>{fieldGameContent.removeChild(divInformationGame)},5000)
    }
})

function setActiveView(viewKey) {
    Object.keys(views).forEach(viewKey => {
        views[viewKey].style.display = "none";
    });
    views[viewKey].style.display = "block";
}

topPlayerMenu.addEventListener('click', ()=> {
    try {
      for(let i =0; i<arrTr.length;i++){
        tableResultsField.removeChild(arrTr[i]);
      }
    } catch (e) {}
    setActiveView('top');
     arrTr = funTopPlayer();
});
infoFieldMenu.addEventListener('click', ()=> {
    setActiveView('info');
});

fieldLoginMenu.addEventListener('click', ()=> {
    setActiveView('login')
});

fieldRegistrationMenu.addEventListener('click', () => {
    setActiveView('registration')
});
registration[0].onclick = () => {
    setActiveView('registration');
};
registration[1].onclick = () => {
    setActiveView('registration');
};
registration[2].onclick = () => {
    setActiveView('registration');
};
login[0].onclick = () => {
    setActiveView('login');
};
/*--------------------------------------------------------------------*/
