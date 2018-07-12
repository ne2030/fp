const _ = require('partial-js');

const getChangeCount = (a, b) => {
    _.go(b.split(''),
        _.map((al) => _.reduce(a, (memo, cur, idx) => {
                cur === al ? momo.push({
                    idx, str: 
                });
            }, [])

        ))
    )
}
//
//
// abcdefgh
//
//
// a h cdef
//
// // 1) 연속되는 원본 스트링의 파트를 쪼갠다
//
// cdef hh  abc jj acb
//
// abcdef
//
// 1
// 2
// 3
// 4
// 5
// 6
// 7 [abc]
// 8 [bc]
// 9 [c]
//
// [{ idx: , len: , str: }]
//
// o * n
// [{ idx: 7, len: 2, str: 'ab'}, { idx: 10, len: 1, str: 'a'},
// { idx: 8, len: 1, str: 'b'}, { idx: 12, len: 1, str: 'b'}, { idx: 1, len: 3, str: 'cde'},
// { idx: 11, len: 1, str: 'c'}, { idx: 2, len: 2, str: 'de'}, { idx: 3, len: 1, str: 'e'}]


// acba -> 같은게 두번 나오는 패턴
// 연속된게 겹쳐있는 패턴
//
