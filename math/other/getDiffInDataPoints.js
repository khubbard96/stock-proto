const SimpleTimeMappedValue = require("../models/SimpleTimeMappedValue");

const getDiffInDataPoints = (serA,serB) => {
    if(serA.length !== serB.length) {
        return []
    }

    const result = [];

    for(let i =0; i < serA.length; i++) {

        const val1 = serA[i].getValue();
        const val2 = serB[i].getValue();

        if(serA[i].getTimestamp()===serB[i].getTimestamp()) {
            result.push(new SimpleTimeMappedValue(val1-val2,serA[i].getTimestamp()));
        }
    }

    return result;

    
}

module.exports = getDiffInDataPoints;