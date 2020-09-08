<template>
  <div v-if="draw" class="__default-box winning-numbers">
    <header class="__header">
      <h2>Winning Numbers from: {{ formatDay(draw.date) }}</h2>
    </header>

    <div class="winning-numbers--content">
      <div class="winning-numbers--content--numbers">
        <div
          v-for="(number, idx) in draw.numbers"
          :key="`numbers-${idx}`"
          class="__number"
        >
          {{ number }}
        </div>
        <span>+</span>
        <div
          v-for="(number, idx) in draw.additionalNumbers"
          :key="`additionalNumbers-${idx}`"
          class="__number __yellow"
        >
          {{ number }}
        </div>
      </div>

      <p class="winning-numbers--content--jackpot">
        Jackpot of this draw:<span style="font-weight: bold">
          {{ jackpotNumber }} Mill €</span
        >
      </p>

      <div class="winning-numbers--content--day">
        <select
          @change="changeDay($event)"
          class="__default-box"
          name="days"
          id="day-select"
        >
          <option
            v-for="(option, idx) in dayOptions"
            :key="idx"
            :value="option"
            :selected="option === selectedDay"
            >{{ formatDay(option) }}</option
          >
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns"

export default {
  name: "WinningNumbers",
  props: {
    draw: {
      type: Object
    },
    dayOptions: {
      type: Array
    },
    selectedDay: {
      type: String
    },
    changeDay: {
      type: Function
    }
  },
  data() {
    return {}
  },
  computed: {
    jackpotNumber() {
      return this.draw.jackpot / 1000000
    }
  },
  methods: {
    formatDay(date) {
      return format(new Date(date), "eeee MM/dd/yyyy")
    }
  }
}
</script>

<style lang="scss" scoped>
.__number {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 50%;
  margin-right: 8px;
}

.__yellow {
  border-color: #ffab23;
  background-color: #ffab23;
}

.winning-numbers {
  header {
    padding: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    h2 {
      font-weight: normal;
      font-size: 18px;
    }
  }

  &--content {
    padding: 18px 12px;

    &--numbers {
      display: flex;
      margin-top: 30px;

      span {
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
      }
    }

    &--jackpot {
      margin-top: 30px;
    }

    &--day {
      text-align: right;
      margin-top: 40px;
      select {
        padding: 6px;
      }
    }
  }
}
</style>
