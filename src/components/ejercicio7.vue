<template>
  <body>
    <div class="contenedor">
      <header class="header">
        <div class="header__logo">
          <p class="header__iniciales-logo">DA</p>
          <h1 class="header__titulo">Daarb</h1>
        </div>
        <nav class="header__menu">
          <router-link to="/" class="header__a">Inicio</router-link>
          <router-link to="/" class="header__a">Acerca de</router-link>
          <router-link to="/" class="header__a">Artículos</router-link>
          <router-link to="/" class="header__a">Contacto</router-link>
        </nav>
      </header>

      <article class="articulo destacado">
        <div class="articulo__contenedor-texto">
          <div>
            <h2 class="titulo">
              <router-link class="titulo--link" to="/"
                >Título del artículo más destacado</router-link
              >
            </h2>
            <p class="articulo__fecha">
              <time>Noviembre 13, 2019</time>
            </p>
          </div>
          <p class="articulo__extracto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            illo possimus atque fuga harum consequuntur reprehenderit,
            asperiores aperiam commodi, repellat deserunt odio repellendus iste
            recusandae vitae officiis rem eaque esse!
          </p>
          <router-link to="/" class="btn-link">Leer más</router-link>
        </div>
        <div class="contenedor-thumbnail">
          <router-link class="contenedor-thumbnai__a" to="/"
            ><img class="articulo__img" src="../assets/img/11.jpg" alt="img11"
          /></router-link>
        </div>
      </article>

      <main class="contenido">
        <article class="articulo">
          <div class="articulo__contenedor-thumbnail">
            <router-link to="/"
              ><img
                class="articulo__img"
                src="../assets/img/22.jpg"
                alt="img22"
            /></router-link>
          </div>
          <div class="articulo__contenedor-texto">
            <div>
              <h2 class="articulo__titulo">
                <router-link class="articulo__titulo--a" to="/"
                  >Título del artículo más destacado</router-link
                >
              </h2>
              <p class="articulo__fecha">
                <time>Noviembre 13, 2019</time>
              </p>
            </div>
            <p class="articulo__extracto">
              Lorem ipsum, dolor sit amet coknsectetur adipisicing elit.
              Cupiditate, autem animi.
            </p>
            <router-link to="/" class="btn-link">Leer más</router-link>
          </div>
        </article>

        <article class="articulo">
          <div class="articulo__contenedor-thumbnail">
            <router-link to="/"
              ><img
                class="articulo__img"
                src="../assets/img/33.jpg"
                alt="img33"
            /></router-link>
          </div>
          <div class="articulo__contenedor-texto">
            <div>
              <h2 class="articulo__titulo">
                <router-link class="articulo__titulo--a" to="/"
                  >Título del artículo más destacado</router-link
                >
              </h2>
              <p class="articulo__fecha">
                <time>Noviembre 13, 2019</time>
              </p>
            </div>
            <p class="articulo__extracto">
              Lorem ipsum, dolor sit amet coknsectetur adipisicing elit.
              Cupiditate, autem animi.
            </p>
            <router-link to="/" class="btn-link">Leer más</router-link>
          </div>
        </article>

        <article class="articulo">
          <div class="articulo__contenedor-thumbnail">
            <router-link to="/"
              ><img
                class="articulo__img"
                src="../assets/img/44.jpg"
                alt="img44"
            /></router-link>
          </div>
          <div class="articulo__contenedor-texto">
            <div>
              <h2 class="articulo__titulo">
                <router-link class="articulo__titulo--a" to="/"
                  >Título del artículo más destacado</router-link
                >
              </h2>
              <p class="articulo__fecha">
                <time>Noviembre 13, 2019</time>
              </p>
            </div>
            <p class="articulo__extracto">
              Lorem ipsum, dolor sit amet coknsectetur adipisicing elit.
              Cupiditate, autem animi.
            </p>
            <router-link to="/" class="btn-link">Leer más</router-link>
          </div>
        </article>
      </main>

      <aside class="sidebar">
        <div class="sidebar__acerca-de">
          <img
            src="../assets/img/55.jpg"
            class="sidebar__img-perfil articulo__img"
            alt="img55"
          />

          <div class="sidebar__bio">
            <p class="sidebar__titulo">¡Hola!</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              quae tenetur veritatis esse aperiam?
            </p>
          </div>
        </div>
        <nav class="sidebar__menu">
          <router-link to="/" class="sidebar__a">Acerca de</router-link>
          <router-link to="/" class="sidebar__a">Portafolio</router-link>
          <router-link to="/" class="sidebar__a">Contacto</router-link>
        </nav>
      </aside>

      <footer class="footer">
        <p>Copyright © 2020 FalconMasters</p>
      </footer>
    </div>
  </body>
</template>

