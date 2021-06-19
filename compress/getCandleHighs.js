const SimpleTimeMappedValue = require("../math/models/SimpleTimeMappedValue");

const getCandleHighs = (data) => {
    return data.map((de, i) => {
        return new SimpleTimeMappedValue(de.getHigh(), de.getTimestamp());
    });
}

module.exports = getCandleHighs