const http = require('http');

http.createServer((req,res)=>{
    res.end('Hello from Jenkins Docker CI/CD\nTest1.Version 2 deployed automatically\nTest2.Webhook Testing for CICD\ntest3.Checking finally all looks fine or not\nTest5.checking why built in node keeps on offline');
}).listen(3000, () => {
	console.log('Server running on port 3000');
});
