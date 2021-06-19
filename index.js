const getTicker = require("./getTicker");
const TickerChartData = require("./TickerChartData");

const getCandleHighs = require("./compress/getCandleHighs");

const getMovingAverageData = require("./math/movingAvg/getMovingAverage");
const getExponentialMovingAverageData = require("./math/movingAvg/getExpMovingAverage");

const getDiffInDataPoints = require("./math/other/getDiffInDataPoints");

const SimpleTimeMappedValue = require("./math/models/SimpleTimeMappedValue");

const {exportSimpleTimeMappedDataToCsv}  = require("./fileutil/exportToCsv");

const startingDate = new Date(2021,0,1);

const FAANG_SYMBOLS = [
    "FB","AAPL","AMZN","GOOGL","NFLX"
]

const results = {};

const asdf = async () => {
    /*for(let i = 0; i < FAANG_SYMBOLS.length; i++) {
        const data = await getTicker(FAANG_SYMBOLS[i], startingDate.getTime());

        results[FAANG_SYMBOLS[i]] = TickerChartData.createFromMassData(data);
    }*/

    //console.log(results);

    const data = await getTicker(FAANG_SYMBOLS[0], startingDate.getTime());
    const priceData = TickerChartData.createFromMassData(data);

    const highs = getCandleHighs(priceData);

    /*const mAvg50 = getMovingAverageData(50,highs);
    const mExpAvg50 = getExponentialMovingAverageData(50,highs);

    console.log(mExpAvg50);
    console.log(mAvg50);*/

    const mAvg12 = getExponentialMovingAverageData(12,highs);
    const mAvg26 = getExponentialMovingAverageData(26,highs);

    const macd = getDiffInDataPoints(mAvg12,mAvg26);
    const macdSignal = getMovingAverageData(9, macd);

    console.log(macd);
    console.log("MACD signal", SimpleTimeMappedValue.convertToSimpleTimeMappedValue(macdSignal));

    exportSimpleTimeMappedDataToCsv(macd, "macd");
    exportSimpleTimeMappedDataToCsv(macdSignal,"macd signal");

}



asdf();