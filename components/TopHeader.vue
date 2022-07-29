<template>
  <div class="top-header">
    <Button :showmodal="openModal" title="Nova task" @emit="openOrCloseModal" />
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
  margin: auto 50px;
  width: 100%;
}
}

</style>
