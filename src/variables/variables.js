const SCRAPPER_KEYS = ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Australia/Oceania'];

const CONTINENTS = {
    NORTH_AMERICA: 'northAmerica',
    EUROPE: 'europe',
    ASIA: 'asia',
    SOUTH_AMERICA: 'southAmerica',
    AFRICA: 'africa',
    OCEANIA: 'oceania',
};

const CONTINENTS_NAMING = {
    'North America': CONTINENTS.NORTH_AMERICA,
    Europe: CONTINENTS.EUROPE,
    Asia: CONTINENTS.ASIA,
    'South America': CONTINENTS.SOUTH_AMERICA,
    Africa: CONTINENTS.AFRICA,
    'Australia/Oceania': CONTINENTS.OCEANIA,
};

const CATEGORIES = {
    TOTAL_CASES: 'totalCases',
    NEW_CASES: 'newCases',
    TOTAL_DEATH: 'totalDeath',
    NEW_DEATH: 'newDeath',
    TOTAL_RECOVERED: 'totalRecovered',
    NEW_RECOVERED: 'newRecovered',
    ACTIVE_CASES: 'activeCases',
    CRITICAL_CASES: 'criticalCases',
};

const SECTIONS = {
    CORONA_INFO: 'coronaInfo',
};

module.exports = {
    SCRAPPER_KEYS,
    CONTINENTS,
    CATEGORIES,
    CONTINENTS_NAMING,
    SECTIONS,
};
