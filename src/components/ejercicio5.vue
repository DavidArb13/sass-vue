<template>
  <div class="netflix">
    <header class="header contenedor">
      <div class="header__cont">
        <h2 class="header__logo">Daarb</h2>
        <nav class="header__nav">
          <router-link class="header__a" to="/">Inicio</router-link>
          <router-link class="header__a" to="/">Programas</router-link>
          <router-link class="header__a" to="/">Peliculas</router-link>
          <router-link class="header__a" to="/">más Recientes</router-link>
          <router-link class="header__a" to="/">Mi lista</router-link>
        </nav>
      </div>
    </header>

    <main>
      <div class="movie">
        <div class="contenedor">
          <h3 class="movie__title">Interestelar</h3>
          <p class="movie__description">
            Narra las aventuras de un grupo de exploradores que hacen uso de un
            agujero de gusano recientemente descubierto para superar las
            limitaciones de los viajes espaciales tripulados y vencer las
            inmensas distancias que tiene dun viaje interestelar.
          </p>
          <!-- Role button aparato espacial personas con discapacidad... el dispositivo entienda que es un boton -->
          <button role="button" class="movie__btn">
            <i class="movie__i fas fa-play"></i>Reproducir
          </button>
          <router-link to="/">
            <button role="button" class="movie__btn">
              <i class="movie__i fas fa-info-circle"></i>Mas Información
            </button>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>
  
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../sass/vars.scss";
@import "../sass/mixin.scss";
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@400;600&display=swap");

.contenedor {
  width: 90%;
  margin: auto;
}

.netflix {
  background: $CodGray;
  font-family: "Open Sans", sans-serif;
  min-height: 100vh;
  /*********************************************************
  HEADER
  **********************************************************/
  .header {
    padding: 30px 0;

    &__cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      font-family: "Bebas Neue", cursive;
      font-weight: normal;
      color: $redSolid;
      font-size: 40px;
    }

    &__a {
      color: $moonMist;
      text-decoration: none;
      margin-right: 20px;
      &:hover,
      &:focus {
        color: $white;
      }
    }
  }
  /***********************************************************
  PRINCIPAL MOVIE
  ************************************************************/
  .movie {
    font-size: 16px;
    min-height: 40.62em;
    color: $white;
    background: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
      url(../assets/img/fondo.jpg);
    background-position: center center;
    background-size: cover;
    margin-bottom: 3.12em;
    display: flex;
    align-items: flex-end;

    .contenedor {
      margin: 0 auto;
      margin-bottom: 6.25em;
    }

    &__title {
      font-weight: 600;
      font-size: 3.12em;
      margin-bottom: 0.4em;
    }

    &__description {
      font-weight: normal;
      font-size: 1em;
      line-height: 1.75em;
      max-width: 50%;
      margin-bottom: 1.25em;
    }

    &__btn {
      background: rgba(0, 0, 0, 0.5);
      border: none;
      border-radius: 0.31em;
      padding: 0.93em 1.87em;
      color: $white;
      margin-right: 1.25em;
      cursor: pointer;
      transition: 0.3s ease all;
      font-size: 1.12em;

      &:hover {
        background: $white;
        color: $black;
      }
    }

    &__i {
      margin-right: 1.25em;
    }
  }
}

@media (max-width: $tablet_width) {
  .netflix {
    .header {
      &__logo {
        margin-bottom: 10px;
        font-size: 30px;
      }

      &__cont {
        flex-direction: column;
        text-align: center;
      }
    }

    .movie {
      font-size: 14px;

      &__description {
        max-width: 100%;
      }
    }
  }
}
</style>