var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ... 파라미터 (무한히 들어올 수 있는 매개변수)
console.log(1, 2, 3, 4, 5, 5); //...(rest Parameter)
//rest parameter(...) : 몇개가 입력될지 정확히 모를때, 배열형태로 무한히 받음
function 함수8() {
    var varialbe = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        varialbe[_i] = arguments[_i];
    }
    console.log(varialbe);
}
함수8(1);
함수8(1, 2, 3, 4, 'a', 'b'); // [1,2,3,4]
// ... : 나머지 파라미터(매개변수)
// ... : spread operator (배열/객체 분해)
var arr1 = [1, 2, 3]; //number[]
var arr2 = ['a', 'b', 'c']; //string[]
//unknown, any : 모두 가능
//배열을 붙일 때는 ...으로 분해후 합친 후 다시 []
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(arr3);
var _a = ['hello', 300], 변수명1 = _a[0], 변수명2 = _a[1];
var _b = { key1: true, key2: 30 }, key1 = _b.key1, key2 = _b.key2;
var obj08 = { key1: true, key2: 30 };
// <Component1 id:id, pw:pw/>
function Component1(props) {
    console.log(props.id);
    console.log(props.pw);
}
function Component2(_a) {
    var id = _a.id, pw = _a.pw;
    console.log(id);
    console.log(pw);
}
