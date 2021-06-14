<template>
  <div class="content">
    <h1 class="content__title">WEB &lt;Dev/&gt;</h1>
    <h2 class="content__subtitle">Pills</h2>
    <router-link to="/">
      <button class="content__btn">Atras</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "../sass/vars.scss";
@import "../sass/mixin.scss";

.content {
  @include content();
  flex-direction: column;
  text-transform: uppercase;
  background: $MediumSpringGreen;

  &__title {
    color: $splitRight;
    animation: enterAnimation 2s ease-in-out forwards;
    animation-delay: 1s;
    //Estado inicial
    opacity: 0.1;
    letter-spacing: 7px;
    font-size: 2.6em;
    line-height: 1.5em;
    text-align: center;

    @keyframes enterAnimation {
      50% {
        letter-spacing: 15px;
        font-size: 3.6em;
      }

      100% {
        letter-spacing: 7px;
        opacity: 1;
        font-size: 2.5em;
      }
    }
  }

  &__subtitle {
    color: $Tomato;
    letter-spacing: 7px;
    font-size: 1.5em;

    height: 0;
    overflow: hidden;
    animation: pillsAnimation 1s forwards;
    animation-delay: 3s;

    @keyframes pillsAnimation {
      100% {
        height: 80px;
      }
    }
  }

  &__btn {
    @include button();
  }

  @media (min-width: $tablet_width) {
    .content {
      &__title {
        font-size: 4.6em;

        @keyframes enterAnimation {
          50% {
            letter-spacing: 15px;
            font-size: 5.6em;
          }

          100% {
            letter-spacing: 7px;
            opacity: 1;
            font-size: 4.6em;
          }
        }
      }
      &__subtitle {
        font-size: 3.5em;
      }
    }
  }
}
</style>