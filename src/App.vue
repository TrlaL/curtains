<template>
  <div id="app">
    <Sidebar />
    <Content />
    <Modals />
  </div>
</template>

<script>
import Sidebar from './components/common/Sidebar'
import Content from './components/common/Content'
import Modals from './components/common/Modals'

export default {
  components: {
    Sidebar,
    Content,
    Modals
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/src/index.scss';
@import '@/assets/scss/main.scss';
@import '@/assets/scss/ProximaNova.scss';
@import '@/assets/scss/Whortle.scss';

#app {
  background: url('./assets/images/background.jpg');
  background-size: 100% 100%;
  display: flex;
  font-family: 'Proxima Nova Rg';
  height: 100%;
  width: 100%;
}
</style>