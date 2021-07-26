// let fs = require('fs');

// fs.open("my-file.txt", "w", function(err, fd) {
//     if (err) throw err;
//     console.log("file created");
//     console.log(fd);
// })

// fs.writeFile("my-file.txt", "Новая \nзапись", function(err){
//     if (err) throw err;
//     console.log("Запись завершена")
// })

// fs.appendFile("my-file.txt", "!!!!", function(err){
//     if (err) throw err;
//     console.log("Запись завершена")
// })

// fs.readFile("my-file.txt", "utf8", function(err, data){
//     if (err) throw err;
//     console.log(data);
// })

// fs.readFile("logo.png", function(err, data){
//     if (err) throw err;
//     console.log(data);
// })

//1. Подсчёт количества цифр в файле
// fs.readFile("my-file.txt", "utf8", function(err, data){
//     if (err) throw err;
//     let count = 0;
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] >= "0" && data[i] <= "9") {            
//             count++;
//         }
//     }
//     console.log(count);
// })

// 2. Запись информации о текущей дате
// let date = new Date();
// fs.writeFile("date.txt", date.toLocaleString(), function(err){
//     if (err) throw err;
// })

// 3. Логи
// let date = new Date();
// let str = "Запуск: " + date.toLocaleString() + "\n";
// fs.appendFile("date.txt", str, function(err){
//     if (err) throw err;
// })

//4. JSON
// fs.readFile("my.json", "utf8", function(err, data) {
//     if (err) throw err;
//     let obj = JSON.parse(data);
//     obj.date = new Date().toLocaleString();
//     fs.writeFile("my.json", JSON.stringify(obj), function(err){
//         if (err) throw err;
//     })
// })

//5. Сервер
let http = require('http')
let url = require('url')
let fs = require('fs')

let server = http.createServer(function(req, res) {
    let data = url.parse(req.url);
    console.log(data.pathname);
    if (data.pathname == "/favicon.ico") {
        fs.readFile("logo.png", function(err, data){
            if (err) throw err;
            res.end(data);
        })
    } else
    if (data.pathname == "/") {
        fs.readFile("my page.html", function(err, data){
            if (err) throw err;
            res.end(data);
        })
    } else 
    if (data.pathname == "/json") {
        fs.readFile("my.json", "utf8", function(err, data) {
            if (err) throw err;
            res.end(data);
        })
    } else
    {
        console.log(data.pathname.substring(1))
        fs.readFile(data.pathname.substring(1), function(err, data){
            if (err) throw err;
            res.end(data)
        })
    }
})
server.listen(8080);