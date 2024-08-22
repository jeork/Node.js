// NPM 은 Node Package Manager의 약자로,
// node로 생성한 프로젝트/패키지

// npm init -y : npm을 쓸 수 있는 초기 환경을 설정
// -y : 일일히 입력해서 설정한 후 yes 입력해야 하는데
// 입력없이 한번에 천리해줌
// 그리고 이러한 패키지/프로젝트 정보를 가지고 있는 것이
//      생성된 pacage.json파일

// {
//     "name": "02_install_npm",  // 프로젝트의 이름
//     "version": "1.0.0",          //프로텍터의
//     "main": "main.js",        // 진입점이 되는모듈
//     "scripts": {         // 스크립트 명량어를 담고잇음
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": [],  // npm search할 때 해당 패키지를 ��을 때 ��� ���워드
//     "author": "",    // 작성자
//     "license": "ISC",    // 패키지에 대한 권한
//     "description": ""    // 이 프로젝트에 대한 설명
//     "dependencies": {  // 모듈 의존성 패키지
//   }

// 3rd party module 불러오기
// 터미널 npm install cowsay
// package-lock.json이 생기고, package.json 둘다 
// cowsay에 대한 depnendencies가 생긴 것이 확인 됨!
// package-lock.json : 나중에 이 프로젝트를 배포할 때
//                     이 프로젝트에 필요한 모듈의 버전을 명시해둔 곳
// 이걸 토대로 다른 컴퓨터에서 이 프로젝트를 실행 할 때
// 그 내용을 바탕으로 npm install 하면
// 관련된 모듈들이 한번에 설치가 됨!

const cowsay = require('cowsay');

console.log(cowsay.say({
    text : 'I Love Sogogi!',
}));