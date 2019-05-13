const Koa = require('koa');
//创建一个Koa对象表示web app本身
const app = new Koa();
//对于任何请求app将调用该异步函数处理请求
app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello World!Welcome to koa2<h1>';
})

//在端口3000进行监听
app.listen(8080);
console.log('app started at port 8080...');