var tool = {};
tool.getOrderCode = function () {
  var current = new Date(), orderCode;
  orderCode = current.getFullYear().toString() + (current.getMonth() + 1).toString() + current.getDate().toString() + current.getHours().toString() + current.getMinutes().toString() + current.getSeconds().toString();
  return orderCode;
};
module.exports = tool;
