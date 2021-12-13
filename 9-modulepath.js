const os = require('os')
const path = require('path')

const user = os.userInfo()

console.log(user)


//let get the system up time 

console.log(`the system uptime ${os.uptime()}`)

const currentOs = {

    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
    
}

console.log(path.sep)

console.log(currentOs)




