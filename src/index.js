const express = require('express');
const { Db } = require('./db/db');
const { config } = require('./config/config');
const { startSchedulerService } = require('./services/scheduler.service');
const { createRoutes } = require('./routes/routes');

const composeServer = () => {
    const app = express();
    const db = new Db();

    createRoutes(app, db);

    startSchedulerService(db);

    return app;
};

const server = composeServer();

server.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`));
