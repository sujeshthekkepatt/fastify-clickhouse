const fp = require('fastify-plugin')
const { ClickHouse } = require('clickhouse');


function clickHousePlugin (fastify, opts, done) {
    const clickhouse = new ClickHouse(opts);
    fastify.decorate('clickHouse',clickHouse)
    done()

}

module.exports = fp(dbPlugin)