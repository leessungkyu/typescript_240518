let _유니온 : (number | string ) = 123;
let _어레이 : (number | string)[] = [1,'2',3]
let _오브젝트: {str?:(string|number)} = {str: '33'}
let _숫자또는문자열: string|number;
let 모두 : unknown; //모든 타입 가능

//타입을 정해서 에러를 없애기
type Types = {
  num? : (number|boolean)[],
  str?:string,
  name?:(string|string[])
}
let 객체04 : Types= {
  num : [100,102,104],
  str : "str",
  name : "son"
}

객체04.num[4]  = false;
객체04.name = ['lee',객체04.str]


//2. 타입 정하기
let 사람04 : string= '홍길동'
let 나이04 : (undefined | number) = undefined;
let 성인04 : boolean = false;

나이04 = 33;
let 친구04 : (undefined|string|number|boolean)[] = [사람04, 나이04, 성인04];