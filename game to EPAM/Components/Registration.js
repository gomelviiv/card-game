const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const buttonRegistration = document.getElementsByClassName('registration-button-registration')[1];
function dataСcollection(){
  let allUser = JSON.parse(localStorage.getItem(`All User`));
  const arrayUsers = [];
  let boolOne = false;
  let boolTwo = false;
  let user = {
      FirstName: firstName.value,
      LastName: lastName.value,
      Email: email.value,
      TenLength: "00:20:00",
      EighteenLength: "00:20:00",
      TwentyFourLength: "00:20:00",
      CountGame: 0,
    }
    let c = 0;
    let t = 0;
    let check = 0;
    for(let i=0; i<user.Email.length; i++){
      if(user.Email[i]==="@"){
        c=i
        check++
      }
      if(user.Email[i]==='.'){
        t=i
        check++
      }
    }
    if(check===2&& c<t){
      boolTwo = true;
    }
        if(user.FirstName != "" && user.LastName != ""&& user.Email != ""){
            if(allUser == null){
                arrayUsers.push(user);
                allUser = JSON.stringify( arrayUsers)
                localStorage.setItem(`All User`, allUser)
            } else {
              for(let i = 0; i< allUser.length; i++){
                if(allUser[i].Email === user.Email){
                  divInformation.innerHTML = "This Email is already taken! Select another Email!"
                  fieldRegistration.appendChild(divInformation);
                  setTimeout(()=>{fieldRegistration.removeChild(divInformation)},3000)
                  boolOne = true;
                  break;
                }
              }
              if(boolOne != true && boolTwo === true){
                for(let i = 0;i<allUser.length;i++){
                  arrayUsers.push(allUser[i]);
                }
                arrayUsers.push(user);
                allUser = JSON.stringify( arrayUsers)
                localStorage.setItem(`All User`, allUser)
                divInformation.innerHTML = "You have successfully registered!"
                fieldRegistration.appendChild(divInformation);
                setTimeout(()=>{fieldRegistration.removeChild(divInformation)},3000)
              }
        }


}else {
  divInformation.innerHTML = "The data is not correct!"
  fieldRegistration.appendChild(divInformation);
  setTimeout(()=>{fieldRegistration.removeChild(divInformation)},3000)
  }
}
buttonRegistration.addEventListener('click', ()=>{dataСcollection();})
