const _ = require('partial-js');
const log = (a) => { console.log('log:: ', a); return a; };
// 다형성 굿

const step1 = () => {
    // 객체 중심
    [1, 2, 3, 4].map(log);

    // vs

    // 함수 중심
    _.map([1, 2, 3, 4], log);
}


// 요상한 동작 - 인자
function step2() {
    function test (a, b) {
        b = 10;
        console.log(arguments);
    }

    test(1); // [1]
    test(1, 2); // [1, 10]
}

function step3 () {
    function tailCallOptimization() {
        return lastFunctionCall();
    }
}

step2();
