//제네릭 타입 <>
//사용하는 곳에서 타입을 결정 <T>
//타입을 알수 없는 배열이 들어오면 그배열의 첫번째 요소만 리턴하는 함수
function 제네릭함수(arr) {
    return arr[0]; //매개배열의 첫번째 요소만 리턴
}
//제네릭함수 사용시 -> 제네릭함수<type>();
//함수를 사용하는 곳에서 타입 결정<제네릭>
var 결과1 = 제네릭함수([1, 2, 3]);
var 결과2 = 제네릭함수(['a', 'b', 'c']);
console.log(결과1);
console.log(결과2);
