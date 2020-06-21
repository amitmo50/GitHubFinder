//Init GitHub
const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser').addEventListener('keyup', (e) =>
{
  //Get Input text
  const userText = e.target.value;
  if(userText !== ''){
    // Make HTTP call
    github.getUser(userText).then(data => {if(data.profile.message == 'Not Found'){
      ui.showAlert('User Not Found', 'alert alert-danger');
    }else{
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
    }
  })
  }else {
    ui.clearProfile();
  }

});