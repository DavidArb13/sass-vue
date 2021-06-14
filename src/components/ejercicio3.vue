<template>
  <div class="nav">
    <aside>
      <div class="nav__temary" id="temario">
        <h3 class="nav__title">Temario</h3>
        <ul class="nav__list">
          <li @click="click()">
            <a href="#1" class="active">1. Primer Capitulo</a>
          </li>
          <li @click="click()">
            <a href="#2">2. Segundo Capitulo</a>
          </li>
          <li @click="click()">
            <a href="#3">3. Tercer Capitulo</a>
          </li>
          <li @click="click()">
            <a href="#4">4. Cuarto Capitulo</a>
          </li>
          <li @click="click()">
            <a href="#5">5. Quinto Capitulo</a>
          </li>
        </ul>
        <router-link to="/">
          <button class="nav__btn">Atras</button>
        </router-link>
      </div>
    </aside>
    <main>
      <div class="nav__card" id="1">
        <h1>1. Primer Capitulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel,
          dolores cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rem vel, dolores cupiditate Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem vel, dolores cupiditate
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel,
          dolores cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rem vel, dolores cupiditate Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem vel, dolores cupiditate
        </p>
      </div>
      <div class="nav__card" id="2">
        <h1>2. Segundo Capitulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel,
          dolores cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rem vel, dolores cupiditate Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem vel, dolores cupiditate
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel,
          dolores cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rem vel, dolores cupiditate Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem vel, dolores cupiditate
        </p>
      </div>
      <div class="nav__card" id="3">
        <h1>3. Tercer Capitulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel,
          dolores cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rem vel, dolores cupiditate Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem vel, dolores cupiditate
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel,
          dolores cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rem vel, dolores cupiditate Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem vel, dolores cupiditate
        </p>
      </div>
      <div class="nav__card" id="4">
        <h1>4. Cuarto Capitulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel,
          dolores cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rem vel, dolores cupiditate Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem vel, dolores cupiditate
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel,
          dolores cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rem vel, dolores cupiditate Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem vel, dolores cupiditate
        </p>
      </div>
      <div class="nav__card" id="5">
        <h1>5. Quinto Capitulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel,
          dolores cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rem vel, dolores cupiditate Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem vel, dolores cupiditate
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel,
          dolores cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Rem vel, dolores cupiditate Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem vel, dolores cupiditate
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      document.querySelectorAll("#temario .nav__list a").forEach((e) => {
        e.addEventListener("click", () => {
          document.querySelector("#temario .active").classList.remove("active");
          e.parentElement.classList.add("active");
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import "../sass/vars.scss";
@import "../sass/mixin.scss";

main {
  min-height: 1700px;
}

aside {
  background: $splitRight;
  color: $white;
}

.nav {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  font-family: "Roboto", sans-serif;

  &__btn {
    @include button(150px, 40px, $white);
    margin: 530px 55px 20px;
  }

  &__temary {
    padding: 10px;
    position: sticky;
    min-height: 100vh;
    top: 0;
  }

  &__title {
    margin: 20px 0;
    text-align: center;
  }
  &__list {
    list-style: none;
    border-left: 2px solid $white;
    padding-left: 10px;
    margin-left: 30px;

    li {
      position: relative;
      text-align: center;

      a {
        color: $white;
        transition: 0.3s ease all;
        text-decoration: none;
        display: block;
        padding: 15px 0;
        transition: 2s ease all;

        &.active,
        &:hover {
          color: $Tomato;
          transition: 1s ease all;
        }
      }

      ::before {
        content: "";
        display: block;
        height: 12px;
        width: 12px;
        border: 2px solid $white;
        position: absolute;
        background: $splitRight;
        left: -17px;
        top: 18px;
        transform: rotate(45deg);
        transition: 1s ease all;
      }

      .active::before {
        border: 2px solid $Tomato;
      }

      :hover::before {
        border: 2px solid $Tomato;
      }
    }
  }

  &__card {
    margin: 20px;
    padding: 20px;
    background: $splitRight;
    color: $white;
    border-top-left-radius: 2rem;

    h1 {
      color: $Tomato;
      text-align: center;
      opacity: 0.8;
    }

    p {
      margin: 10px;
      text-align: center;
      opacity: 0.8;
    }
  }
}

@media (min-width: $tablet_width) {
  .nav {
    grid-template-columns: 35% auto;
  }
}
</style>