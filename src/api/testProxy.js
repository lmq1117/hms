import request from '@/utils/request'

request.post(process.env.VUE_APP_BASE_API + '/sport')
    .then(response => {
        console.log('testProxy1', response.data.data[0].Content)
    })
    .catch(error => {
        console.log(error)
    })