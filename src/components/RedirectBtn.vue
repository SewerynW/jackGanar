<template>
  <button @click="onClickBtn">Check the results of lottery!</button>
</template>

<script>
export default {
  name: "RedirectBtn",
  methods: {
    onClickBtn() {
      this.$router.push("/home")
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  box-shadow: 0px 1px 0px 0px #fff6af;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  border-radius: 6px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
  }

  &:active {
    position: relative;
    top: 1px;
  }
}
</style>
