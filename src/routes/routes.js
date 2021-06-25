const { getCoronaInfoController, refreshInfoController } = require('../controllers/coronaInfo.controller');
const { isAuthenticated } = require('../middleware/isAuthenticated');
const { createHandler } = require('../utils/utils');

const createRoutes = (app, db) => {
    app.get('/corona/info/category/:category', isAuthenticated, createHandler(db, getCoronaInfoController));
    app.get('/corona/info/refresh', isAuthenticated, createHandler(db, refreshInfoController));
};

module.exports = {
    createRoutes,
};
