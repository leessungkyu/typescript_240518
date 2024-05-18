//매개변수가 공용체(유니온: 여러개의 자료형)일 경우 if문으로 자료형을 검사한다.
function 내함수(num : (number | string)) : number {
  //숫자면 곱하기
  //문자열 -> 에러
  //모호한 상황일때는 if문으로 나누어 자료형을 확인하고 계산
  if (typeof num === 'number'){      //숫자일 경우
    return num * 2;
  }
  else if (typeof num === 'string'){ //문자열일 경우
    let temp = Number(num);  // 문자열 -> 숫자
    return temp * 2;
  }
  else {
    return 0;  //else if를 쓰면 else까지 사용해야하는 버전도 있음
  }
}

내함수(3)
내함수('3')