<template>
  <div>
    <p>
      Hello!<br />
      Today is good day for win!<br />
      Go and check EuroJack drawing results
    </p>
    <button @click="onClickBtn">Check the results of lottery!</button>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    onClickBtn() {
      this.$router.push("/home")
    }
  }
}
</script>

<style lang="scss" scoped></style>
