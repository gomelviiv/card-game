function gamePlay(game, length, shirt){
  for(let i =0; i< length;i++){
    let mainDiv = document.createElement('div');
      mainDiv.className = 'img-card';
      mainDiv.style.backgroundImage = shirt;
      game.appendChild(mainDiv);
    }
    let card = document.getElementsByClassName("img-card");
    let cards = [...card];
    let mas = []

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
shuffle(cards);

let displayCard = function (){
this.classList.toggle("open");
this.classList.toggle("show");
this.classList.toggle("disabled");
};
let disCardCount = 0;
for(let i =0;i<cards.length;i++){
  cards[i].addEventListener("click",displayCard);

}
function disableCard(){
  for(let i =0;i<cards.length;i++){
    cards[i].style.pointerEvents = 'none';
  }
}
function notDisableCard(){
  for(let i =0;i<cards.length;i++){
    cards[i].style.pointerEvents = 'auto';
  }
}
try {
    cards[0].addEventListener("click", ()=>{
      let num=0;
        cards[0].style.backgroundImage = "url('../images/cards/cards1.png')";
        gameCards(num)
    });
    cards[1].addEventListener("click", ()=>{
      let num=1;
        cards[1].style.backgroundImage = "url('../images/cards/cards1.png')";
         gameCards(num)  });
    cards[2].addEventListener("click", function(){
      let num=2;
        cards[2].style.backgroundImage = "url('../images/cards/cards2.png')";
         gameCards(num)
    });
    cards[3].addEventListener("click", ()=>{
      let num=3;
        cards[3].style.backgroundImage = "url('../images/cards/cards2.png')";
         gameCards(num)  });
    cards[4].addEventListener("click", function(){
      let num=4;
        cards[4].style.backgroundImage = "url('../images/cards/cards3.png')";
         gameCards(num)
    });
    cards[5].addEventListener("click", ()=>{
      let num=5;
        cards[5].style.backgroundImage = "url('../images/cards/cards3.png')";
         gameCards(num)  });
    cards[6].addEventListener("click", function(){
      let num=6;
        cards[6].style.backgroundImage = "url('../images/cards/cards4.png')";
         gameCards(num)
    });
    cards[7].addEventListener("click", ()=>{
      let num=7;
       ;
        cards[7].style.backgroundImage = "url('../images/cards/cards4.png')";
         gameCards(num)  });
    cards[8].addEventListener("click", function(){
      let num=8;
        cards[8].style.backgroundImage = "url('../images/cards/cards5.png')";
         gameCards(num)
    });
    cards[9].addEventListener("click", ()=>{
      let num=9;

        cards[9].style.backgroundImage = "url('../images/cards/cards5.png')";
         gameCards(num)  });
    cards[10].addEventListener("click", function(){
      let num=10;
        cards[10].style.backgroundImage = "url('../images/cards/cards6.png')";
         gameCards(num)
    });
    cards[11].addEventListener("click", ()=>{
      let num=11;

        cards[11].style.backgroundImage = "url('../images/cards/cards6.png')";
         gameCards(num)  });
    cards[12].addEventListener("click", function(){
      let num=12;
        cards[12].style.backgroundImage = "url('../images/cards/cards7.png')";
         gameCards(num)
    });
    cards[13].addEventListener("click", ()=>{
      let num=13;
       ;
        cards[13].style.backgroundImage = "url('../images/cards/cards7.png')";
         gameCards(num)  });
    cards[14].addEventListener("click", function(){
      let num=14;
        cards[14].style.backgroundImage = "url('../images/cards/cards8.png')";
         gameCards(num)
    });
    cards[15].addEventListener("click", ()=>{
      let num=15;

        cards[15].style.backgroundImage = "url('../images/cards/cards8.png')";
         gameCards(num)  });
    cards[16].addEventListener("click", function(){
      let num=16;
        cards[16].style.backgroundImage = "url('../images/cards/cards9.png')";
         gameCards(num)
    });
    cards[17].addEventListener("click", ()=>{
      let num=17;

        cards[17].style.backgroundImage = "url('../images/cards/cards9.png')";
         gameCards(num)  });
    cards[18].addEventListener("click", function(){
      let num=18;
        cards[18].style.backgroundImage = "url('../images/cards/cards10.jpeg')";
         gameCards(num)
    });
    cards[19].addEventListener("click", ()=>{
      let num=19;

        cards[19].style.backgroundImage = "url('../images/cards/cards10.jpeg')";
         gameCards(num)  });
    cards[20].addEventListener("click", function(){
      let num=20;
        cards[20].style.backgroundImage = "url('../images/cards/cards11.jpg')";
         gameCards(num)
    });
    cards[21].addEventListener("click", ()=>{
      let num=21;
        cards[21].style.backgroundImage = "url('../images/cards/cards11.jpg')";
         gameCards(num)  });
    cards[22].addEventListener("click", function(){
      let num=22;
        cards[22].style.backgroundImage = "url('../images/cards/cards12.png')";
         gameCards(num)
    });
    cards[23].addEventListener("click", ()=>{
      let num=23;
        cards[23].style.backgroundImage = "url('../images/cards/cards12.png')";
         gameCards(num)

    });
  } catch (e) {
  }
  let score = 0;

   function  gameCards(num){
     mas.push(cards[num]);
     mas.push(num);
     disCardCount++;
     if(mas.length === 4){
       if(disCardCount===2){
         disableCard()
         disCardCount=0;
       }

       if(mas[1]!==mas[3]){
       if(mas[0].style.backgroundImage === mas[2].style.backgroundImage){
          mas[0].style.backgroundImage = cards[num].style.backgroundImage;
          mas[2].style.backgroundImage = cards[num].style.backgroundImage;
          score++;
          notDisableCard()
          mas[0].style.transition = "1s";
          mas[2].style.transition = "1s";
          mas[0].style.opacity = 0;
          mas[2].style.opacity = 0;
          mas.pop();
          mas.pop();
          mas.pop();
          mas.pop();

            if(score === length/2){
                let divWin = document.createElement('div')
                    divWin.className = 'divWin';
                    divWin.innerHTML = `You win!<br> Your time: ${readout}`
                game.appendChild(divWin)
                setTimeout(()=>{game.removeChild(divWin)},3000)
                let allUser = JSON.parse(localStorage.getItem(`All User`));
                let arUsers = [];
                for(let i=0;i<allUser.length;i++){
                  arUsers.push(allUser[i]);
                }
                for(let i =0;i<arUsers.length; i++){
                  if(arUsers[i].FirstName === firstNameLogin.value){
                    if(arUsers[i].Email === emailLogin.value){
                      if(length ===10){
                        if(arUsers[i].TenLength === 0){
                          arUsers[i].TenLength = readout;
                        }
                        if(arUsers[i].TenLength > readout){
                          arUsers[i].TenLength = readout;
                        }
                      }
                      if(length ===18){
                        if(arUsers[i].EighteenLength === 0){
                          arUsers[i].EighteenLength = readout;
                        }
                        if(arUsers[i].EighteenLength > readout){
                          arUsers[i].EighteenLength = readout;
                        }
                      }
                      if(length ===24){
                        if(arUsers[i].TwentyFourLength === 0){
                          arUsers[i].TwentyFourLength = readout;
                        }
                        if(arUsers[i].TwentyFourLength > readout){
                          arUsers[i].TwentyFourLength = readout;
                        }
                      }
                      allUser = JSON.stringify(arUsers);
                      localStorage.setItem(`All User`, allUser)
                    }
                    }
                  }
                  ClearСlock();
                }
        } else {
          setTimeout(()=>{
            notDisableCard()
            mas[0].style.backgroundImage = shirt;
            mas[2].style.backgroundImage = shirt;
            mas.pop();
            mas.pop();
            mas.pop();
            mas.pop();
          },500)
         // console.log(false);
       }
     } else{
         notDisableCard()
       mas.pop();
       mas.pop();
     }
     }

   }
   return cards;
 }
