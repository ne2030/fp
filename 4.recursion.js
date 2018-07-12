const log = (arg) => { console.log(arg); return arg; };

/*
* 화살표 함수로 만드는 재귀
*/
((a, b) => (f => f(f)))(f => log(a) && a++ === b || f(f))(1, 5);
// 1 2 3 4 5

/*
* 일반 함수로 만드는 재귀
*/
(function (a, b) {
    (function (f) {
        f(f);
    }) (functoin(f) {
        log(a) && a++ === b || f(f);
    });
})(6, 10);
// 6 7 8 9 10

const start = f => f(f); // 이렇게 쪼개는 이유? 뭔가 직관적으로 이게 무슨 형태인지, 어떤 의미인지 모르겠음... 재귀 자체를 아직 확실하게 이해 못한 것 같기도
const logger = (a, b) => start(f => log(a) && a++ === b || f(f));
logger(6, 10);
// 6 7 8 9 10

// 재귀를 통해 구현한 each

const each = (arr, iter, i = 0) => start(f => iter(arr[i]) || ++i < arr.length && f(f));
each([5, 2, 4, 1], (v) => console.log(v));
// 5 2 4 1

// --> 단점은 iter 에서 리턴을 하게 될 경우, 재귀가 멈추게 됨
