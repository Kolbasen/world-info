const scheduler = require('node-schedule');
const { getCoronaInfo } = require('../api/getCoronaInfo');
const { parseCoronaInfoData } = require('../utils/utils');
const { SECTIONS } = require('../variables/variables');

const repeatPattern = '0 0 * * *';

const getCoronaInfoService = async (database, fireDate = new Date().toString()) => {
    console.log(`Info scrapper service started on ${fireDate}`);
    const htmlPage = await getCoronaInfo();

    const infoByParams = parseCoronaInfoData(htmlPage);

    database.updateSection(SECTIONS.CORONA_INFO, infoByParams);

    console.log(`Info scrapper service finished on ${new Date().toString()}`);
};

const startSchedulerService = (database) => {
    scheduler.scheduleJob('getCoronaInfo', repeatPattern, (fireDate) => {
        getCoronaInfoService(database, fireDate);
    });
};

module.exports = {
    startSchedulerService,
    getCoronaInfoService,
};
