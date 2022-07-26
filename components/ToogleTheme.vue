<template>
  <div class="container-toogle">
    <div  @click.prevent="changeTheme" class="item-toogle">
      <fa class="fa-2xl icontheme" icon="sun" />
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
/*       let allP = document.querySelectorAll('p');
      let allA = document.querySelectorAll('a');
      let allInputs = document.querySelectorAll('input[type=text]')
      allP.forEach((elementP) => {
        elementP.classList.toggle('p-color')
      })
      allA.forEach((elementA) => {
        elementA.classList.toggle('a-color')
      })
      allInputs.forEach((elementInputs) => {
        elementInputs.classList.toggle('inputs-color')
      }) */
      this.actualyTheme != this.actualyTheme
      document.body.classList.toggle('clear')
      document.querySelector('.menu').classList.toggle('white-clear')
      document.querySelector('.container-tasks-infos').classList.toggle('white-clear')
      document.querySelector('.container-tasks-active-complete').classList.toggle('white-clear')

      document.querySelector('.icontheme').classList.toggle('black')
    }
  }
}
</script>

<style>
.clear {
  background: #FAFAFA !important;
}
.black {
  color: #000 !important; 
}
.white-clear {
  background: #FFFF !important;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.158) !important;
}
.p-color,.a-color, .inputs-color {
  color: #000 !important;
}

.item-toogle {
  position: relative;
  z-index: 100;
  color: white;
}
</style>