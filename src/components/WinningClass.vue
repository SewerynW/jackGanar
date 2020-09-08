<template>
  <div v-if="draw" class="__default-box winning-class">
    <table>
      <thead class="__header">
        <tr>
          <th>Winning class</th>
          <th>Correct numbers</th>
          <th>Winning amount</th>
          <th>Winners</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>A</td>
          <td>B</td>
          <td>C</td>
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
  watch: {
    draw(v) {
      console.log("mam", v)
    }
  }
}
</script>

<style lang="scss" scoped>
.winning-class {
  table {
    border-collapse: collapse;
    width: 100%;
  }

  thead {
    th:first-child {
      border-top-left-radius: 10px;
    }
    th:last-child {
      border-top-right-radius: 10px;
    }

    th {
      font-weight: normal;
      font-size: 14px;
      padding: 10px;
    }
  }
}
</style>
