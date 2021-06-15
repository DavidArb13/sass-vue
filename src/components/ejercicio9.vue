<template>
  <div class="nav">
    <h1 class="nav__title">Tab Bar</h1>
    <div class="nav__container">
      <div
        class="nav__item active purple"
        @click="select('purple')"
        ref="purple"
      >
        <i class="nav__icon fas fa-home"> </i>
        <p class="nav__name">Home</p>
      </div>

      <div class="nav__item pink" @click="select('pink')" ref="pink">
        <i class="nav__icon far fa-heart"> </i>
        <p class="nav__name">Likes</p>
      </div>

      <div class="nav__item yellow" @click="select('yellow')" ref="yellow">
        <i class="nav__icon fas fa-search"> </i>
        <p class="nav__name">Search</p>
      </div>

      <div class="nav__item teal" @click="select('teal')" ref="teal">
        <i class="nav__icon far fa-bell"></i>
        <p class="nav__name">Notifications</p>
      </div>
    </div>
    <router-link to="/"><button class="nav__btn">atras</button> </router-link>
  </div>
</template>
<script>
export default {
  methods: {
    select(ref) {
      const active = document.querySelectorAll(".nav__item");
      const item = this.$refs[ref];

      active.forEach((act) => {
        act.classList.remove("active");
      });
      item.classList.toggle("active");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../sass/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");

.nav {
  background-image: repeating-linear-gradient(
    490deg,
    $white,
    $black 1px,
    $black 100px,
    $white 100px
  );
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background 0.4s linear;

  &__btn {
    @include button();
    margin-top: 6.25rem;
    opacity: 1;
    font-weight: bold;
    color: $white;

    &:hover {
      background-color: $white;
      color: $splitRight;
      font-weight: bold;
      border: 3px solid;
    }
  }

  &__title {
    color: $Maroon;
    position: absolute;
    top: 1.25rem;
  }
  &__container {
    background-color: $white;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    box-shadow: 0 3px 6px rgba(255, 255, 255, 1.5), 0 3px 6px rgba(248, 245, 245, 1.5);
    display: flex;
    justify-content: space-between;
    padding: 1.875rem;
    width: 28.125rem;
  }

  &__item {
    background-color: $white;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.25rem;
    margin: 0 0.625rem;
    transition: background 0.4s linear;
    &.active .nav__name {
      padding: 0.625rem 0;
      margin-left: 0.625rem;
      max-width: 12.5rem;
      transition: max-width 0.4s linear;
    }
    &.active.purple {
      background-color: rgba(91, 55, 183, 0.2);
      color: rgba(91, 55, 183, 1);
    }
    &.active.pink {
      background-color: rgba(201, 55, 157, 0.2);
      color: rgba(201, 55, 157, 1);
    }
    &.active.yellow {
      background-color: rgba(230, 169, 25, 0.2);
      color: rgba(230, 169, 25, 1);
    }
    &.active.teal {
      background-color: rgba(28, 150, 162, 0.2);
      color: rgba(28, 150, 162, 1);
    }
  }
  &__icon {
    font-size: 1.2em;
  }
  &__name {
    font-weight: bold;
    overflow: hidden;
    max-width: 0;
  }
}
</style>
