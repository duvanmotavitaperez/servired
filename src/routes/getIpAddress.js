var os = require('os');
function getIpAddress(){
    var ipAddress
    var ifaces = os.networkInterfaces()
    
    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0
        ifaces[ifname].forEach(function (iface) {
            if (iface.family !== 'IPv4'   || iface.internal !== false || iface.address.includes("169.254")) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses AND skip protocol APIPA too
                return;
            }

            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                ipAddress = iface.address
            } else {
                // this interface has only one ipv4 adress
                ipAddress = iface.address
            }
            ++alias
        })
    })
    return ipAddress
}

module.exports = getIpAddress()