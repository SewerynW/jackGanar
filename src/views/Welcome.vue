<template>
  <div>
    <p>Hello On our Website!</p>
    <button @click="onClickBtn">Check the results of lottery!</button>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    onClickBtn() {
      this.$router.push("/results")
    }
  }
}
</script>

<style lang="scss" scoped></style>
