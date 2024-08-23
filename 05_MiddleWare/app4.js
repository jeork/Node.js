const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const nunjucks = require('nunjucks');
const session = require('express-session');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
    // 요청이 왔을 때 세션에 수정사항이 생기지 않더라도 다시 저장할지 여부
    resave: true,
    // 세션에 저장할 내역이 없더라도 세션을 저장할지 여부   
    saveUninitialized: false,
    // 쿠키 암호화
    secret: 'secrettkk',
    // 쿠키 설정과 동일
    cookie: {
        httpOnly: true,
        secure: false,
    },
    // 세션쿠키 이름(connect.sid가 기본값)
    name : 'beaver-cookie',
    // store : 세션 저장소, 기본값은 메모리
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

app.get('/', (req, res) => {
    const {user} = req.session; // 세션값들을 다 볼 수 있음
    if(user) {
        res.render('login' , {user });
        return;
    }
    res.render('index');
});

// 이름 등록
app.post('/', (req, res) => {
    const { name } = req.body;
    req.session.user = name;
    res.redirect('/');
    // 개발자모드 - Application - Storage - Cookies 에서 확인
})

// 세션 삭제
app.get('/delete', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

// 세션 데이터 보기
app.get('/lookSession', (req, res) => {
    res.render('sessionData', { sessions: req.session });
})

// 세션 데이터 추가
app.get('/addSession', (req, res) => {
    req.session.addData = 'addData';
    console.log(req.sessionID);
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
