## From scratch Installation:

This is a project template for [adonis-cli](https://github.com/adonisjs/adonis-cli).

```bash
adonis new --blueprint nuxt-community/adonuxt-template <project-name>
```

From my presentation checklist:

🚀  1. Install ADONISJS template
    1.1. copy blueprint install command
    https://github.com/nuxt-community/adonuxt-template

[🔌Server] 2. Implement api server ( APOLLO SERVER )
                2.1 ADONISJS plugin:
                https://github.com/ammezie/adonis-apollo-server

           [🕵️] 2.2 Source code
                    2.3 Install dependencies:
                        npm install graphql

           3. Working Comfort with:
                npm install pug
                npm install pug-plain-loader
                ( for pug syntax in <template> )


[🔌Client] 4. FE ( APOLLO CLIENT ):
                4.1 package
                    npm install --save @nuxtjs/apollo

                4.2 Paste in config/nuxt.js:
                    // Add apollo module
                    modules: ['@nuxtjs/apollo'],

                    // and add apollo section
                    httpEndpoint: 'http://localhost:3000/graphql', <- your app

[ DEVELOPING ]
            // Example of interaction:
            // Вызываем в asyncData (nuxt hook), на любой 'page' странице (resource/pages/*.vue)
            async asyncData ({ app }) {
                try {
                    const client = app.apolloProvider.defaultClient // apollo client singleton

                    const { data } = await client.query({
                        query: gql`
                        query {
                            testString // <-query herey
                        }`,
                    })

                    return {
                        testData: data.testString,
                    }
                } catch (error) {
                    throw error
                }
            },


[🔌DATABASE] 4. ( APOLLO CLIENT ):
            https://adonisjs.com/docs/4.0/database#_supported_databases

