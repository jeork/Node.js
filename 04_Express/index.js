const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
    response.write('안녕 서버얌');
    response.end();
}).listen(3000);

// 터미널에서 node index.js로 실행
