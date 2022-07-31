<template>
  <div class="menu-hamburguer">
      <input
        type="checkbox"
        id="btn-mobile"
        class="btn-mobile"
        v-model="checked"
        @click="emitChecked"
      />
      <label for="btn-mobile">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    emitChecked() {
      this.$emit('emitChecked', !this.checked)
    }
  }
}
</script>

<style scoped>
/* MENU HAMBURGUER */
.menu-hamburguer {
  z-index: 999;
  display: none;
  position: absolute;
}
.btn-mobile {
  display: none;
}

label {
  cursor: pointer;
  position: relative;
  display: block;
  height: 22px;
  width: 30px;
}
label span {
  position: absolute;
  display: block;
  height: 4px;
  width: 100%;
  z-index: 99999;
  border-radius: 30px;
  background: rgb(172, 172, 172);
  transition: all 0.3s;
}
label span:nth-child(1) {
  top: 0;
}
label span:nth-child(2) {
  top: 10px;
}
label span:nth-child(3) {
  top: 20px;
}
.btn-mobile:checked + label span:nth-child(1) {
  transform: rotate(-45deg);
  top: 10px;
}
.btn-mobile:checked + label span:nth-child(2) {
  opacity: 0;
}
.btn-mobile:checked + label span:nth-child(3) {
  transform: rotate(45deg);
  top: 10px;
}

@media (max-width: 767.98px) {
  .menu-hamburguer {
    display: block;
    margin: 33px 0 0 15px;
  }
}
</style>