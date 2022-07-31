<template>
  <div class="top-header">
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

@media (max-width: 1024px) {
  .top-header {
    justify-content: space-around;
    margin: auto 0px;
  }
}
@media (max-width: 767.98px) {
  .top-header {
    width: 380px;
    justify-content: flex-end;
    margin: 0 auto;
  }
}
</style>
