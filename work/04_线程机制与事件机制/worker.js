
//3.接收请求
var onmessage = function (e) {
    console.log(e.data);
    //4.响应结果
    postMessage('你好，分线程')
}