<style lang="scss" scoped>
@import "../sass/vars.scss";
@import "../sass/mixin.scss";
body {
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  //fondo rayado
  background-image: repeating-linear-gradient(
    90deg,
    $white,
    $white 20px,
    $Maroon 20px,
    $white 40px
  );
  font-size: 16px;
}

a {
  text-decoration: none;
}

.contenedor {
  width: 90%;
  max-width: 75em;
  margin: 1.25em auto;
  display: grid;
  grid-gap: 1.25em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "header			header   	header"
    "destacado		destacado 	destacado"
    "contenido		contenido 	aside"
    "footer	 		footer 		footer";
}

/* ---------- HEADER ----------*/
.header {
  grid-area: header;
  padding: 1.25em;
  background: $white;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);

  &__logo {
    margin-bottom: 1.25em;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;
  }

  &__titulo {
    font-size: 1.875em;
  }

  &__iniciales-logo {
    padding: 0.31em;
    border: 0.125em solid $black;
    display: inline-block;
    font-size: 1em;
    margin-bottom: 0.93em;
  }

  &__menu {
    border-top: 1px solid $black;
    border-bottom: 1px solid $black;
    display: flex;
    justify-content: space-between;
  }

  &__a {
    padding: 0.625em;
    color: $black;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    width: 100%;
    text-align: center;
    transition: 0.2s ease all;
    font-size: 1em;

    &:hover {
      background: $black;
      color: $white;
    }
  }
}

/* ---------- Articulos ----------*/
.articulo {
  display: flex;
  background: $white;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__contenedor-thumbnail {
    width: 50%;
  }

  &__contenedor-texto {
    padding: 1.25em;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  &__titulo {
    margin-bottom: 0.625rem;
    font-size: 1.56em;

    &--a {
      font-weight: 400;
      color: $black;
    }
  }

  &__fecha {
    font-size: 1em;
    color: $grayShadow;
    margin-bottom: 0.625rem;
  }

  &__extracto {
    font-size: 1.25em;
    line-height: 1.56rem;
    font-weight: 300;
    margin-bottom: 1.25rem;
    color: $grayShadow;
  }
}

/* ---------- Articulo Destacado ----------*/
.articulo.destacado {
  grid-area: destacado;
  color: $white;
  background-color: $black;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);

  display: grid;
  grid-template-columns: 1.3fr 1fr;

  &.contenedor-thumbnail {
    min-height: 100%;
    width: 100%;

    &__a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
}

.titulo {
  &--link {
    color: $white;
  }
  &::after {
    content: "";
    margin: 0.625em 0;
    display: block;
    background-color: $Maroon;
    width: 6em;
    height: 0.0625em;
  }
}

/*---------- CONTENIDO ----------*/
.contenido {
  grid-area: contenido;
  display: grid;
  grid-template-columns: 1;
  grid-gap: 1.25em;
}

/*---------- SIDEBAR ----------*/
.sidebar {
  padding: 5em 1.5625em;
  text-align: center;
  min-height: 6.25em;
  grid-area: aside;
  background: $black;
  color: $grayShadow;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);

  &__img-perfil {
    border-radius: 100%;
    height: 10em;
    width: 10em;
    margin-bottom: 1.5625em;
  }

  &__bio {
    margin-bottom: 1.5625em;
    font-size: 1.25em;
    line-height: 1.5625em;
  }

  &__menu {
    width: 100%;
    display: inline-block;
    background: $grayShadow;
  }

  &__a {
    padding: 1.5625em;
    color: $white;
    background-color: $black;
    display: block;
    font-size: 1em;
    text-transform: uppercase;

    &:hover {
      background: #262626;
    }
  }
}

.btn-link {
  width: 6.25rem;
  border: 1px solid $black;
  padding: 0.3125rem;
  text-align: center;
  color: $black;

  &:hover {
    background: $black;
    color: $white;
  }
}

.footer {
  background: $white;
  font-size: 1.25em;
  grid-area: footer;
  padding: 1.5625em;
  text-align: right;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
}

@media (max-width: $large_desktop) {
  body {
    font-size: 14px;
  }
}
@media (max-width: $desktop_width) {
  body {
    font-size: 16px;
  }
  .header {
    font-size: 12px;
  }
  .contenedor {
    grid-template-areas:
      "header			  header   	  header"
      "destacado		destacado 	destacado"
      "contenido		contenido 	contenido"
      "aside        aside       aside"
      "footer	 		  footer 		  footer";
  }
}
@media (max-width: $tablet_width) {
  body {
    font-size: 14px;
  }
  .articulo.destacado {
    grid-template-columns: 1fr;
  }
  .articulo.destacado .contenedor-thumbnail {
    height: 16em;
  }
}
@media (max-width: $mobile_after) {
  body {
    font-size: 12px;
  }
}
</style>