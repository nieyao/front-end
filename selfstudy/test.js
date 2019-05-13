// function foo(){
//   var a=1;
//   var b=1;
// }
// // var a=1,b=1;
// foo();
// console.log(a);
// console.log(b);
// foo();

// function a1(){
//    num = 5;
// }
// a1();
// console.log(num);
// var i = 0;
// console.log(i);
// for(;i<10;i++){
//   var str = '吴静怡是个傻逼'
//   console.log(str);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(function() {console.log(i); }, 100 * i);
// }  


// var wujingyi = new Object;
// wujingyi ={
//   name:"吴婧怡",
//   IQ:-250,
//   height:155,
//   weight:155
// }
// wujingyi.EQ = 250;
// console.log(wujingyi.EQ);
// console.log(wujingyi)
// console.log(wujingyi['name']);


// var a =2;
// function foo(){
//   var a = 2;
//   bar();
// }

// function bar(){
//   console.log(this.a);
// }

// foo();


// var arr = [1,2,3,4];
// var b = arr.filter((x)=>{return x >3 });
// console.log(b)  // [4]

// var arr=["小","明","喜","欢","学","习"];
// function fn(arr){
// return arr.reduce(function(a,b){
// return a+b;
// })
// }
// console.log(fn(arr));


// function high(success,fail,complete){
//   console.log("Nieyao")                                                                                                                                                                                                                                  
// }

// const str = 'nieyao';
// console.log(typeof str)

// const arr = [1,3,5,6,78,8,2,2];
// for(let item in arr){
//   console.log(arr[item])
// }

// var  q = {
//   nickname:"hah",
//   avatarUrl:"",
//   islogin:0,
//   newaddress:"",
//   address:"",
//   receiveAdrr:"您的目的地？",//收货地
//   city:"南昌",
//   shipLocation:"",//发货地地址坐标
//   recLocation:"",//收货地地址坐标
//   currentLat:"",
//   currentLng:"",
//   distance:0,
//   price:0,
//   time:""
//   }
// for (let item in q){
//   console.log(q['item'])
// }



// function a(){
//   return 3;
// }

// const b = new a();
// console.log(Object.getPrototypeOf(b) === a.prototype);

// First, setup the generic poem creator function; it will be the callback function in the getUserInput function below.
// function genericPoemMaker(name, gender) {
//   // console.log(name + '是一个'+gender+'性')
//   console.log(name)
// }

// genericPoemMaker('nieyao','man');
//The callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above.


// function getUserInput(firstName, lastName, gender, callback) {
//   var fullName = firstName + " " + lastName;

//   // Make sure the callback is a function
//   if (typeof callback === "function") {
//   // Execute the callback function and pass the parameters to it
//   callback(fullName, gender);
//   }
// }

// function greetUser(customerName, sex)  {
//   var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
//  console.log("Hello, " + salutation + " " + customerName);
// }
// getUserInput('nie','yao','Man',greetUser)


// setTimeout(function() {
//   console.log(1)
// }, 0);
// new Promise(function executor(resolve) {
//   console.log(2);
//   for( var i=0 ; i<10000 ; i++ ) {
//     i == 9999 && resolve();
//   }
//   console.log(3);
// }).then(function() {
//   console.log(4);
// });
// console.log(5);




//  function twoSum(nums, target) {
//   for(let i=0;i<nums.length;i++){
//       for(let j=i+1;j<nums.length;j++){
//           if(nums[i]+nums[j]==target){
//               newnums = [i,j]
//               return newnums;
//           }
//       }
//   }
// };


// const race = '100m Dash';
// const winners = ['Hunber Gath','Singa Song','Imda Bos'];
// // 生成json数组 item json { name: , race: '100m Dash', place: 1/2/3}
// const win = [];
// for(let i = 0; i < winners.length;i++){
//     win.push({
//         name:winners[i],
//         race:race,
//         place: i + 1
//     });
// } 
// console.log(win)


// function foo(num){
//   console.log('foo:'+num);
//   this.count++;
// }
// foo.count = 0;

