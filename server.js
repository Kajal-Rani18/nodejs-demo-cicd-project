const http = require('http');

http.createServer((req,res)=>{
    res.end('Hello from Jenkins Docker CI/CD\nVersion 2 deployed automatically\nWebhook Testing for CICD\nChecking finally all looks fine or not');
}).listen(3000, () => {
	console.log('Server running on port 3000');
});
