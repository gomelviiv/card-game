const firstNameLogin = document.getElementsByClassName('input-first-name')[0];
const emailLogin = document.getElementsByClassName('input-email')[0];
const buttonLogin  = document.getElementsByClassName('registration-button-login')[1];

let divInformation = document.createElement('div');
divInformation.className = 'divInformationCss';
function singIn(){
  let user = {
    FirstNameLogin: firstNameLogin.value,
    EmailLogin: emailLogin.value,
  }
  let allUser = JSON.parse(localStorage.getItem(`All User`))
  if(allUser != null){
    for(let i =0;i<allUser.length; i++){
      if(allUser[i].FirstName === user.FirstNameLogin){
        if(allUser[i].Email === user.EmailLogin){
          return true;
        }
      }
    }
    return false;
  } else {
    return false;
  }

}

buttonLogin.addEventListener('click', ()=>{
  if(singIn()){
    setActiveView('game');
  } else {
      divInformation.innerHTML = "Data entered incorrectly or you are not registered!"
      fieldLogin.appendChild(divInformation);
  }
})
