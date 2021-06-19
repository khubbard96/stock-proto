//gets information about the ticker's current macd setup

class MacdIndicator {
    constructor(ticker) {
        this.ticker = ticker;
    }

    getTicker() {
        return this.ticker;
    }
}

//want to know when theres a significant difference in macd, closeness, and crosses