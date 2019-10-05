'use strict';

class UserService{
  constructor (){
    this.baseUrl = 'http://www.mocky.io/v2/5808862710000087232b75ac';
  }
  async getAllUsers() {
    const response = await fetch(`${this.baseUrl}`);
    const data = await response.json();
    console.log(data);
    return data.results;
  }
}

const UserServiceInstance = new UserService();