<template>
  <div class="home">
    <div class="home--logo">
      <img src="@/assets/img/logo.png" alt="Logo" />
    </div>
    <div v-if="draws" class="home--content">
      <winning-numbers
        class="home--content--winning-numbers"
        :draw="getDraw"
        :dayOptions="dayOptions"
        :selectedDay="selectedDay"
        :changeDay="changeDay"
      />
      <winning-class class="home--content--winning-class" :draw="getDraw" />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag"

import WinningNumbers from "@/components/WinningNumbers.vue"
import WinningClass from "@/components/WinningClass.vue"

export default {
  name: "Home",
  components: {
    WinningNumbers,
    WinningClass
  },
  data() {
    return {
      numer: 10,
      gameType: "eurojackpot",
      draws: [],
      dayOptions: [],
      selectedDay: ""
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
      },
      result({ data }) {
        this.draws = [...data.draw.draws]

        this.getDays()
        this.setLastTerm()
      }
    }
  },

  computed: {
    getDraw() {
      const draw = this.draws.find(draw => draw.date === this.selectedDay)

      return draw
    }
  },
  methods: {
    getDays() {
      this.draws.forEach(draw => {
        this.dayOptions.push(draw.date)
      })
    },

    setLastTerm() {
      this.selectedDay = this.dayOptions[0]
    },

    changeDay(event) {
      this.selectedDay = event.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &--logo {
    text-align: center;
    margin-bottom: 80px;
    img {
      height: 80px;
      width: auto;
    }
  }

  &--content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
  }
}

@media only screen and (max-width: 800px) {
  .home {
    justify-content: start;

    &--logo {
      margin-top: 40px;
    }

    &--content {
      grid-template-columns: 1fr;

      &--winning-numbers,
      &--winning-class {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
