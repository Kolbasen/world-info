const { config } = require('../config/config');

const isAuthenticated = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    if (!authorization.startsWith('Bearer')) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    const split = authorization.split('Bearer ');
    if (split.length !== 2) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    const token = split[1];

    if (token !== config.SECRET) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    return next();
};

module.exports = {
    isAuthenticated,
};
