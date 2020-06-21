class GitHub{
  constructor(){
    this.client_id = '4da5339d33eb61f6a69e';
    this.client_secret = '95d4b31b4a0570800e9ce541599274389d6bf1b1';
    this.repos_count = 6;
    this.repos_sort = 'created: asc';
  }

  //Get user request
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profileData = await profileResponse.json();
    const reopsData = await reposResponse.json();

    return{
      profile: profileData,
      repos: reopsData
    }
  }
}