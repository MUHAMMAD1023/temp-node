const os = require('os')
//info user
const user = os.userInfo()
console.log(user)
//system uptime
console.log(`the system uptime is ${os.uptime()} seconds`)
const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)
