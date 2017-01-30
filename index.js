var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8000); //lắng nghe ở port 8000

app.get('/', function (req, res) { //tạo webserver khi truy nhập đường dẫn "/".
  res.sendfile(__dirname + '/index.html'); // thì mở nội dung ở file index.html lên
});

io.on('connection', function (socket) {//sau khi client kết nối tới server 
	//khi server nhận được yêu cầu "bật" từ client
  socket.on('bật', function () {
		console.log("bật")
  });
  //khi server nhận được yêu cầu "tắt" từ client
  socket.on('tắt', function () {
		console.log("tắt")
  });
  //khi server nhận được yêu cầu "nhấp nháy" từ client
  socket.on('nhấp nháy', function () {
		console.log("nhấp nháy")
  });
});


console.log("Đã khởi động socket server")