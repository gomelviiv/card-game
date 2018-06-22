function funTopPlayer(){
  const tableResults = document.getElementsByClassName('table-results')[0];
  scorePlayers();
  let allUser = JSON.parse(localStorage.getItem(`All User`));
  let arUsers =[];
  for(let i =0; i<allUser.length;i++){
    arUsers.push(allUser[i]);
  }

  arUsers.sort(function(allUser1, allUser2) {
    return allUser1.CountGame-allUser2.CountGame;
  });

let arrTr = [];
  for(let i=0;i<10; i++){
    let tr = document.createElement('tr');
      tableResults.appendChild(tr);
      arrTr.push(tr);
      try {
        if(arUsers[i].FirstName != undefined){
          let td0 = document.createElement('td');
          td0.innerHTML = i+1;
          tr.appendChild(td0);
          let td1 = document.createElement('td');
          td1.innerHTML = arUsers[i].FirstName;
          tr.appendChild(td1);
          let td2 = document.createElement('td');
          td2.innerHTML = arUsers[i].Email;
          tr.appendChild(td2);
          let td3 = document.createElement('td');
          td3.innerHTML = arUsers[i].TenLength;
          tr.appendChild(td3);
          let td4 = document.createElement('td');
          td4.innerHTML = arUsers[i].EighteenLength;
          tr.appendChild(td4);
          let td5 = document.createElement('td');
          td5.innerHTML = arUsers[i].TwentyFourLength;
          tr.appendChild(td5);
          let td6 = document.createElement('td');
          td6.innerHTML = arUsers[i].CountGame;
          tr.appendChild(td6);
        }
      } catch (e) {}
      }
  return arrTr;
}
