function myNew () {
  var obj = {};
  var con = [].shift.call(arguments);
  obj.__proto__ = con.prototype;
  let result = con.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}

// 创建一个空对象
// 获取构造函数
// 设置空对象的原型
// 绑定 this 并执行构造函数
// 确保返回值为对象