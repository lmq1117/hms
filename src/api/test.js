import request from '@/utils/request'

const BASE_URL = 'http://localhost:9999'

//测试1 

request.get(BASE_URL + '/db.json').then(response => {
    console.log("get1", response.data)
}).catch(error => {
    console.log(error)
})

//测试2 使用对象方式传入请求配置

request({
    url: BASE_URL + '/db.json',
    method: 'get'
}).then(response => {
    console.log("get2", response.data)
}).catch(error => {
    console.log(error)
})
