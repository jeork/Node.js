// npm install morgan cookie-parser express-session

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('dev'));
// [요청방식][주소][응답상태코드][응답속도] - [응답 바이트]

// app.get('/', (req, res) => {
//     res.send('연결 되었습니다.');    
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));       
})

app.use('/', express.static(path.join(__dirname, 'css')));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
