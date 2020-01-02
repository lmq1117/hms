import request from '@/utils/request'

const BASE_URL = '/api'

request.post(BASE_URL + '/sport')
    .then(response => {
        console.log('testProxy1', response.data.data[0].Content)
    })
    .catch(error => {
        console.log(error)
    })