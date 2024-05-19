"use strict";
// export/ import
//타입스크립트도 자바스크립와 동일하게 export/import 가능
//변수, 함수 만들때 타입을 지정하는 것 외에는 자바스크립트와 동일 (+타입스크립트 전용 자료형이 있음)
Object.defineProperty(exports, "__esModule", { value: true });
exports.함수10 = exports.num = exports.글자변수 = void 0;
// js10.js에서 만든 변수나 함수를 내보내고 싶으면 앞에 export을 붙여줌
// 가져올때는 import {변수명, 함수명} 래그 '파일명';
//export로 내보내줘야 다른 파일에서 추가 가능
exports.글자변수 = 'variable'; // import {글자변수} from './ts10';
exports.num = 3; // import {글자변수, num} from './ts10';
function 함수10() {
    return 10;
}
exports.함수10 = 함수10;
var 중복방지_네임스페이스;
(function (중복방지_네임스페이스) {
    중복방지_네임스페이스.newVar = '3.14';
})(중복방지_네임스페이스 || (중복방지_네임스페이스 = {}));
var r = 중복방지_네임스페이스.newVar;
