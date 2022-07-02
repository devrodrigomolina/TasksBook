<template>
  <div class="container-btn">
    <button class="btn"><fa class="icon fa-xl" icon="circle-plus" />Nova Task </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container-btn {
  display: inline-block;
  width: 220px;
  height: 40px;
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
</style>