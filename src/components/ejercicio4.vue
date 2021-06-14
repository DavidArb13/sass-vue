<template>
  <body>
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="https://i.imgur.com/52er9UX.png" alt="html" />
            <h3>HTML</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore corrupti a rerum blanditiis soluta animi quia. Neque dolore delectus excepturi.
            </p>
            <a href="/">HOME</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="https://i.imgur.com/vPHYdCk.png" alt="CSS" />
            <h3>CSS</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore corrupti a rerum blanditiis soluta animi quia. Neque dolore delectus excepturi.
            </p>
            <a href="/">home</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="https://i.imgur.com/LqDbPQ7.png" alt="Javascript" />
            <h3>Javascript</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore corrupti a rerum blanditiis soluta animi quia. Neque dolore delectus excepturi.
            </p>
            <a href="/">HOME</a>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../sass/vars.scss";
@import "../sass/mixin.scss";

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: consolas;
}

.container {
  width: 1000px;
  position: relative;
  display: flex;
  justify-content: space-between;

  .card {
    position: relative;
    cursor: pointer;

    .face {
      width: 300px;
      height: 200px;
      transition: 0.5s;
    }

    .face1 {
      position: relative;
      background: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      transform: translateY(100px);
    }
    .face2 {
      position: relative;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
      transform: translateY(-100px);
    }

    &:hover .face.face1 {
      background: #ff0057;
      transform: translateY(0px);
    }

    &:hover .face.face2 {
      transform: translateY(0px);
    }

    &.content {
      opacity: 0.2;
      transition: 0.5s;
    }
    p {
      margin: 0;
      padding: 0;
    }
    h3 {
      margin: 10px 0 0;
      padding: 0;
      color: #fff;
      text-align: center;
      font-size: 1.5em;
    }
    img {
      max-width: 100px;
    }

    a {
      margin: 25px 80px 0;
      display: inline-block;
      text-decoration: none;
      font-weight: 900;
      color: #333;
      padding: 5px;
      border: 1px solid #333;

      &:hover {
        background: #333;
        color: #fff;
      }
    }
  }
}
</style>