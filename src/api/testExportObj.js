import request from '@/utils/request'

const BASE_URL = 'http://localhost:9999'

export default {
    getList() {
        const req = request({
            url: BASE_URL + '/db.json',
            method: 'get'
        })
        return req;
    }
}