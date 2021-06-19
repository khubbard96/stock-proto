const chartData = [];

class TickerChart {
    constructor() {
        this.supportingData ={};
    }

    setPriceData(priceCandles) {
        if(!this.priceCandles) {
            this.priceCandles = priceCandles;
        }
    }

    addSupportingData(dataCode, data) {
        if(!this.supportingData[dataCode]) {
            this.supportingData[dataCode] = data;
        }
    }
}

TickerChart.DataCodes = {
    MOVING_AVG: "MOVING_AVG",
}