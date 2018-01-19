
function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n-1) + fibonacci(n-2)
}

//注意：必须使用 onmessage 变量名接收
var onmessage = function (e) {
    var result = fibonacci(e.data)
    postMessage(result)
}