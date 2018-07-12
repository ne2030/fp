// 순수함수

// 부수효과

// 꼭 필요한 부수효과

// 부수효과가 아예 없을 수는 없고, 부수효과는 로직의 결과
// 중간에 state 를 계속 바꾸면서 하는게 아니라 최종적으로 바꾸는 것이, 함수형의 목적

function constant (v) {
    return () => v;
}
const always10 = constant(10);
console.log(always10());

// immutable

// repeat


function repeat(count, f) {
    while(count--) f();
}

repeat(5, () => {
    console.log(2);
});

// 변수 사용 줄이기, 값 변경 줄이기, 부수효과 줄이기, 문(statements) 보다는 표현식(expressions) 위주로 사용

function filterPrice() {

}
_.filter(products, (product) => product.price > 20000);

_.go(products,
    _.filter(products, (product) => product.price > 20000),
    _.each(product => console.log(product.name))
)

// 다형성이 좋기 때문에, 어떤 형인지 잘 드러나지 않고 그게 함수형의 특징
// --> ts 와 맞지않는 첫 번째 이유가 될 듯
// 강타입 언어랑 잘 맞지가 않음, 강타입에서도 함수형을 하려는 시도가 있는데 general 같은 any 와 같은 타입을 만들어서 강타입이지 않은 것 같은
// 방식으로 함수형 프로그래밍을 하려는 노력이 있다.
// ? 하스켈은 강타입이라 카더라... 흠..

// get 함수 (get, set)

const get = curryr(function (obj, key) {
    return obj[key];
});

// -> go 같은 곳에서 표현력을 더 높일 수 있음
// _.go(obj, get('price'), )



/* 1. 비동기 잘 다루기
- 리턴값으로 소통하기
- 원하는 순서대로 함수 실행
- 표현식 코딩
- 재귀함수 연습
*/

// 2. 기본기
// callback vs promise (callback 은 리턴값이 undefined 인데, promise 는 리턴이 되는 것)
// 프로미스는 모나드 라는 말이 있었음

// 변수에 프로미스를 담아둘 수 있고, 원하는 시점에 그걸 다시 쓸 수 있다는 점이 좋음

const a = async_add(5);

console.log(2);
const c = 10;

a.then((res) => res++);

// reduce 프로미스 다루기
function reduce() {

}

// 리턴값 go 로 가둬서 표현식 만들기

// 표현식으로 가두고, 리턴을 바로 하기 때문에 바로 비동기를 적용할 수 있다
// map 도 아무것도 안해도 됨...?!??? -> reduce 를 써서 map 을 만들었기 때문에 가능!
// TODO: 비동기 제어하는 reduce 만들어보기

// map 과 cmap (concurrency)
var cmap = curryr(function(list, mapper) {
    return go(list,
        map((val) => constant(mapper(val))),
        map(call)
    )
});

// 콜스택이 비워질 떄 렌더링
