class SimpleTimeMappedValue {
    constructor(val, timestamp) {
        this.value = val;
        this.timestamp = timestamp;
    }

    getValue() {
        return this.value;
    }

    getTimestamp() {
        return this.timestamp;
    }
}

SimpleTimeMappedValue.convertToSimpleTimeMappedValue = (data) => {
    if(Array.isArray(data)) {
        const result = [];

        for(let i = 0; i < data.length; i++) {
            result.push(new SimpleTimeMappedValue(data[i].getValue(),data[i].getTimestamp()));
        }

        return result;
    }
    else {
        return new SimpleTimeMappedValue(data.getValue(), data.getTimestamp());
    }
}

module.exports = SimpleTimeMappedValue;