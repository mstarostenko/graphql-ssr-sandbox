/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
const ApolloServer = use('ApolloServer')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Query {
        testString: [Role!]!
    }

    type Role {
        id: Int
        name: String
        type: String
        isLeadLink: Boolean
        hasTention: Boolean
    }
`

const resolvers = {
    Query: {
        async testString() {
            const roles = await use('Database')
                .table('roles')
                .select('*')
            return roles
        },
    },

    Role: {
        async name($$root, $args, context, info) {
            return 'test'
        },
    },
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

Route.route(
    '/graphql',
    ({ request, response }) => {
        return ApolloServer.graphql({ schema }, request, response)
    },
    ['GET', 'POST'],
)

Route.get('/graphiql', ({ request, response }) => {
    return ApolloServer.graphiql({ endpointURL: '/graphql' }, request, response)
})

Route.any('*', 'NuxtController.render')
