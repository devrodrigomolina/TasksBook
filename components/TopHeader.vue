<template>
  <div class="top-header">
    <div class="menu-hamburguer">
      <input
        type="checkbox"
        id="btn-mobile"
        class="btn-mobile"
        v-model="checked"
        @click="menuMobile"
      />
      <label for="btn-mobile">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <Button
      class="btn-subheader"
      :showmodal="openModal"
      title="Nova task"
      @emit="openOrCloseModal"
    />
    <transition name="modal">
      <ModalAddTask v-if="openModal" @emit="openOrCloseModal" />
    </transition>
    <ToogleTheme />
  </div>
</template>

<script>
export default {
  data() {
    return {
      openModal: false,
      checked: false,
    };
  },
  methods: {
    openOrCloseModal(param) {
      this.openModal = param;
    },
    menuMobile() {
      this.$emit('mobileMenu', this.checked)
    }
  },
};
</script>

<style scoped>
.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 80px;
  height: 90px;
  width: 100%;
}

/* MENU HAMBURGUER */
.menu-hamburguer {
  z-index: 999;
  display: none;
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

@media (max-width: 1024px) {
  .top-header {
    justify-content: space-around;
    margin: auto 0px;
  }
}
@media (max-width: 767.98px) {
  .top-header {
    justify-content: space-around;
    margin: auto 0px;
  }
  .menu-hamburguer {
    display: block;
  }
}
</style>
