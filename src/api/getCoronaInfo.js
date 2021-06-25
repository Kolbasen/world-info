const axios = require('axios').default;

const getCoronaInfo = async () => axios.get('https://www.worldometers.info/coronavirus');

module.exports = {
    getCoronaInfo,
};
