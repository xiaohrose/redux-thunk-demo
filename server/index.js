const Koa = require('koa');
const mount = require('koa-mount');

const app = new Koa();
let a = 1


app.use(mount('/test', (ctx) => {

	ctx.body = {
		code: 0,
		data: {
			name: 'success' + (a++)
		}
	}
}))


app.listen(8888, () => console.log('listen 8888'));
