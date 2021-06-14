<template>
  <div class="home">
    <div class="home__titulo">
      <h1>Menu</h1>
    </div>
    <div class="home__buttons">
      <router-link :to="'/ejercicio1'">
        <button class="home__buttons__but">Animated Text</button>
      </router-link>
      <router-link :to="'/ejercicio2'">
        <button class="home__buttons__but">Todo List App</button>
      </router-link>
      <router-link :to="'/ejercicio3'">
        <button class="home__buttons__but">Menú Vertical</button>
      </router-link>
      <router-link :to="'/ejercicio4'">
        <button class="home__buttons__but">Card Hover</button>
      </router-link>
      <router-link :to="'/ejercicio5'">
        <button class="home__buttons__but">Netflix</button>
      </router-link>
      <router-link :to="'/ejercicio6'">
        <button class="home__buttons__but">E-Commerce</button>
      </router-link>
      <router-link :to="'/ejercicio7'">
        <button class="home__buttons__but">Grid</button>
      </router-link>
      <router-link :to="'/ejercicio8'">
        <button class="home__buttons__but">Landing Page</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../sass/vars.scss";
@import "../sass/mixin.scss";

button {
  @include button();
}

.home {
  min-height: 100vh;
  &__titulo {
    text-align: center;
    color: $splitRight;
    margin: 0px 30px 50px 30px;
    padding-top: 100px;
    font-size: 1em;
    animation: AnimationTitle 7s alternate-reverse;
    animation-delay: 1s;
    opacity: 1;
    
    @keyframes AnimationTitle {
      50% {
        margin: 50px 0;
        opacity: 0.5;
        letter-Spacing: 5px;
      }
      100% {
        opacity: 1;
      }
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  &__buttons {
    @include content(center, center, 0, flex);
    flex-direction: column;

    &__but {
      margin: 30px;
    }
  }
}
</style>