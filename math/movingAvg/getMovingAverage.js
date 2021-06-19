class MovingAverage {
    constructor(period, val, timestamp) {
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

//takes array of SimpleDataMappedValue's
const getMovingAverageData = (period, data) => {
    if (data.length < period) {
        return;
    }

    const maData = [];

    for (let i = period - 1; i < data.length; i++) {
        let runningSum = 0;
        for (let j = i - period + 1; j <= i; j++) {
            runningSum += data[j].getValue();
        }
        const ma = runningSum / period;
        maData.push(new MovingAverage(period, ma, data[i].getTimestamp()));
    }

    return maData;
}

module.exports = getMovingAverageData;


