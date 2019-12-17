'use strict';

const axios = require('axios');

const baseURL = 'http://www.mocky.io/v2/';

module.exports = {
  getUsers: async () => {
    try {
      const apiUsers = await axios.get(baseURL + '5808862710000087232b75ac');
      return apiUsers.data.clients;
    } catch (error) {
      console.log(error);
    }
  },
  getPolicies: async (userId) => {
    try {
      const apiInsurances = await axios.get(baseURL + '580891a4100000e8242b75c5');
      return apiInsurances.data.policies.filter(policy => policy.clientId === userId);
    } catch (error) {
      console.log(error);
    }
  },
  getPolicy: async (policyId) => {
    try {
      const apiInsurances = await axios.get(baseURL + '580891a4100000e8242b75c5');
      return apiInsurances.data.policies.filter(policy => policy.id === policyId);
    } catch (error) {
      console.log(error);
    }
  }
};