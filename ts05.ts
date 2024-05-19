//타입스크립트를 실행하려면 tsc -w 터미널에 입력

let 문자열_js = 'str';
let 문자열 : string = "str";
//문자열 = 12; //타입체크 => 에러발생(타입스크립트)
//string , number, boolean.. 간단한 타입은 생략가능
//대입한 초기값에 따라 자료형 정해줌

let 문자열과숫자 : (string|number) = 1;
문자열과숫자 = '문자';

let 배열 = [1,2,3]; //number[]
//fetch 데이터를 받아온다. [] : 비어있음 => [데이터, 데이터] : 문자열 또는 숫자
let fetch배열 : (undefined|string|number)[] =  [1,'2','3'];

function 데이터사용(x : (undefined|string|number)[]) : number {
  if (typeof x[0] === 'string'){
      return Number(x[0] + '1');  //이어 붙인 다음에 숫자로 변환
  } else if (typeof x[0] === 'number'){
      return x[0] + 1;
  } else {
      return 1;
  }  
};

데이터사용(fetch배열);

//함수의 return이 없으면 void
//void : 비어있다.
//숫자를 매개변수로 받아서, 리턴값은 없는 함수

function 리턴없음(num?: number) : void {
  if(num){
    console.log(num);
  }
  else {
    console.log('없음');
  }
  
}

//타입스크립트는 자바스크립트와는 다르게 매개변수로 만든 만큼 채워줘야 사용가능
리턴없음(3);
리턴없음();  //매개변수의 수를 맞춰줘야함[매개변수에 ? 사용 안할시]
//해당 매개변수에 대해 비워줘도 되게 하고 싶은면 매개변수 + ? 사용

