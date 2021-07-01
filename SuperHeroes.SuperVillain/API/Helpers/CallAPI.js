const request = require('supertest');

module.exports = {

    callPostApi : async (server, path, data) => {
        return request(server)
            .post(path)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(data)
    },

    callGetApi : async (server, path) => {
        return request(server)
            .get(path)
    },

    callPutApi : async (server, path, data) => {
        return request(server)
            .put(path)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(data)
    },

    callDeleteApi : async (server, path) => {
        return request(server)
            .delete(path)
    }

}