const { resolve } = require('path');
require('dotenv').config({ path: resolve(__dirname, './.env') });

const config = {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
};

module.exports = {
    config,
};
