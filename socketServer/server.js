/*
* @Author: Venus-Lin
* @Date:   2018-11-11 14:23:29
* @Last Modified by:   Venus-Lin
* @Last Modified time: 2018-11-11 16:27:14
*/
// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 3000
});

let connectNum = 0

wss.broadcast = function (data) {
    wss.clients.forEach(function (client) {
        client.send(data);
    });
};

wss.on('connection', function (ws) {
    console.log(`连接成功`);
    connectNum++;
    console.log(connectNum)
    console.log('客户端数量'+wss.clients.length)
    ws.on('message', function (message) {
        console.log(`服务器接收到您发的内容：${message}`);
        wss.broadcast(message)
    })
});