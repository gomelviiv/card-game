function scorePlayers(){
  let allUser = JSON.parse(localStorage.getItem(`All User`));
  let arUsers = [];
  let count = 0;
  let str = "";
  for(let i =0; i<allUser.length;i++){
    arUsers.push(allUser[i]);
  }

  for(let i=0; i<arUsers.length; i++){
    if(arUsers[i].TenLength == 0 || arUsers[i].EighteenLength == 0 || arUsers[i].TwentyFourLength == 0 || arUsers[i].Count == 0){
    } else {
      countingTime(arUsers[i].TenLength)
      countingTime(arUsers[i].EighteenLength)
      countingTime(arUsers[i].TwentyFourLength)
      function countingTime(string){
        string= string.replace(/[:]/g, '');
            count += parseInt(string[0] + string[1]) * 3600;
            count += parseInt((string[2] + string[3])) * 60;
            count += parseInt(string[4] + string[5])
      }
      arUsers[i].CountGame = count;
      allUser = JSON.stringify(arUsers);
      localStorage.setItem(`All User`, allUser);
    }
    count=0;
  }
}
