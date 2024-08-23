const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됨');

});


app.get('/', (req, res) => {
    console.log('실행 됨!');
    next();
},(req,res)=>{
    throw new Error('에러는 에러처리 미들웨어로 가지요')
});

// 파라미터는 총 4개! err 에는 에러에 대한 정보가 들어있음


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('err.message');
});

app.listen(3000, () => {
    console.log('3000번 포트입니다~');
});
