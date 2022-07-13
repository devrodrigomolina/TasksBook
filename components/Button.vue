<template>
  <div class="container-btn">
    <button @click="modalOpen"
      class="btn"><fa class="icon fa-xl" icon="circle-plus" />{{title}}
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      modal: null
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    showmodal: {
      type: Boolean
    }
  },
  methods: {
    modalOpen() {
      this.modal =! this.showmodal
      this.$emit('emit', this.modal)
    }
  }
}
</script>

<style scoped>
.container-btn {
  display: inline-block;
  width: 220px;
  height: 40px;
  position: relative;
}
.btn {
  width: 100%;
  height: 100%;
  background: #29A19C;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-weight: 700;
}

.btn .icon {
  color: white;
  margin-right: 10px;
}

.ipt-new-task {
  width: 100%;
  display: flex;
  position: relative;
}

.ipt-new-task input {
  width: 100%;
  height: 30px;
  outline: none;
  padding-left: 8px;
  border-radius: 10px;
}
.icons {
  position: absolute;
  right: 10px;
  top: 5px;
}
.complete-item {
  cursor: pointer;
  color: green;
}
</style>