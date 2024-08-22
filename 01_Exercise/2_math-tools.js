// function add(a, b) {
//     return a + b;
// }   

// add 함수를 모듈 외부로 공개하기!
// exports : 내보내다

// exports.add = add;
// 앞에 있는 add : 모듈 외부로 공개할 이름
// 뒤에있는 add : 모듈 내부에서의 이름

exports.PI = 3.141592;
exports.add = function(a, b) {return a + b;};
exports.subtract = function(a, b) {return a - b;};
exports.multiply = function(a, b) {return a * b;};
exports.divide = function(a, b) { return a / b;};

// 객체로 표현하기
let calculator = {
    PI: 3.141592,
    add: function(a, b) {return a + b;},
    subtract: function(a, b) {return a - b;},
    multiply: function(a, b) {return a * b;},
    divide: function(a, b) { return a / b;} 
};

module.exports = calculator;
// 위에서 만든 내용을 전부 다 하나의 객체에 넣어버렸음
// => calculator 라는 객체의 속성과 메소드가 되었음
// 또한 이 객체 자체를 그대로 외부에 공개를 함

// exports : 공개하고 싶은 것을 하나씩 공개할 때
//          exports.속성 = 값
// module.exports : 공개하고 싶은 것들을 모아서 하나의 객체로 만들어서 공개할 때 
//          module.exports = 객체
