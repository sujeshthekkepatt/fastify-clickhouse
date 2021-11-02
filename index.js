const fp = require('fastify-plugin')
const { ClickHouse } = require('clickhouse');


const clickHousePlugin = fp(function clickHousePluginWrapper (fastify, opts, done) {
    const clickHouse = new ClickHouse(opts);
    fastify.decorate('clickHouse',clickHouse)
    done()
})

module.exports = fp(clickHousePlugin)