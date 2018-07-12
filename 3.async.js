const { log } = require('./fpHelper');

function publicAsync() {
    const _async = func => (...params) => {
        var _callback;
        params[params.length++] = result => _callback(result);
        func.apply(null, params);

        return callback => (_callback = callback);
    }

    const add = function add(a, b, callback) {
        setTimeout(() => {callback(a + b)}, 1000);
    };

    const add1 = _async(add);

    add1(20, 30)((r) => console.log(r));
}

// custom async wrapper (good!)

function customAsync() {
    const _async2 = fn => (...params) => cb => fn(...params, cb);

    const add2 = _async2(add);

    const add2Result = add2(100, 200);

    add2Result(function (result) {
        console.log(result);
    });
}


// 유명함수 name 프로퍼티??
function getFunctionName() {
    function testFnName () {}

    log(testFnName.name);
}

// wrapping 을 사용한 async parameter 컨트롤

function asyncParameterControl () {
    const _async = func => function () {
        var _callback;
        arguments[arguments.length++] = result => _callback(result);

        (function wait (args) {
            for (var i = 0; i < args.length; i++)
                if (args[i] && args[i].name == '_async_cb_receiver')
                    return args[i](function(arg) { args[i] = arg; wait(args); });
            func.apply(null, args);
        })(arguments);

        return function _async_cb_receiver(callback) {
            _callback = callback;
        }
    }

    const add = _async(function (a, b, callback) {
        setTimeout(() => { callback(a + b); }, 1000);
    });

    const sub = _async(function (a, b, callback) {
        setTimeout(() => { callback(a - b); }, 1000);
    });

    const log = _async(function (val) {
        setTimeout(function () {
            console.log(val);
        }, 1000);
    })

    log(add(add(10, 20), sub(100, 70)));
}

// wrapping 을 사용한 async parameter 컨트롤

function asyncParamControl2 () {
    const _async = fn => (...params) => cb => fn(...params, cb);

    const add = _async((a, b, callback) => { setTimeout(() => {callback(a + b)}, 1000); });



    add2Result(function (result) {
        console.log(result);
    });
}
