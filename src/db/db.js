const fs = require('fs');
const path = require('path');

class Db {
    constructor() {
        const data = fs.readFileSync(path.join(__dirname, 'db.json'));

        this.data = JSON.parse(data);
    }

    getSection(section) {
        return this.data[section];
    }

    updateSection(section, data) {
        const updatedData = { ...this.data, [section]: data };
        fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(updatedData, null, '\t'));
        return updatedData;
    }
}

module.exports = {
    Db,
};
