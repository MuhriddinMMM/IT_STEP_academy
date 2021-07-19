const os = require('os')
console.log("operatsionnaya sistema ", os.platform());
console.log("arxitektura protsessora ", os.arch());
console.log("isfo process ", os.cpus());
console.log("svobodnaya pamyat ", os.freemem());
console.log("vsevo pamyat ", os.totalmem());
console.log("domashnaya irektoriya ", os.homedir());
console.log("vkluchena ", os.uptime());