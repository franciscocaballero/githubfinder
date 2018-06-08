class Github {
  constructor() {
    this.client_id = '779a5f7da0d8998e29ea';
    this.client_secret = '963afcede895558c82001bc55ed872a855370c30';
  }
  async getUser(user){
    const profileResponse = await fetch(`https:////api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json();

    return {
      profile: profile
    }
  }
}
