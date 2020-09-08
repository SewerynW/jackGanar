<template>
  <div class="__default-box welcome">
    <div class="welcome--top">
      <banner />
      <div>
        <img src="@/assets/img/weekLottery.png" alt="WeeklyLotery" />
      </div>
    </div>

    <section class="welcome--content">
      <h1>
        Welcome On our website where you can quickly check
        <span class="__dynamicColor">EuroJack</span> drawing results!
      </h1>

      <div class="welcome--content--redirect">
        <div>
          <img
            class="welcome--content--redirect-logo"
            src="@/assets/img/euroJack.jpeg"
            alt="EuroJack"
          />
        </div>
        <div class="welcome--content--redirect--text">
          <p>
            Today is good day for
            <span class="__dynamicColor" style="font-weight: bold">Win!</span>
          </p>
          <p>Click button and go check EuroJack drawing results</p>

          <redirect-btn />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import RedirectBtn from "@/components/RedirectBtn.vue"

export default {
  name: "Welcome",
  components: {
    Banner,
    RedirectBtn
  }
}
</script>

<style lang="scss" scoped>
.__dynamicColor {
  animation: colorChange 20s infinite;
}

.welcome {
  width: 80%;
  margin: auto;
  padding: 12px;

  &--top {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &--content {
    padding-top: 50px;

    h1 {
      font-size: 24px;
      text-align: center;
      width: 80%;
      margin: auto;
      opacity: 60%;
    }

    &--redirect {
      margin: 100px 0px;
      display: grid;
      grid-template-columns: 300px auto;

      &--text {
        text-align: right;

        p {
          margin-bottom: 15px;
          opacity: 60%;
        }
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  .welcome {
    margin-top: 150px;
    margin-bottom: 50px;

    &--top {
      flex-direction: column;
      img {
        padding-top: 20px;
      }
    }

    &--content {
      h1 {
        width: 90%;
      }

      &--redirect {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 50px 0px 0px;
        margin: 0px;
        &--text {
          padding-top: 50px;
          text-align: center;
        }
      }
    }
  }
}
</style>
