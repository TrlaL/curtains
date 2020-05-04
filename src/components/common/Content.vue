<template>
  <div class="content">
    <div class="main">
      <div class="title">{{ $route.meta.title }}</div>
      <transition mode="out-in" name="fade">
        <router-view class="frame" />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$padding: 40px;
$width: 75%;

.content {
  padding: $padding;
  width: $width;

  .main {
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;

    .title {
      border-bottom: 1px solid #aaa;
      color: $secondary-color;
      font: 1.7em 'Proxima Nova ExCn Rg';
      margin-bottom: 15px;
      padding-bottom: 15px;
    }

    .frame {
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>