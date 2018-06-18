
const Static = require('node-static');
const http = require('http')
const path = require('path')
const log = require('./log')


const port = process.env.FS_PORT || 8888

console.log(path.join(__dirname,'../root'))
const file = new Static.Server(path.join(__dirname,'../root')) 

const fileServer = (req, res) => {
	file.serve(req, res)
		.on('error', err => {
			const status = err.status || 500;
			req.url = status == 404 ? '/index.html' : '/500.html'
			fileServer(req, res)
		})
}

http.createServer((req, res) => {
	req.once('end', () => {
		fileServer(req, res)
	}).resume()
	log.info(req.url)
}).listen(port, err => err ? log.error(err) : log.log(`
Server start! \n
	host: localhost, \n
	port: ${port} \n
	url: http://localhost:${port}
`))