// for(var i = 0;i<10;i++){
//   if(i>5){
//     foo.bind(foo,i)();//将 foo 函数绑定到foo 环境上，这样内部的 this 就指向foo了
//   }
// }
// console.log(foo.count)


//函数柯里化
// function add(a){
//   return function(b){
//     return a + b;
//   }
// }
// const result = add(3)(13);
// console.log(result)


//递归 斐波那契数列
// let count = 0
// const fibonacci = function (n) {
//   count++;
//   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// }

// for(var i =0; i<= 10; i+= 1){
//   console.log('//' + i + ':' + fibonacci(i))
// }
// console.log(count);

//记忆
// let count = 0;
// const fibonacci = function(){
//   // count++
//   let memo = [0,1];
//   let fib = function(n){
//   count++
//   let result = memo[n]
//   if(typeof result !== 'number'){
//     result = fib(n -1) + fib(n -2);
//     memo[n] = result;
//   }
//   return result;
//   }
//   return fib;
// }();

// for(var i =0; i<= 10; i+= 1){
//   console.log('//' + i + ':' +fibonacci(i))
// }
// console.log(count);


// let arr1 = [0,1,2];
// arr1[10] = 10;
// console.log(arr1)

//创建一个对象
// const obj = {
//     name:'man',
//     say:function(){
//     console.log("hello world")
//   }
// }
// const newobj = Object.create(obj)
// // newobj.name = 'nieyao';
// console.log(newobj.name)
// newobj.say()

// let arr = [1,2,5,4,77];
// arr.name = 'nie';
// console.log(`arr:${arr}`)
// console.log(arr)
// console.log(`length:${arr.length}`)


// const a = ['a','b','c'];
// const b = a.push('d')
// const c = a.join('')
// console.log(b,"f",a,c)

//判断是否为数组
// const arr = [1]
// console.log(Object.prototype.toString.apply(arr)==='[object Array]'
// )


// function foo(){
//   console.log(a,"foo");
// }

// function bar(){
//   var a = 3;//局部变量
//   console.log(a,"bar")
//   foo();
// }

// var a = 2;
// console.log(a)
// bar();
// console.log(a)


// function foo(){
//   var a = 2;
//   console.log(`b:${b}`)//作用域链里的变量只能被向上访问
//   function bar(){
//     var b = 3;
//     console.log(`a:${a}`);
//   }
//   bar();
// }

// foo();


// function Dog (name) {
//   this.name = name;
//   this.type = 'Dog'; 
// }
// Dog.prototype.speak = function () {
// 　　console.log('wang');
// }
// var doggie = new Dog('jiwawa');
// doggie.speak();  //wang 
// console.log(Dog.prototype === doggie.prototype,doggie._proto_)



// 定义一个动物类
// function Animal (name) {
//   // 属性
//   this.name = name || 'Animal';
//   // 实例方法
//   this.sleep = function(){
//     console.log(this.name + '正在睡觉！');
//   }
// }
// // 原型方法
// Animal.prototype.eat = function(food) {
//   console.log(this.name + '正在吃：' + food);
// };

//原型链继承
// function Cat(){ 
//   this.sex = 'nan'
// }
// Cat.prototype = new Animal();
// Cat.prototype.name = 'cat';

// //　Test Code
// var cat = new Cat();
// console.log(cat.name,cat.sex);
// console.log(cat.eat('fish'));
// console.log(cat.sleep());
// console.log(cat instanceof Animal); //true 
// console.log(cat instanceof Cat); //true

// //构造继承
// function Cat(name){
//   Animal.call(this);
//   this.name = name || 'Tom';
// }

// // Test Code
// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat instanceof Animal); // false
// console.log(cat instanceof Cat); // true


// var my_data={a:'Ape', b:'Ap', c:'A'};
// for(var key in my_data) {
//   console.log(my_data[key])
// }



// function Foo(){
//      var i=0;
//      return function(){
//          console.log(i++);
//      }
// }
// var f1=Foo(),
// f2=Foo();
// f1();//return i=1 输出0
// f1();//return i=2 输出1
// f2();//return i=1 输出0
// f1();
// f1();
// f2()


