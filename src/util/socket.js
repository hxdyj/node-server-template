module.exports = (server) => {
	let io = require('socket.io').listen(server); //引入socket.io模块并绑定到服务器
	//socket部分
	io.on('connection', function (socket) {
		//接收并处理客户端发送的foo事件
		socket.on('foo', function (data) {
			//将消息输出到控制台
			console.log(clc.blue('test socket connect:', data));
			socket.emit('msg', {
				text: '你上线了'
			});
			socket.broadcast.emit('broadcast', 'haha');//自己收不到，只有其他人收到
		})
	});
}
