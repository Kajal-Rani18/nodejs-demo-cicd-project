const http = require('http');

http.createServer((req,res)=>{
    res.end('Hello from Jenkins Docker CI/CD\n Version 2 deployed automatically');
}).listen(3000, () => {
	console.log('Server running on port 3000');
});
