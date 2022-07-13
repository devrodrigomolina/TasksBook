<template>
  <div class="container-header">
    <div class="menu">
      <div class="top-header">
        <div class="logo">
          <img src="../static/icon-task.png" alt="" srcset="">
          <h2>Tasks Book</h2>
        </div>
        <Button :showmodal="openModal" title="Nova task" @emit="teste"/>
        <ModalAddTask v-if="openModal"/>
        <ToogleTheme />
      </div>
  
      <div class="menu-categorias">
        <h2 class="categoria-titulo">Categorias</h2>
        <nuxt-link to="/"><fa class="fa-lg" icon="home-user" />Dashboard</nuxt-link>
        <nuxt-link to="/family"><fa class="fa-lg" icon="people-group" />Familia</nuxt-link>
        <nuxt-link to="/work"><fa  class="fa-lg" icon="briefcase" />Trabalho</nuxt-link>
        <nuxt-link to="/sports"><fa  class="fa-lg" icon="medal" />Sports</nuxt-link>
        <nuxt-link to="/others"><fa  class="fa-lg" icon="boxes-packing" />Outros</nuxt-link>
      </div>
      <div class="menu-estatisticas">
        <h2 class="categoria-titulo">Estatisticas</h2>
        <nuxt-link to="/"><fa class="fa-lg" icon="chart-simple" />Estatisticas</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      openModal: false
    }
  },
  methods: {
    teste(param) {
      this.openModal = param
    }
  }
}

</script>

<style>
.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45vw;
}
.container-header {
  width: 280px;
  height: 100vh;
}
.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #2C3440;
}
.menu-categorias {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 25px;
}
.menu a {
  font-size: 16px;
  color: white;
  margin: 15px 10px;
  font-weight: 100;
}
.menu a:hover, .menu a svg:hover {
  transition: all .4s;
  color: #29A19C 
}

.menu a svg {
  margin-right: 10px;
}
.categoria-titulo {
  margin-bottom: 20px;
  color: #29A19C ;
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
  color: #29A19C;
}
</style>