//数组解构赋值
// var arr = ['this is string', 2,5];
// var [a, b, c] = arr;
// console.log(a,b,c);

//嵌套数组解构
// var arr = [1,5,[14,3],8,9];
// var [a,s,[b,d],c] = arr;
// console.log(a);

//函数传参解构
// var arr = ['this is string', 2,5];

// function fn ([a,b,c]) {
//   console.log(a,b,c);
// }

// fn(arr);

//对象解构
// var obj = {
//   name: 'chris',
//   sex: 'male',
//   age: 26,
//   son: {
//       sonname: '大熊',
//       sonsex: 'male',
//       sonage: 1
//   }
// };

// var {name:a,b,c,son:{sonname}} = obj;
// console.log(a,sonname)


//字符串解构
// var str = 'love';
// var [a,b,c,d] = str;
// console.log(a,b,c,d)


//变量互换
// var x = 1,
//     y = 2;
// [x, y] = [y, x];
// console.log(x); //2
// console.log(y); //1


//rest运算符 拓展运算符 
// var arr = [1,2,3,4],arr2 = [3,2,1];
// var [a,...rest] = arr;
// console.log(a,rest);
// arr3 = [...arr,...arr2];
// arr4 = [arr,arr2];
// console.log(arr3,arr4);


//函数的带参传递
// function add (a,b) {
//   console.log('我运行了');
//   console.log(a + b);
// }
// global.setTimeout(() => {add(10,5)},2000);

//浏览器下可运行
// function a(type){
//   alert(type);
// }
// setTimeout("a("+'123'+")",3000) //把参数和函数变成字符串


//for in查找 此种情况不按顺序输出
// var person={'1':"John",'3':"Doe",'2':25};
// var txt="";
// for (x in person)
// {
//   txt=txt + person[x];
// }
// console.log(txt);



// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log(this.foo);  
//         console.log(self.foo);  
//         (function() {
//             console.log(this.foo);  
//             console.log(self.foo);  
//         })();
//     }
// };
// myObject.func();

// var foo = function () {
//   console.log('f')
// }
// foo()


// function sum(arr) {
//   //var result = 0;
//   //const len = arr.length;
//   //for (var i = 0; i<len; i++) {
//       //result = result + arr[i]
//   //}
//   //return result;

//       return arr.reduce(function (result, number) {
//       return result + number
//   },0)

// }
// console.log([1,2,4].reduce(function (result, number) {
//   return result + number
// },0));


// function removeWithoutCopy(arr, item) {
//     var index = 0;
//     while((index = arr.indexOf(item)) !== -1){
//       arr.splice(index,1);
//     }
//     return arr;
// }

// console.log(removeWithoutCopy([2,2,2,2,2], 2))


// function append(arr, item) {
//     var newarr = arr.slice(0);
//     newarr.push(item);
//     console.log(arr)
//     return newarr;
// }
// console.log(append([1, 2, 3, 4],10))


// function concat(arr1, arr2) {
//   //return arr1.concat(arr2);

//   return [...arr1,...arr2]
// }

// console.log([...[1,2,1],...[2,3,1]])

// function insert(arr, item, index) {
//   var newarr = arr.slice(0);
//   newarr.splice(index-1,0,item);
//   return newarr
// }
// console.log(insert([1, 2, 3, 4], 'z', 2));


// function duplicates(arr) {
//   var len = arr.length;
//   var newarr = [];
//   arr.sort();
//   for (var i = 0; i < len; i++) {
//       if(arr[i] === arr[i + 1] && newarr.indexOf(arr[i]) === -1) {
//         newarr.push(arr[i])
//       }
//   }

//   return newarr;
// }
// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))


// function square(arr) {
//var newarr = [];
//var len = arr.length;
//for ( var i = 0; i < len; i++) {
//newarr.push(arr[i] * arr[i]);
//}
//return newarr;

//   var newarr = [];
//   arr.forEach(item => newarr.push(item * item))
//   return newarr;
// }

// console.log(square([1, 2, 3, 4]));



// function functions(flag) {
//   if (flag) {
//     (function () {
//       console.log('zhixingl ')
//         return function getValue() { return 'a'; }

