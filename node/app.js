const Fastify = require('fastify')
const mail = require('./mail.js')
const server = Fastify()
const request = require('request')

server.get('/', (request, reply) => {
    mail().then(data => reply.send({status: 'ok', data: data})).catch(err => reply.status(500).send({status: 'ko', err: err}))
})

server.get('/nginx', (request_value, reply) => {
    request('http://161.156.85.8/', { json: false }, (err, res, body) => {
        if (err) { 
            reply.status(500).send({status: 'ko', err: err});
        }
        else {
            reply.send({status: 'ok', data: body});
        }
    });
})

server.listen(8080, '0.0.0.0');
