<template>
  <div class="container-header">
    <MenuMobile @emitChecked="menu"/>
    <div class="menu" :class="{activedMenuMobile: checked}">
      <div class="logo">
        <img src="../static/icon-task.png" alt="" srcset="" />
        <h2>Tasks Book</h2>
      </div>
      <div class="menu-categorias">
        <h2 class="categoria-titulo">Categorias</h2>
        <nuxt-link to="/"
          ><fa class="fa-lg" icon="home-user" />Dashboard</nuxt-link
        >
        <nuxt-link to="/family"
          ><fa class="fa-lg" icon="people-group" />Familia</nuxt-link
        >
        <nuxt-link to="/work"
          ><fa class="fa-lg" icon="briefcase" />Trabalho</nuxt-link
        >
        <nuxt-link to="/sports"
          ><fa class="fa-lg" icon="medal" />Sports</nuxt-link
        >
        <nuxt-link to="/others"
          ><fa class="fa-lg" icon="boxes-packing" />Outros</nuxt-link
        >
      </div>
      <div class="menu-estatisticas">
        <h2 class="categoria-titulo">Estatisticas</h2>
        <nuxt-link to="/statistics"
          ><fa class="fa-lg" icon="chart-simple" />Estatisticas</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  },
  methods: {
    menu(event) {
      this.checked = event
    }
  },
};
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-out;
}

.modal-enter,
.modal-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* ELEMENTOS */
.container-header {
  width: 280px;
  height: 100vh;
} 
.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
   transition: all .3s;
  background: #2c3440;
}
.menu-categorias {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 25px;
}
.menu .nuxt-link-exact-active {
  color: #29a19c;
}
.menu a {
  font-size: 16px;
  color: rgb(172, 172, 172);
  margin: 15px 10px;
  font-weight: 100;
}
.menu a:hover,
.menu a svg:hover {
  transition: all 0.4s;
  color: #29a19c;
}

.menu a svg {
  margin-right: 10px;
}
.categoria-titulo {
  margin-bottom: 20px;
  color: #29a19c;
}
.menu-estatisticas {
  margin-top: 70px;
  margin-left: 25px;
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  width: 50px;
  margin: 20px;
}
.logo h2 {
  color: #29a19c;
}

/* RESPONSIVO */

@media (max-width: 767.98px) {
  .menu {
    display: none;
  }
  .activedMenuMobile {
    transition: all .3s;
    width: 100vw;
    height: 100vh;
    display: block;
  }
.menu-categorias {
  align-items: center;
}
.menu-estatisticas {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
}

@media (max-width: 1440px) {
  .container-header {
    width: 230px;
  }
  .logo img {
    width: 40px;
  }
  .logo h2 {
    font-size: 1.2rem;
  }
}

@media (max-width: 1024px) {
  .container-header {
    width: 180px;
  }
  .logo img {
    width: 30px;
    margin-right: 6px;
  }
  .logo h2 {
    font-size: 1rem;
  }
  .menu-categorias {
    margin-top: 20px;
    margin-left: 10px;
  }
  .menu a {
    font-size: 13px;
  }
  .categoria-titulo {
    font-size: 1.1rem;
  }
  .menu-estatisticas {
    margin-top: 70px;
    margin-left: 10px;
  }
}
</style>
