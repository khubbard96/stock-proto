const https = require('https');

const getTicker = async (ticker, fromDate) => {
    let data = [];
    try {
        data = await requestData(ticker, fromDate);
    } catch (e) {
        console.log(e);
    }

    return data;
}

const requestData = (ticker, fromDate) => {
    let dataStream = "";
    return new Promise((resolve, rej) => {
        https.get(generateUrl(ticker, fromDate), (res) => {

            res.on('data', (d) => {
                dataStream+=d;
            });

            res.on('end',()=>{
                resolve(JSON.parse(dataStream));
            });

        }).on('error', (e) => {
            rej(e)
        });
    });
}

const generateUrl = (ticker, dateInEpoch) => {
    const fromDateStringRep = formatDate(dateInEpoch);
    const todaysDateStringRep = formatDate(Date.now());
    const url =
        `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${fromDateStringRep}/${todaysDateStringRep}?unadjusted=true&sort=asc&apiKey=07zEY6k115_UXuXDjIdVpJOgP37jhiMd`;
    return url;
}

const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

module.exports = getTicker;