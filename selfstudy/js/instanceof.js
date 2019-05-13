function myInstanceof (left, right) {
  let prototype = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null || left === undefined) {
      return false;
    }
    if (left === prototype) {
      return true;
    }
    left = left.__proto__
  }
}

function Person(name) {
  this.name = name;
}

const p = new Person('nieyao');
console.log(p.name,myInstanceof(p,Person))

// 首先获取类型的原型
// 然后获得对象的原型
// 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null