//     }())
//   } else {
//     (function () {
//       return function getValue() { return 'b'; }
// }())
//   }

//   // return getValue()
// } 
// console.log(functions(true)   ) 





// function parse2Int(num) {
//   return parseInt(num);
// }

// console.log(parse2Int('0x12'))
// setInterval(() => {

// }, interval);

// function count(start, end) {
//   console.log(start);
//   var res = start + 1;
//   var time = setInterval(function () {

//     if (res <= end) {

//       console.log(res);
//       res++
//     } else {
//       clearInterval(time);
//     }
//   }, 100);
// // console.log(time)


//   return {
//     cancel: function () {
//       clearInterval(time);
//     }
//   }
// }

// var t = count(1,15);
// setTimeout(function () {
//   t.cancel()
// },300)

// setTimeout(() => {
//   console.log('timeout')
// }, 5000);

// setInterval(() => {
//   console.log('timeinerval')
// }, 1000);


// var foo = true,baz = 10;
// if (foo) {
//   let bar = 3;

// }
// if (baz > bar) {
//   console.log(baz);
// }


// function f() {
//   console.log(a);      // 当前的a变量是下面变量a声明提升后，默认值undefined
//   var a = 10;
//   console.log(a);      // a => 10
// }
// f()

// {
//   const a = 3;
// }
// console.log(a)

// function argsAsArray(fn, obj) {
//   //  return fn(...arr);
//   return fn.apply(obj);
// }

// var res = argsAsArray(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'})
// console.log(res)




// function functionFunction (str1) {

// }

// var res = functionFunction('Hello')('world')
// console.log(res);


// Promise.resolve(1)
//   .then((res) => {
//     console.log(res)
//      Promise.resolve('haha')
//   })
//   .catch((err) => {
//     console.log(err)
//     return 3
//   })
//   .then((res) => {
//     console.log(res,'f')
//   })



// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('once')
//     resolve('success')
//   }, 1000)
// })

// const start = Date.now()
// promise.then((res) => {
//   console.log(res, Date.now() - start)
// })
// promise.then((res) => {
//   console.log(res, Date.now() - start)
// })
// promise.then((res) => {
//   console.log(res, Date.now() - start)
// })


// process.nextTick(() => {
//   console.log('nextTick')
// })
// Promise.resolve()
//   .then(() => {
//     console.log('then')
//   })
// setImmediate(() => {
//   console.log('setImmediate')
// })
// console.log('end')


// setTimeout(function() {
//   console.log('setTimeout');
// })

// new Promise(function(resolve) {
//   console.log('promise');
//   resolve('haha');
// }).then(function(res) {
//   console.log('then',res);
// })

