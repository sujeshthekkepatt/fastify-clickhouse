const  {test}  = require('tap');
const Fastify = require('fastify')
const fastifyClickHouse = require("./index")
test('Testing "health end point" route of the app', async (t) => {


  const fastify = Fastify()
  fastify.register(fastifyClickHouse)

  fastify.get('/', (req, reply) => {
      t.ok(fastify.clickHouse)
    reply.send('ok')
  })

  t.end();
});

