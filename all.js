var ipList = []
var reg = /([0-9]+\.){3}[0-9]+/
$("#pdata tr").each(function(){
    var ip = $(this).children("td").eq(1).text()
    console.log()
    var reg_ip = reg.exec(ip)
    if(reg_ip != null&&reg_ip.length>1){
        ipList.push(reg_ip[0])
    }
})
console.log(ipList)
