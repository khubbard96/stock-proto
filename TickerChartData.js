class TickerChartData {
    constructor(ticker,o,c,h,l,v,t) {
        this.ticker = ticker;
        this.open = o;
        this.close = c;
        this.high = h;
        this.low = l;
        this.volume = v;
        this.timestamp = t;
    }

    getHigh() {
        return this.high;
    }

    getTimestamp() {
        return this.timestamp;
    }
}

//compatible with Polygon.io Aggregates(bars) response.
TickerChartData.createFromMassData = (data) => {
    const ticker = data.ticker;
    const chartCandles = [];
    for(let i = 0; i < data.results.length; i++) {
        let de = data.results[i];
        chartCandles.push(
            new TickerChartData(
                ticker,
                de.o,
                de.c,
                de.h,
                de.l,
                de.v,
                de.t
            )
        )
    }
    return chartCandles;
}

module.exports = TickerChartData;