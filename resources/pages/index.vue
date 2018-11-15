<template lang="pug">
  section.container
      pre {{ testData }}
      .persons
          h1 persons
          li 1
          li 2
          li 3
          li 4

</template>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>

<script>
import gql from 'graphql-tag'

export default {
    name: 'PageMain',
    data () {
        return {
            testData: null
        }
    },

    components: {
    },

    async asyncData ({ app }) {
        try {
            const client = app.apolloProvider.defaultClient

            const { data } = await client.query({
                query: gql`
                query {
                    testString {
                        id
                        name
                    }
                }`,
            })

            return {
                testData: data.testString,
            }
        } catch (error) {
            throw error
        }
    },
}
</script>

