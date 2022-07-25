<template>
  <div class="container-toogle">
    <div class="item-toogle">
      <fa @click="changeTheme" class="fa-2xl" icon="sun" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeTheme() {
      document.body.classList.toggle('clear')
      document.querySelector('.menu').classList.toggle('white-clear')
      document.querySelector('.container-tasks-infos').classList.toggle('white-clear')
    }
  }
}
</script>

<style>
.clear {
  background: #FAFAFA;
}
.white-clear {
  background: #FFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.322);
}
.item-toogle {
  position: relative;
  z-index: 100;
  color: white;
}
</style>