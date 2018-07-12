const _ = require('partial-js');
const log = (...a) => { console.log(a); return a; }

const obj = { a: 10, b: 20, c: 30 };
const arr = [1, 2, 3, 4, 5];

// log(_.indexOf(5)(arr));
_.reduce(arr, (memo, cur, idx, a) => {
    log(memo, cur, idx, a);
    // log(memo, cur, idx, a);
}, undefined);
