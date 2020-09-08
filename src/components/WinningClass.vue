<template>
  <div v-if="draw" class="__default-box winning-class">
    <table>
      <thead class="__header">
        <tr>
          <th>Winning class</th>
          <th>Winning amount</th>
          <th>Winners</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in draw.odds" :key="idx">
          <td>{{ item.winningClass }}</td>
          <td>{{ formatNumber(item.odd) }} €</td>
          <td>{{ item.numberOfWinners }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "WinningClass",
  props: {
    draw: {
      type: Object
    }
  },
  methods: {
    formatNumber(number) {
      const splitedNum = number.split("")

      const tmpDecimal = [
        ".",
        splitedNum[splitedNum.length - 2],
        splitedNum[splitedNum.length - 1]
      ].join("")
      splitedNum.splice(-2)

      return `${splitedNum
        .join("")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}${tmpDecimal}`
    }
  }
}
</script>

<style lang="scss" scoped>
.winning-class {
  table {
    border-collapse: collapse;
    width: 100%;

    thead {
      th:first-child {
        border-top-left-radius: 10px;
        text-align: center;
        border-right: 1px solid #ccc;
      }
      th:nth-child(2) {
        border-right: 1px solid #ccc;
      }

      th:last-child {
        border-top-right-radius: 10px;

        padding-right: 15px;
      }

      th {
        font-weight: normal;
        font-size: 14px;
        padding: 10px;
        text-align: right;
      }
    }

    tbody {
      td:first-child {
        text-align: center;
      }

      td:last-child {
        padding-right: 15px;
      }

      td {
        padding: 6px 10px;
        text-align: right;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
