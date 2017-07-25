var tool = {};
tool.getOrderCode = function () {
  var current = new Date(), orderCode,
    year = current.getFullYear().toString(),
    month = tool.setNumberLength(current.getMonth() + 1, 2).toString(),
    day = current.getDate().toString(),
    hour = current.getHours().toString(),
    minute = tool.setNumberLength(current.getMinutes(),2).toString(),
    second = current.getSeconds().toString();
  orderCode = year + month + day + hour + minute + second + tool.getRandom(4);
  return orderCode;
};
tool.getRandom = function (len) {
  var sourceRandom = Math.random(), random, numberLength;
  numberLength = len || 1;
  random = Math.floor(sourceRandom * Math.pow(10, numberLength)).toString();
  return tool.setNumberLength(random, len);
};
tool.setNumberLength = function (number, len) {
  var numberStr = number.toString(), lengthDiff = len - numberStr.length;
  if (lengthDiff > 0) {
    for (var i = 0; i < lengthDiff; i++) {
      numberStr = "0" + numberStr;
    }
  }
  return numberStr;
};
tool.getDateString = function (dateObj) {
  if (typeof dateObj !== 'object') {
    dateObj = new Date();
  }
  var year, month, day, hour, minute, second;
  year = dateObj.getFullYear().toString();
  month = tool.setNumberLength(dateObj.getMonth() + 1, 2).toString();
  day = dateObj.getDate().toString();
  hour = dateObj.getHours().toString();
  minute = dateObj.getMinutes().toString();
  second = dateObj.getSeconds().toString();
  return year + '-' + month + '-' + day + " " + hour + ':' + minute + ':' + second;
};
module.exports = tool;
