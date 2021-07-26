let fs =require('fs')

fs.readFile("my.json", "utf8", function(err, data) {
    if (err) throw err;
    let obj = JSON.parse(data);
    obj.date = new Date().toLocaleString();
    fs.writeFile("my.json", JSON.stringify(obj), function(err){
        if (err) throw err;
    })
})
