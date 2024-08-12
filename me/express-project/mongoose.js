// 建立数据库连接

var mongoose=require('mongoose')
var url="mongodb://localhost:27017/test";

mongoose.connect(url)

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("success connection to"+url);
});