class ExponentialMovingAverage {
    constructor(period,val,timestamp) {
        this.period = period;
        this.val = val;
        this.timestamp = timestamp;
    }

    getValue() {
        return this.val;
    }

    getTimestamp() {
        return this.timestamp;
    }
}

const getExponentialMovingAverageData = (period, data) => {
    if(data.length < period) {
        return;
    }

    const k = 2/(period+1);

    const emaData = [];

    const emas = [];

    emas[0] = data[0].getValue();
    emaData.push(new ExponentialMovingAverage(period,emas[0],data[0].getTimestamp()));

    for(let i = 1; i < data.length - 1; i++) {

        const de = data[i];
        const newEma = (k*de.getValue())+((1-k)*(emas[i-1]));

        emas[i] = newEma;
        emaData.push(new ExponentialMovingAverage(period,newEma,de.getTimestamp()));
    }

    return emaData;
}

module.exports = getExponentialMovingAverageData;