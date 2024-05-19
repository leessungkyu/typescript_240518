// 타입스크립트는 타입저장(변수처럼: type alias)
type myType = string|number|undefined;
let myVar : myType = 'str';
myVar = 13;

//객체 타입
type 동물 = {
  나이: number,
  종: string
}

//객체속성추가 (&)
type 강아지 = 동물 & {짖기: string}; // 나이number, 종:string,짖기:string
let 멍멍이 : 강아지 = {
  나이 : 3,
  종 : "강아지",
  짖기: "왈왈"
}