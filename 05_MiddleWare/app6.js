const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();



app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

try{
    fs.readdirSync('uploads'); // 폴더 확인
} catch(err) {
    console.log('uploads 폴더가 없습니다. 폴더를 생성합니다.');
    fs.mkdirSync('uploads'); // 폴더 생성
}

const upload = multer({
    storage: multer.diskStorage({ // 저장할 공간 정보 : 하드디스크에 저장
        destination(req, file, done) { // 저장 위치
            done(null, 'uploads/'); // uploads라는 폴더안에 저장
        },
        filename(req, file, done) { // 파일명을 어떤 이름으로 올릴지 
            const ext = path.extname(file.originalname); // 파일의 확장자
            done(null,path.basename(file.originalname, ext) + ext); // 파일이름 + 확장자 이름으로 저장
        }
    }),
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB로 용량 제한
});



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/upload', (req, res) => {
    res.render('upload');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// 이미지 불러오기
app.use('/uploads', express.static('uploads'));

// 위에서 설정한 upload 객체 변수를 라우터에 장착
// 파일 업로드 같은 동작은 특정한 라우터에서 일어나기 때문에
// 굳이 app.use()에는 장착하지는 않는 편
// upload.single('image')
// : 'image' 이름은 uploads.html의 <input type="file" name="image">
// 에서 폼데이터 이름으로 온 것!
app.post('/upload',upload.single('image'), (req, res) => {
    // upload.single('image')으 ㅣ업로드 정보가 req.file에 있고
    // <input type="text" name = "title">의 텍스트 정보가 req.body에 있음
    console.log(req.file, req.body);
    // 주소로 불러올 때는 꼭 http:// 프로토콜 적어주기!
    res.send('<img src=http://localhost:3000/uploads/' 
        + req.file.originalname + '>');
});


