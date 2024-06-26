//변수에 대입될 수 있는 값을 미리 정해 놓는다.
//Literal Types

namespace TS07{
  let 변수 : '홍길동'|'김유신'|'이순신';  //홍길동 | 김유신 | 이순신   지정한 값만 설정할 수 있음
  변수 =  '홍길동'; //'str'; <= 에러

  //함수의 매개변수나 리턴값에 내가 지정한 값만 받거나 내보낼수 있음
  function 가위바위보(str : '가위'|'바위'|'보'){

  }

  //1 또는 0만 받고, 1또는 0만  return
  function 참거짓(num : 1|0) : (1|0) {  //return 값에 1|0을 설정해주어 1또는 0만 return 가능
    return 1; //1, 0 이외에는 에러
  }
}
