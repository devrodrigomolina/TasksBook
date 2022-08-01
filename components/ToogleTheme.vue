<template>
  <div class="container-toogle">
    <div  @click.prevent="changeTheme" class="item-toogle">
      <fa class="fa-2xl icontheme" icon="sun" v-if="!actualyTheme" />
      <fa class="fa-2xl icontheme black" icon="moon" v-else />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actualyTheme: false
    }
  },
  methods: {
    changeTheme() {
      this.actualyTheme =! this.actualyTheme
      document.body.classList.toggle('clear')
      let a = document.querySelector('.container-dashboard')
      let b = document.querySelector('.container-tasks-active-complete')
      let c = document.querySelector('.container-tasks-infos')
      let d = document.querySelector('.menu')
 
      a.classList.toggle('white-clear')
      b.classList.toggle('white-clear')
      c.classList.toggle('white-clear')
      d.classList.toggle('white-clear')
  
    }
  }
}
</script>

<style>
.clear {
  background: #FAFAFA !important;
  color: rgb(17, 16, 16) !important; 
}
.black {
  color: black !important;
}
.white-clear {
  color: rgb(17, 16, 16) !important; 
  background: #FFFF !important;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.158) !important;
}

.item-toogle {
  position: relative;
  z-index: 9;
  margin-right: 180px;
  color: white;
}

@media (max-width: 1024px) {
.item-toogle {
  margin-right: 0px;
}
}
</style>