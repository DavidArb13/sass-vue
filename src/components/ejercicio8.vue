<template>
  <body>
    <div class="grid">
      <div class="grid__text">
        <h2 class="grid__title">Less is more</h2>
        <h2 class="grid__title grid__title--transform">Minimalism</h2>
        <router-link to="/"
          ><button class="grid__btn">Atras</button>
        </router-link>
      </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../sass/vars.scss";
@import "../sass/mixin.scss";
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&family=Prata&display=swap");

body {
  font-family: "Prata", serif;
  background: $white;
  display: flex;
  height: 100vh;
}

.grid {
  height: 90vh;
  width: 90%;
  max-width: 75em;
  margin: auto;
  display: grid;
  background: $purp;
  box-shadow: 0 0 30px -10px rgba(66, 66, 66, 0.5);
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
  overflow: hidden;

  &::before {
    content: "";
    grid-column: 4/-1;
    grid-row: 1/-1;
    background-image: url(../assets/img/44.jpg);
    background-size: cover;
    background-position: right top;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    animation: show 2s 3.5s cubic-bezier(1, 0.08, 0.76, 0.97) forwards;

    @keyframes show {
      to {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
  }

  &__text {
    grid-row: 2/-2;
    grid-column: 2/8;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    clip-path: polygon(0 100%, 0 100%, 0 0, 0 0);
    transform: translate(40%);
    animation: show 2s forwards, move 1s 2s forwards;
    // animation: move 1s 2s forwards;

    @keyframes move {
      to {
        transform: translate(0);
      }
    }
  }

  &__title {
    font-size: 6rem;

    &--transform {
      font-family: "Playfair Display", serif;
      font-size: 4.5rem;
      transform: translate(25%);
      animation: move 1s 2s forwards;
    }
  }

  &__btn {
    @include button();
    opacity: 1;
    color: $purp;
    width: 0;
    animation: showBtn 2s 5s forwards;

    @keyframes showBtn {
      to {
        width: 200px;
        color: $white;
      }
    }
  }
}
</style>