const fs = require("fs");

// 파일 쓰기

// writeFile() : 파일이 존재하지 않으면 파일을 생성하고 내용을 적어냄
// 이어 쓰기 기능 X => appendFile()

let data = "파일 시스템 예제";

// console.log('파일을 생성합니다');

// fs.writeFile('text1.txt', data, 'utf-8', function(error) {
//     if (error) {
//         throw error
//     }
//     // 정상적으로 만들어졌으면
//     console.log('파일이 성공적으로 생성되었습니다.')
// });
// console.log('파일 생성 중...');

// 파일을 생성합니다
// 파일 생성 중...
// 파일이 성공적으로 생성되었습니다.

// 이건 Node.js 개발자의 큰 그림
// 이렇게 소스코드의 작동 순서가 위에서 아래로 순차대로
// 실행되지 않는 이 상황을 비동기(Async)라고 함
// 순서의 작동을 보증하지 않는다는 뜻!

// 이 비동기 방식은 이런 현상을 없애줍니다(렉)
// 파일을 생성하면서, 동시에 다른 작업도 가능하게 해줌

// 비동기의 장점
// 간단한 작업을 하기 위해서
// 오래 걸리는 작업을 기다릴 필요가 없다

// 파일 삭제
// fs.unlink('text1.txt', function(error) {
//     if (error) {
//         throw error
//     }
//     console.log('text1.txt 파일이 성공적으로 삭제되었습니다.')
// });

// 렉걸려도 순서대로 진행되는게 좋다
// => fs.writeFileSync() : writeFile()과 동일, sync(동기)로 동작

// console.log("파일을 생성합니다");
// console.log("파일 생성 중...");
// fs.writeFileSync("text1.txt", data); // encoding : 기본값이 'utf-8'
// console.log("파일이 성공적으로 생성되었습니다.");


// 파일 읽기
// fs.readFile('text1.txt', 'utf-8', function(error, data) {
//     if (error) {
//         throw error;
//     }
//     console.log(data);
// });

// 파일 이어서 쓰기
fs.appendFile('text1.txt', ' \n데이터 추가하기!', 'utf-8', function(error) {
    if (error) {
        throw error;
    }

    console.log('데이터 추가 성공!');
    // test0410
});
