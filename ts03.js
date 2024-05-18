var objvar = { age: 33, height: 172.3 }; //객체에 각 요소값에 숫자만 넣을것임
//클래스
var MyClass = /** @class */ (function () {
    function MyClass(매개변수) {
        this.멤버변수 = 매개변수;
    }
    return MyClass;
}());
//constructor : 생성자(클래스를 객체화하는 순간 발동되는 함수)
//let 객체1 = new MyClass(3.141592);   //자료형 불일치
var 객체1 = new MyClass("str");
var 객체2 = new MyClass("str2");
