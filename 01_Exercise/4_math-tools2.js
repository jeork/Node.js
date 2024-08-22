// JS파일 하나 = 하나의 모듈 이라고 했음
// 그런데 Node.js가 모듈을 로드할 때, 한 가지 해주는 작업이 있음
// 'Module Wrapper Function' 이라는 작업인데,
//    모듈 내의 전체 코드를 감싸주는 작업

// (function(exports, require, module, __filename, __dirname)){
// 모듈 코드
// }

// 의 형태

// 예를 들어 

// function add(a, b) {
//   return a + b;
//  }
// exports.add = add;

// 이런 코드를 

// (function(exports, require, module, __filename, __dirname)) {
//     function add(a, b) {
//         return a + b;
//     }
// }

// 이렇게 감싸준다는 의미!

function add(a, b) {
    return a + b;
}

// console.dir()은 특정 객체의 내부 속성을 출력해주는 함수
console.log('epxports------------>');
console.dir(exports);
console.log('require------------->');
console.dir(require);
console.log('module-------------->');
console.dir(module);
console.log('__filename------------>');
console.dir(__filename);
console.log('__dirname------------>');
console.dir(__dirname);

// exports 객체에는 아무 프로퍼티(속성)도 들어있지 않고,
// module 객체에는 다양한 프로퍼티가 존재함
// module 객체 안을 잘 보면 exports라는 프로퍼티가 있고,
// 그 프로퍼티는 빈 객체를 하나 가지고 있는데,
// 이 두 객체는 '동일한' 객체!
// 모듈 내부의 내용을 외부로 공개하기 위해서 사용했던
// exports나 module.exports 는 이 객체에 접근하기 위해 사용!


exports.plus = add;
console.log('epxports------------>');
console.dir(exports);
console.log('require------------->');
console.dir(require);
console.log('module-------------->');
console.dir(module);
console.log('__filename------------>');
console.dir(__filename);
console.log('__dirname------------>');
console.dir(__dirname);

// exports 객체에 plus 라는 프로퍼티가 추가되었고,
// 그 값이 add함수인 것이 확인됨
// module객체의 exports 프로퍼티 가 가리키는 객체도 당연히 똑같이 변함
// 바로 이 객체가 다른 모듈에서 require 함수로 이 모듈을 로드할 때 리턴되는 객체!
// ex)main.js
// const m = require('./4math-tools.js');로 로드하면 
// require 함수는 export 객체
// ( 
// (=module 객체의 exports 프로퍼티가 가리키는 객체 )를 리턴
// 그럼 그냥 exports = 객체로 객체 하나를 공개하면 되지않나?
// exports 객체와 module 객체의 exports 프로퍼티가 가리키는 객체는
// 분명 동일한 객체이지만,
// require 함수는 module 객체의 exports 프로퍼티가 가리키는 객체를
// 리턴하기 때문에
// exports 객체를 아예 새로 설정해버리게 되면,
// 더 이상 원래의 객체에 접근할 수 없게 됨
// 그래서 exports 키워드로는 exports속성 = 값 혛태로만
// 객체의 속성만 추가하는 방법으로 사용이 가능함
// 대신 
// module.exports 객체의 형식뿐만 아니라
// module.exports.속성 = 값의  형태도 사용이 가능함!