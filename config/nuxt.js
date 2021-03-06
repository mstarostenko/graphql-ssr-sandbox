'use strict'

const resolve = require('path').resolve

module.exports = {
    /*
  ** Headers of the page
  */
    head: {
        title: 'Adonuxt',
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Adonuxt project',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: 'favicon.ico',
            },
        ],
    },
    modules: ['@nuxtjs/apollo'],

    // Give apollo module options
    apollo: {
        // tokenName: 'yourApolloTokenName', // optional, default: apollo-token
        // tokenExpires: 10, // optional, default: 7 (days)
        // includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
        // authenticationType: 'Basic', // optional, default: 'Bearer'
        // optional
        errorHandler(error) {
            console.log(
                '%cError',
                'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
                error.message,
            )
        },
        // required
        clientConfigs: {
            default: {
                // required
                httpEndpoint: 'http://localhost:3000/graphql',
                // optional
                // See https://www.apollographql.com/docs/link/links/http.html#options
                // httpLinkOptions: {
                //     credentials: 'same-origin',
                // },
                // You can use `wss` for secure connection (recommended in production)
                // Use `null` to disable subscriptions
                // wsEndpoint: 'ws://localhost:4000', // optional
                // LocalStorage token
                // tokenName: 'apollo-token', // optional
                // Enable Automatic Query persisting with Apollo Engine
                // persisting: false, // Optional
                // Use websockets for everything (no HTTP)
                // You need to pass a `wsEndpoint` for this to work
                // websocketsOnly: false, // Optional
            },
            // test: {
            //     httpEndpoint: 'http://localhost:5000',
            //     wsEndpoint: 'ws://localhost:5000',
            //     tokenName: 'apollo-token'
            // },
            // // alternative: user path to config which returns exact same config options
            // test2: '~/plugins/my-alternative-apollo-config.js'
        },
    },

    /*
  ** Global CSS
  */
    css: ['~assets/css/main.css'],
    /*
  ** Customize the progress-bar color
  */
    loading: { color: '#744d82' },
    /*
  ** Point to resources
  */
    srcDir: resolve(__dirname, '..', 'resources'),
}
