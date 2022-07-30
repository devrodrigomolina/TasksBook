<template>
  <div class="container-tasks-infos">
    <h2 class="titulo">{{ title }}</h2>
    <div class="tasks-criadas">
      <p>Criadas</p>
      <div class="circulo-infos">
        <p class="qtd-tasks">{{ infos.tasks.length }}</p>
        <p>Tasks</p>
      </div>
    </div>
    <div class="tasks-completas">
      <p>Completas</p>
      <div class="circulo-infos">
        <p class="qtd-tasks">{{ infos.tasksCompleteds.length }}</p>
        <p>Tasks</p>
      </div>
    </div>
    <div class="tasks-deletadas">
      <p>Deletadas</p>
      <div class="circulo-infos">
        <p class="qtd-tasks">{{ infos.tasksDeleteds }}</p>
        <p>Tasks</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infos"],
  data() {
    return {
      title: "",
    };
  },
  watch: {
    checkRoute() {
      this.checkRoute == "/" ? (this.title = "Dados Gerais") : "";
      this.checkRoute == "/family" ? (this.title = "Dados Familia") : "";
      this.checkRoute == "/work" ? (this.title = "Dados Trabalho") : "";
    },
  },
  computed: {
    checkRoute() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.container-tasks-infos {
  width: 700px;
  height: 300px;
  background: #2c3440;
  color: white;
  margin-left: 80px;
  border-radius: 10px;
  text-align: center;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}
.container-tasks-infos .titulo {
  margin: auto 0;
  grid-column-start: 1;
  grid-column-end: 4;
}
.circulo-infos {
  margin: 0 auto;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #29a19c;
}

.qtd-tasks {
  font-size: 1.7rem;
  margin-bottom: 5px;
  color: #29a19c;
}

/* RESPONSIVO */

@media (max-width: 1440px) {
  .titulo {
    font-size: 20px;
  }
  .container-tasks-infos {
    width: 650px;
    margin-left: 35px;
  }
  .circulo-infos {
    width: 100px;
    height: 100px;
    margin-top: 5px;
  }
}

@media (max-width: 1024px) {
  .container-tasks-infos {
    width: 400px;
    margin-left: 35px;
  }
}

@media (max-width: 767.98px) {
.container-tasks-infos {
  width: 380px;
  margin: 0 auto;
  height: 250px;
} 

.circulo-infos {
  width: 100px;
  height: 100px;
  margin-top: 20px;
}

}
</style>
