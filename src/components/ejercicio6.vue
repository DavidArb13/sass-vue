<template>
  <div class="cont">
    <div class="card">
      <h2 class="card__price">$120</h2>
      <div class="card__imgCont">
        <img class="card__img" src="../assets/img/1.jpg" alt="glasses" />
      </div>

      <ul class="card__images">
        <li class="card__item">
          <img class="card__img" src="../assets/img/1.jpg" alt="" />
        </li>
        <li class="card__item">
          <img class="card__img" src="../assets/img/2.jpg" alt="" />
        </li>
        <li class="card__item">
          <img class="card__img" src="../assets/img/3.jpg" alt="" />
        </li>
      </ul>

      <div class="card__info">
        <p class="card__title">Sunglasses</p>
        <p class="card__moreInfo">The Coolest Sunglasses</p>
        <router-link to="/">
          <button class="card__btn">Atras</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../sass/vars.scss";
@import "../sass/mixin.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.cont {
  @include content();
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(135deg, $grayShadow, $white);

  .card {
    background-color: $white;
    width: 23.75em;
    box-shadow: 50px 50px 100px #5a5a5a, -50px -50px 100px #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__price {
      align-self: flex-end;
      color: $Cerulean;
      letter-spacing: 0.1875em;
      padding: 1.75em;
      animation: price 10s alternate-reverse infinite;
      animation-delay: 1s;

      @keyframes price {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
          color: $DarkGoldenrod;
        }
      }
    }

    &__imgCont {
      max-width: 90%;
    }

    &__img {
      width: 100%;
      max-width: 100%;
    }

    &__images {
      list-style: none;
      @include contentMain();
      padding: 1.5em;
    }

    &__item {
      @include contentMain();
      height: 5em;
      margin: 0.5em;
      padding: 0.5em;
      overflow: hidden;
      cursor: pointer;
      border: 0.125em solid $Cerulean;
      border-radius: 0.625em;
      transition: border-color 1s;

      &:hover {
        border-color: $DarkGoldenrod;
      }
    }

    &__info {
      width: 100%;
      padding: 1em 1.5em;
      color: $Teal;
      font-size: 1.3em;
      letter-spacing: 0.0625em;
      display: flex;
      flex-direction: column;
      background: linear-gradient(135deg, $grayShadow, $white);
    }

    &__title {
      font-size: 1.6em;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 0.5em;
    }

    &__btn {
      @include button();
      width: 100%;
      margin-top: 1em;
      font-weight: bold;
      font-size: 0.6em;
      cursor: pointer;
    }
  }
}
</style>