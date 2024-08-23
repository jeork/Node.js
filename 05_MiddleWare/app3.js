const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const nunjucks = require('nunjucks');

const app = express();
app.use(morgan('dev'));
app.use(cookieParser()); // get방식이 오면 uri변수들이 파싱되어 
                        // req.cookies라는 객체에 저장됨
app.set('view engine', 'html');

nunjucks.configure('views', {
  express: app,
  watch: true,
});

// 서버에서 JSON데이터를 파싱하여 JS 객체로 사용  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    // 중괄호 안에 변수 : 
    // 1. 변수 할당의 용이성 : 
    //    객체나 배열에서 필요한 값만을 뽑아내서 변수로 쉽게 할당
    // 2. 파라미터에서의 활용 : 
    //    함수의 파라미터로 전달된 객체에서 필요한 값만을 뽑아와서 사용
    const { user } = req.cookies;
    if(user){
        res.render('login',{user});
        return;
    }
    res.render('index');

});

app.post('/', (req, res) => {
    const { name } = req.body;
    // 쿠키 생성
    res.cookie('user',name,{
        expires : new Date(Date.now() + 900000), // 만료 기간
        httpOnly : true, // true 설정시 JS를 통해 쿠키에 접근할 수 없음
        secure : false, // https 일 경우에만 쿠키 전송
        // maxAge : 초단위 만료 기간
    }).redirect('/');
});

app.get('/delete', (req, res) => {
    // 쿠키 삭제
    res.clearCookie('user').redirect('/');
})

app.listen(3000, () => {
    console.log('서버 실행중');
})