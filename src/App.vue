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
@import '~vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
@import '@/assets/scss/main.scss';
@import '@/assets/scss/ProximaNova.scss';
@import '@/assets/scss/Whortle.scss';

#app {
  background: url('./assets/images/background.jpg');
  background-size: 100% 100%;
  display: flex;
  font: 17px 'Proxima Nova Cn Lt';
  height: 100%;
  min-width: 1000px;
  width: 100%;
}
</style>