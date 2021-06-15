<template>
  <div class="daarb">
    <h1 class="daarb__title">Daarb</h1>
    <form class="daarb__form" id="form" @submit.prevent="add()">
      <input
        type="text"
        class="daarb__form__input"
        id="input"
        placeholder="Enter your Daarb"
        v-model="input"
      />
      <ul class="daarb__ul" id="ul">
        <li
          class="todo-item"
          @click="tach(idx)"
          @contextmenu="delet($event, idx)"
          :ref="idx"
          v-for="(task, idx) in this.task"
          :key="idx"
        >
          {{ task }}
        </li>
      </ul>
    </form>
    <small class="daarb__text">left Click Completed</small>
    <small class="daarb__text">Right Click Delete</small>
    <router-link to="/">
      <button class="daarb__button">Atras</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      task: [],
    };
  },
  methods: {
    add() {
      this.task.push(this.input);
      this.input = "";
    },
    tach(idx) {
      this.$refs[idx][0].classList.toggle("ok");
    },
    delet(e, idx) {
      e.preventDefault();
      this.$refs[idx][0].remove();
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../sass/vars.scss";
@import "../sass/mixin.scss";
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

.daarb {
  font-family: "Lobster", sans-serif;
  background-color: $lightgray;
  color: $splitRight;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &__title {
    color: $Tomato;
    font-size: 6em;
    text-align: center;
    opacity: 0.6;
    margin-bottom: 30px;
  }

  &__form {
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    max-width: 100%;
    width: 250px;
    background: linear-gradient(145deg, #928f8f, #7a7979);
    box-shadow: 18px 18px 36px #363636, -18px -18px 36px #dad6d6;

    &__input {
      border: none;
      color: $splitRight;
      font-size: 15px;
      padding: 15px;
      max-width: 100%;
      display: block;
      margin: 30px 25px;
      border-top-left-radius: 1rem;
      border-bottom-right-radius: 1rem;

      &::placeholder {
        color: $grayShadow;
      }

      &:focus {
        outline-style: none;
      }
    }
  }

  &__ul {
    background-color: $white;
    list-style: none;
    border-bottom-right-radius: 2rem;
    padding: 20px;
    margin: 0;

    li {
      border-top: 1px solid $Tomato;
      cursor: pointer;
      font-size: 1.3rem;
      padding: 10px;

      &.ok {
        color: #b6b6b6;
        text-decoration: line-through;
      }
    }

    &__li {
      opacity: 0.6;
      text-decoration: line-through;
    }
  }

  &__text {
    color: $Tomato;
    opacity: 0.7;
    text-align: center;
  }

  &__button {
    @include button();
    margin-top: 100px;
  }
}
</style>