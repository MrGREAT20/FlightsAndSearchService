function compareTime(time1, time2){
    let datetime1 = new Date(time1);
    let datetime2 = new Date(time2);
    return datetime1.getTime() > datetime2.getTime();
}
module.exports = {compareTime};