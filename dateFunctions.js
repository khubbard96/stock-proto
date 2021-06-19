const MS = 1;
const SEC = MS * 1000;
const MIN = SEC * 60;
const HR = MIN * 60;
const DY = HR * 24;
const WK = DAY * 7;
const MO = DY * 30;
const SIXMO = MO * 6;
const YR = DY * 365;
const THYR = YR * 3;
const FVYR = YR * 5;

module.exports = {
    day: (epochDate) => {
        return epochDate - DY;
    },
    week: (epochDate) => {
        return epochDate - WK;
    },
    month: (epochDate) => {
        return epochDate - MO;
    },
    sixMonth: (epochDate) => {
        return epochDate - SIXMO;
    },
    year: (epochDate) => {
        return epochDate - YR;
    },
    threeYear: (epochDate) => {
        return epochDate - THYR;
    },
    fiveYear: (epochDate) => {
        return epochDate - FVYR;
    }
}