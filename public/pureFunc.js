 var oa = {
    a:1,
    b:2,
    c: {
        ca:11,
        cb:12,
        cc:{
            da:111,
            db:112
         },
        cd:{
            da:211,
            db:222
        }
    }
}
    //복사하는 함수를 만들어라. 객체 안에 또 객체가 있어서 객체 안의 모든걸 전부 복사한다. 모든 객체를 복사할 수 있는 함수를 만들라.

    var pure = function(p, myself){
        var coopyObejct = Object.assign(p);
        return copyOject;
    }
    var arr = [a, b, c];
    var compose = function(arr1, arr2, arr3) {
        return function(arg){
        return arguments.reduce( function(composed, f) {
            return f(composed), arg
         })
        }
    }

    var compose2 = function(func1, func2) {
        return func2(func2(arg));
    };
    var both = compose2(a, b);
    console.log(both)

    function a(value) {
        return value+1;
    }

    function b(value) {
    return value *2;
}

    /*var both = compose( a, b)
    // var both = function(arg) {
        return  a
    }*/
    both(new Date())