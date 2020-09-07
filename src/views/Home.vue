<template>
  <div>
    <results />
    <div>{{ draw }}</div>
  </div>
</template>

<script>
import gql from "graphql-tag"

import Results from "@/components/Results.vue"

export default {
  name: "Home",
  components: {
    Results
  },
  data() {
    return {
      numer: 1,
      gameType: "eurojackpot"
    }
  },
  apollo: {
    draw: {
      query: gql`
        query draw($limit: Int, $type: String) {
          draw(limit: $limit, type: $type) {
            draws {
              additionalNumbers
              date
              numbers
              jackpot
              gameAmount
              odds {
                numberOfWinners
                odd
                winningClass
              }
            }
          }
        }
      `,
      variables() {
        return {
          limit: this.numer,
          type: this.gameType
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
