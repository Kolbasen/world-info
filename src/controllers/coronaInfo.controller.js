const { formatError } = require('../utils/utils');
const { CATEGORIES, SECTIONS } = require('../variables/variables');
const { getCoronaInfoService } = require('../services/scheduler.service');

const getCoronaInfoController = async ({ db, req, res }) => {
    try {
        const { category } = req.params;

        const availableCategories = Object.values(CATEGORIES);

        if (!availableCategories.includes(category)) {
            throw new Error('Category is not found');
        }

        const section = db.getSection(SECTIONS.CORONA_INFO) || {};

        const categoryInfo = section[category] || {};

        res.json({
            name: category,
            values: categoryInfo,
        });
    } catch (e) {
        console.error(e.message);
        res.status(400).json(formatError(e));
    }
};

const refreshInfoController = async ({ db, res }) => {
    try {
        await getCoronaInfoService(db);

        res.json('Success');
    } catch (e) {
        console.error(e.message);
        res.status(400).json(formatError(e));
    }
};

module.exports = {
    getCoronaInfoController,
    refreshInfoController,
};
