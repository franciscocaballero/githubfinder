//Init gitHub
const github = new Github;

//instantiating UI class UI
// const ui = new UI;

const ui = new UI;
// Search Input
const searchUser = document.querySelector('#searchUser');

//Seach Ijput event lisnter

searchUser.addEventListener('keyup', (e) => {
  //GET inpout text
  const userText = e.target.value;

  if(userText !== ''){
    //Make HTTP CALL
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //Show Alert
        // ui.showAlert('ERROR USER NOT FOUND','alert alert-danger')
        ui.showAlert('ERROR USER NOT FOUND','alert alert-danger')
      } else {
        //Show profile
        ui.showProfile(data.profile)
      }
    })
  } else {
    //Clear Profile
    ui.clearProfile()
  }
});
