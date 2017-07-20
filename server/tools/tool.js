var tool = {};
tool.getOrderCode = function () {
  var current = new Date(), orderCode,
    year = current.getFullYear().toString(),
    month = tool.setNumberLength(current.getMonth() + 1, 2).toString(),
    day = current.getDate().toString(),
    hour = current.getHours().toString(),
    minute = current.getMinutes().toString(),
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
console.log(tool.getOrderCode())
/*module.exports = tool;*/
