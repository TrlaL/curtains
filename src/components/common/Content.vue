<template>
  <div class="content">
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$padding: 40px 80px;
$width: 75%;

.content {
  padding: $padding;
  width: $width;

  .main {
    background: rgba(255, 255, 255, 0.8);
    height: 100%;
    padding: 20px;
  }
}
</style>