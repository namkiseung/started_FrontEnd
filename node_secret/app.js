const express = require('express');
const moment = require('moment');
const http = require('http') //http웹서버가 되기 위해 http모듈 사용
const app = express();
const bodyParser = require('body-parser'); //이걸 써야 post method 사용가능(미들웨어임)
const mysql = require('mysql');//mysql 모듈 불러오기
/*
//이 코드는 createServer에 의해 만들어진 서버를 제어할 수 있게 하는 객체를 리턴함.
const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello');
})
*/
//템플릿 쓰기 위한 미들웨어 세팅
app.set('views', './views'); //렌더링 관련 데이터 디렉터리
app.set('view engine', 'jade') //템플릿 엔진 등록

app.use(bodyParser.urlencoded({ extended: true }));
app.locals.pretty = true; //소스의 가독성 좋게 하기 위해 사용
//app.use('/public');
app.use('/public', express.static(__dirname + '/public'));
app.use(function timeLog(req, res, next){
    let day_time = Date.now();
    let result = moment(day_time);
    console.log(`Time ${ result }`);
    next();
});
//mysql 커넥션 생성
var connection = mysql.createConnection({
    host : "127.0.0.1", //서버 로컬 IP
    port : 3306,
    user : "root", //계정 아이디
    password : "111111", //계정 비밀번호
    database : "manage_console" //접속할 DB
});
//mysql 접속
connection.connect();

//기본 최상위 디렉터리 라우팅 설정 + get api 예제 라우팅
app.get('/', function (req, res){
   //로그인 성공 -> /index -> '목록 열거'
   //로그인 실패 -> /login 경로로 이동
   res.send('hello world');
});
app.get('/index', function(req, res){
    connection.query(`select * from managesite`, function(error, result){
        if (!error){
            res.render('index',{name:result});
        }
    });
});


app.get('/login',function (req, res){
    res.render('login');
});
app.post('/login_chk',function(req,res){
    let userid = req.body.username;
    let userpw = req.body.password;
    //DB쿼리 날려서 userid와 userpw 받자.
    connection.query(`select * from user where userid="${userid}" and userpw=hex(aes_encrypt(SHA2("${userpw}", 256), "4351"))` , function(error, result, fields){
            if (error) { //에러 발생시
                console.log(`DB에러`);
            }else { //user테이블에서 쿼리 리턴 받아옴.
                let tmp_userid = JSON.stringify(result[0].userid);
                if(tmp_userid == `"${userid}"`){ //데이터베이스에서 로그인한 아이디 있는지 검증
                    //비밀번호가 맞는지 확인(db에서)->"일단은 query에서 검증하니 기능보류"
                    console.log(`(1) ${res.statusCode}`);
                    res.redirect("/index");//리다이렉트 들어간다. 
                    res.end();
                }else{
                    console.log(`else 에러`);
                }
                console.log(`db성공 else처리 끝나고`);
            }
            console.log(`db의 query block의 마지막`);
    });
    console.log(`db의 connect이 끝나고`);
});
/*
app.route('/user')
.get(function (req, res){
    res.send(
        `<!DOCTYPE html>
        <html>  
            <head>
            </head>
        
            <body>
                <form action = "http://127.0.0.1:3000/user" method='post'> 
        <input type='text' name='id'/><br><input type='text' name='pw'/><br><input type=submit value=submit></form>
            </body>
        <html>`);
})
.post(function(req,res){
    var userid = req.body.id;
    var userpw = req.body.pw;
    console.log("req.body.id"+userid)
    res.send(`hello myname : ${userid} and pw : ${userpw}`);
});
*/

// user 라우터
app.get('/see', function (req, res) {
        //SQL문 실행
        connection.query("select userid, userpw from user" , 
            function (error, result, fields) {
            if (error) { //에러 발생시
                res.send('err : ' + error);
            }
            else { //실행 성공
                console.log('success query: '+ JSON.stringify(result));
                res.send('success query: '+ JSON.stringify(result[0].userid) );
            }
        })
    });
//서버 시작
app.listen(3000, function () {
    console.log("server starting with 3000")
});