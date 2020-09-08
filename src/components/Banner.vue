<template>
  <div class="__default-box banner">
    <p class="banner--label">Jack-Ganar</p>
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style lang="scss" scoped>
.banner {
  display: inline-flex;
  padding: 15px;
  border: 2px solid;
  animation: borderColorChange 20s infinite;
  max-height: 50px;

  &--label {
    animation: colorChange 20s infinite;
    font-family: "Long Cang", cursive;
    font-size: 52px;
    font-weight: bold;
  }
}

@keyframes borderColorChange {
  0% {
    border-color: #9b59b6;
  }

  25% {
    border-color: #f1c40f;
  }

  50% {
    border-color: #3498db;
  }

  75% {
    border-color: #1abc9c;
  }

  100% {
    border-color: #9b59b6;
  }
}
</style>
