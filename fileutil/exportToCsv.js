const createCSVFile = require('csv-file-creator');

const exportSimpleTimeMappedDataToCsv = (data,name) => {
    const obj = data.map((v,i)=>{
        return [
            v.getValue(),
            v.getTimestamp(),
        ]
    });
    console.log(obj);
    doExport(obj,name);
}


const doExport = (exportableData, fileName) => {

    createCSVFile(fileName+".csv",exportableData);
}


module.exports = {
    exportSimpleTimeMappedDataToCsv
}

