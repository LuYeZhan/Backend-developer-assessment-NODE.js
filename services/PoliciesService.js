'use strict';

class PoliciesService{
  constructor (){
    this.baseUrl = 'http://www.mocky.io/v2/580891a4100000e8242b75c5';
  }
  async getAllPolicies() {
    const response = await fetch(`${this.baseUrl}`);
    const data = await response.json();
    console.log(data);
    return data.results;
  }
}

const PoliciesServiceInstance = new PoliciesService();