// console.log('console');

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(100).then((value) => {
//   console.log(value);
// });


// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve('ff');   
//   }, 3000);
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(p1);    
//   }, 1000);
// })

// p2.then(res => {
//   console.log(res);
// })


// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(function() {
//   console.log('everything is great');
// });

// setTimeout(() => { console.log(123) }, 2000);




// const promise = new Promise(function (resolve, reject) {
//   resolve('ok');
//   setTimeout(function () { throw new Error('test') }, 0)
// });
// promise.then(function (value) { console.log(value) });


// Promise.resolve(2).then(() => {}, () => {})
// Promise.resolve(2).finally(() => {})



// const p1 = Promise.resolve('hello');
// p1.then(res => {
//   console.log(res);
// })



// setTimeout(function () {
//   console.log('three');
// }, 0);

// Promise.resolve().then(function () {
//   console.log('two');
// });

// console.log('one');



//红绿灯问题
// function red(){
//   console.log('red');
// }
// function green(){
//   console.log('green');
// }
// function yellow(){
//   console.log('yellow');
// }

// var light = function (time, cb) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       cb();
//       resolve();
//     },time)
//   })
// }

// function step () {
//   return light(3000,red)
//     .then(() => {
//       return light(2000,green)
//     })
//     .then(() => {
//       light(1000,yellow)
//     })
//     .then(() => {
//       step()
//     })

// }

// step()



// function makeClosures(arr, fn) {
//   var result = arr.map(function (item,index) {
//     return (function (num) {
//       // console.log(item)
//       return function () {
//         return fn(num);
//       }
//     })(item)
//   })
//   console.log(result);
//   result.unshift('');
//   return result;
// }

// function makeClosures(arr, fn) {
//   var result = arr.map(function (item,index) {
//       // console.log(item)
//       return function () {
//         return fn(item);
//       }
//   })
//   console.log(result);
//   result.unshift('');
//   return result;
// }
// var res = makeClosures([1, 2, 3], function (x) { 
// 	return x * x; 
// })[3]()

// console.log(res);


// var obj = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 4,
//     f: 5
//   }
// }

// var newObj = JSON.parse(JSON.stringify(obj));
// newObj.c.d = 'hello'
// console.log(newObj,obj);


// function partial(fn, str1, str2) {
//     args = [].slice.call(arguments,1)
//     // console.log(args)
//     return function (newarg) {
//       return fn(...args,newarg)
//     }
//     // return function (str3) {
//     //   return fn(str1,str2,str3)
//     // }
// }

// var sayIt = function(greeting, name, punctuation) {     return greeting + ', ' + name + (punctuation || '!'); };  
// var res = partial(sayIt, 'Hello', 'Ellie')('!!!');
// console.log(res)


// function useArguments() {
//   var args = [].slice.call(arguments,0);
//   var res = args.reduce(function (sum, value) {
//       return sum + value
//   })
//   return res;
// }

// var res = useArguments(1,2,3,4);
// console.log(res)

// var arr = [1,2,3];
// var newarr = arr.slice()
// console.log(newarr)


// function test(person) {
//   person.age = 26
//   person = {
//     name: 'yyy',
//     age: 30
//   }
//   console.log(p1,'pq')
//   return person
// }
// const p1 = {
//   name: 'yck',
//   age: 25
// }
// const p2 = test(p1)
// console.log(p1) // -> ?
// console.log(p2) // -> ?


// class PrimitiveString {
//   static [Symbol.hasInstance](x) {
//     return typeof x === 'string'
//   }
// }
// console.log('heello world' instanceof PrimitiveString)


// function say() {
// 	console.log(this.x);
// };
// var a = say.bind({x: 1});
// var b = a.bind({x: 2});
// b(); // 这里会输出1还是2呢？


// var a = say.bind({x: 1},1,2,3);
// var b = a.bind({x: 2},4,5,6);
// a(7,8,9);
// b(7,8,9); 
// 此时原函数say参数的顺序的怎样的呢？
// 是[4,5,6,1,2,3,7,8,9]还是[1,2,3,4,5,6,7,8,9]

// function A() {
//   let a = 1
//    global.B = function () {
//       console.log(a)
//   }
// }
// A()
// B() // 1


// for (var i = 1; i <= 5; i++) {
//   (function (j) {
//     setTimeout(function timer() {
//       console.log(j)
//     }, j * 1000)
//   }(i))
// }

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer(i) {
//     console.log(i)
//   }, i * 1000,i)
// }

// let a = {
//   age: 18
// }

// const b = Object.assign({},a);
// const b = {...a}
// b.age = 16
// console.log(a,b)
// console.log({...a})

//深拷贝
// JSON.parse(JSON.stringify(obj))

// let a = {
//   age: 1,
//   jobs: {
//     first: 'FE'
//   },
//   js: function() {},
//   a:undefined
// }
// let b = JSON.parse(JSON.stringify(a))
// console.log(b)

// console.log(a) // ƒ a() {}
// function a() {}
// var a = 1


// function Parent(value) {
//   this.val = value
// }
// Parent.prototype.getValue = function() {
//   console.log(this.val)
// }
// function Child(value) {
//   Parent.call(this, value)
// }
// Child.prototype = Parent.prototype

// const child = new Child(1)
// Child.prototype.constructor = Child
// child.getValue() // 1
// child instanceof Parent // true
// console.log(Child.prototype.constructor)
// console.log(Child.prototype)


// console.log(['1','2','3'].map(parseInt))
// console.log(parseInt('2',4) )

// let array = [1, 2, 4, 6]
// let newArray = array.filter(item => item !== 6)
// console.log(newArray,array) // [1, 2, 4]

// const arr = [1, 2, 3]
// const mapArray = arr.map(value => value * 2)

// const reduceArray = arr.reduce((arr,current) => {
//   arr.push(current * 2);
//   return arr
// },[])

// console.log(mapArray,reduceArray) // [2, 4, 6]


// function *foo(x) {
//   let y = 2 * (yield (x + 1))
//   let z = yield (y / 3)
//   return (x + y + z)
// }
// let it = foo(5)
// console.log(it.next())   // => {value: 6, done: false}
// console.log(it.next(12)) // => {value: 8, done: false}
// console.log(it.next(13)) // => {value: 42, done: true}


// var p = new Promise((resolve, reject) => {
//   console.log('new Promise')
//   reject('success')
// })
// p.then(res => {
//   console.log('chenggong',res);
// })
// .catch(res => {
//   console.error(res,'失败')
// })
// console.log('finifsh')

// let a = 0
// let b = async () => {
//   a = a + await 10
//   console.log('2', a) // -> '2' 10
// }
// b()
// a++
// console.log('1', a) // -> '1' 1



// console.log('script start')

// async function async1() {
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2 end')
// }
// async1()

// setTimeout(function() {
//   console.log('setTimeout')
// }, 0)

// new Promise(resolve => {
//   console.log('Promise')
//   resolve()
// })
//   .then(function() {
//     console.log('promise1')
//   })
//   .then(function() {
//     console.log('promise2')
//   })

// console.log('script end')




// function curryIt(fn) {
//   var len = fn.length;
//   var arr = [];
//   var res = function (args) {
//     len--;
//     arr.push(args);
//     if (len<= 0) {
//       // console.log(arr)
//       return fn.apply(this,arr)
//     }
//     else {
//       return res;
//     }
//   }
//   return res;

// }

// var fn = function (a, b, c) {return a + b + c};
// var res = curryIt(fn)(1)(2)(3);
// console.log(res);

// function createModule(str1, str2) {
//   function createModule(str1, str2) {
//       var obj =
//               {
//                   greeting : str1,
//                   name : str2,
//                   sayIt : function(){return this.greeting + ", " + this.name;}
//               };
//       return obj;   
//   }
// }

// // console.log(createModule('nieyao', 'nihao').sayIt())
// var obj = createModule('hah','nieyao');
// console.log(obj)
// console.log(obj.sayIt())


// function valueAtBit(num, bit) {
//   var newnum = num.toString(2);
//   var newarr = [].slice.call(newnum);
//   console.log(newnum,newarr)
//   var value = newarr[bit-1];
//   var newvalue = newarr.reverse()
//   return newvalue;
// }

// function valueAtBit(num, bit) {   
//     for(var i = 0; i<bit-1; i++){
//         num = parseInt(num/2);
//     }   
//     return num%2;
// }
// var res = valueAtBit(128,8);
// console.log(res)


// function base10(str) {
//   var len = str.length;
//   var res = 0;
//   var newarr = [].slice.call(str);
//   newarr.reverse();
//   for (var i = 0; i < len; i++) {
//       res = res + Math.pow(2,i) * newarr[i]
//   }
//   return res
// }    


// let unique = function(arr) {  
//   let hashTable = {};
//   let data = [];
//   for(let i=0,l=arr.length;i<l;i++) {
//     if(!hashTable[arr[i]]) {
//       hashTable[arr[i]] = 1;
//       data.push(arr[i]);
//     }
//   }
//   console.log(hashTable)
//   return data

// }
// var res = unique([1,13,24,11,11,14,1,2] );
// console.log(res)


// function Person(name) {
//   this.name = name
//   // return name;
// }
// let p = new Person('Tom');
// console.log(p)


// function Person (name) {
//   this.name = name;
// }

// function Student () {
  
// }

// Student.prototype = Person.prototype;
// Student.prototype.constructor = Student;

// let s = new Student('Tom');
// console.log(s instanceof Person); // 返回 true



//递归实现数组扁平化处理
// function flatten (arr) {
//   var newarr = [];
//   for (item of arr) {
//     if (Array.isArray(item)){
//       newarr = newarr.concat(flatten(item))
//     }
//     else {
//       newarr = newarr.concat(item)
//     }
//   }
//   return newarr
// }

// let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// var res = flatten(givenArr);
// console.log(res)


//es6解构实现数组扁平化处理
// function flatten (arr) {
//   while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr;
// }


// let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// var res = flatten(givenArr);
// console.log(res)


//reduce实现数组扁平化处理
// function flatten (arr) {
//   return arr.reduce((pre,cur) => pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
// ,[])
// }


// let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// var res = flatten(givenArr);
// console.log(res)


// function flatten (arr) {
//   var newarr = [];
//   var str =  (arr+"").split(",");
//   for (var i = 0; i < str.length; i++) {
//     newarr.push(Number(str[i]));
//   }
//   return newarr;
// }


// let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// var res = flatten(givenArr);
// console.log(res)

// function add0(str){
//   return str+0;
// }
// function add1(str){
//   return str+1;
// }
// function add2(str){
//    return str+2;
// }
// function add3(str){
//    return str+3;
// }

// function compose(...fns){
//   if(fns.length==1)
//      return fns[0];
//    //return fns.reduce((a,b)=>(...args)=>a(b(...args)));//add3(add2(add1('好吃')))
//    return fns.reduce((a, b) => {
//      return (...args) => {
//        console.log(...args,"args")
//        return a(b(...args))
//      }
//    })
//  }
//  let add = compose(add3,add2,add1,add0);//
//  let res = add('好吃');// 好吃123
//  console.log(res)



// function add1 (str) {
//   return 1 + str
// }
// function add2 (str) {
//   return 2 + str
// }
// function add3 (str) {
//   return 3 + str
// }

// // 处理多个参数
// function sum (a, b) {
//   return a + b
// }

// function compose (...fns) {
//   console.log('fns', fns) // [ [Function: add1], [Function: add2], [Function: add3] ]
//   return (...args) => {
//       // 拿到最后一个函数
//       let last = fns.pop()
//       // 返回一个函数，把上一个函数处理的返回值val作为参数传递给下一个函数，并返回改函数的返回值
//       return fns.reduceRight((val, fn) => fn(val), last(...args))
//   }
// }

// let ret = compose(add1, add2, add3, sum)('hello world', ' leo')
// console.log(ret) // 123hello world leo


// function count (num) {
//   let temp = num,res = 0;
//   while (temp > 0) {
//     res += temp * temp + (temp-1) * (temp-1);
//     temp = temp - 2 
//   }
//   return res;
// }

// const res = count(3)
// console.log(res)

// function unique (arr) {
//   return [...new Set(arr)]       
//  }

//  console.log(unique([1,9,-4,5,1,7,2,3,-9,6,5,-3,2,4,0,9,-1,2,-4,1,7,-3,6,-2,-5,1,-3,0]))

// function flatten (arr) {
//   while(arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr;
// }

// let givenArr = [1,[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// var res = flatten(givenArr);
// console.log(res)

// console.log(['2','1','3'].map(parseInt))

// var arr = [1,2,3,4,5,6,7,8,9];
// arr.sort(function () {
//   return Math.random() - 0.5
// })



// function shuffle(arr){
//   var len = arr.length;
//   for(var i = 0; i < len - 1; i++){
//     var idx = Math.floor(Math.random() * (len - i));
//     var temp = arr[idx];
//     arr[idx] = arr[len - i - 1];
//     arr[len - i -1] = temp;
//   }
//   return arr;
// }

// var arr = [1,2,3,4,5,6,7,8,9];
// shuffle(arr)
// console.log(arr)

const items = new WeakMap();
class Stack {
  constructor() {
   
    items.set(this, []);
  }
  push (element) {
    let s = items.get(this);
    s.push(element);
  }
  print () {
    let s = items.get(this);
    console.log(s)
  }
}

const test = new Stack();
let o = Object.getOwnPropertySymbols(test);
test.push(2);
test.print();
