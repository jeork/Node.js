const express = require('express');
const path = require('path');

const app = express(); // 객체 생성
const port = 3000;

app.get('/', (req, res) => {
    res.send('익스프레스 서버 작동중');       
});

// url 추가하기
app.get('/beaver', (req, res) => {
    res.send('하이');
})

app.listen(port, () => {
   console.log(`Express가 ${port}번 포트에서 작동중`);
});

app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
})