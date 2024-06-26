//.ts : 타입스크립트 파일
//.tsx: jsx용 타입스크립트 파일


//npm instal -g typescript
// tsconfig.json파일을 생성하고 아래와 같이 입력
/*
{
  "complierOptions" : {
    "target": "ES5",
    "module": "CommonJS"
  }
}
*/
//tsc -w 러 실행 (.js 파일로 변환)
//index.ts => index.js로 생성
//자바스크립트에 type검사를 강화한 버전


let myName = '홍길동'
myName = '김유신'
//myName = 33    //자료형이 달라서 에러(타입스크립트)

//String, number, boolean, null, undefined, [], {}, bigint
let 이름 : string = '사과'  //타입스크립트는 변수명 뒤에 ": 자료형" 을 추가
let 숫자 : number = 12.3  //숫자만 입력 
let 숫자배열: number[] = [1,2,3]  //숫자로만 이루어진 배열
let 문자열배열 : string[] = ['a','b','c']  //문자열로만 이루어진 배열
let 객체 : {이름:string, 나이:number} = {이름:'김유신',나이: 33} //객체타입

let 오브젝트 : {_name:string, _age:number,_adult:boolean} = {
  _name:'이름',
  _age: 33,
  _adult: true
}


///////////////////////////////////////////////////////////////////////////////////////////
// title, btn 
let title = document.getElementById('title');
// 버튼누르면 title태그의 html내용을 반갑습니다. 로 변경
let btn = document.getElementById('btn');

let flag = false;
if (btn!= null){
  btn.addEventListener('click',()=>{
    if(title != null){
      if(!flag){
        title.innerHTML = '반갑습니다.' ;
        flag = true;
      } else {
        title.innerHTML = '제목' ;
        flag = false;
      }
    } 
  }) 
} else {
  console.log('btn없음');
}