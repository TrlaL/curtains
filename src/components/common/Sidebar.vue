<template>
  <PerfectScrollbar class="sidebar">
    <div class="logo" @click="goHome">
      <div class="text">Аллея</div>
      <div class="label">Что-то там про шторы</div>
    </div>
    <ul class="menu">
      <li
        class="item"
        v-for="(item, i) in items"
        :class="getItemClassName(item)"
        :key="i"
        @click="push(item.name)">
        {{ item.label }}
        <b-icon class="icon" icon="chevron-right" />
      </li>
    </ul>
    <div class="icons">
      <img src="@/assets/images/vk.png">
      <img src="@/assets/images/instagram.png">
      <img src="@/assets/images/facebook.png">
    </div>
  </PerfectScrollbar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { label: 'ПОРТФОЛИО', name: 'portfolio' },
      { label: 'ПРАЙС-ЛИСТ', name: 'prices' },
      { label: 'КОНТАКТЫ', name: 'contacts' },
      { label: 'МЕСТОПОЛОЖЕНИЕ', name: 'location' },
      { label: 'О НАС', name: 'about' }
    ]
  }),

  computed: {
    routeName () {
      return this.$route.name
    }
  },

  methods: {
    getItemClassName (item) {
      return { item_active: item.name === this.routeName }
    },
    goHome () {
      this.$router.push('/')
    },
    push (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
$width: 25%;

.sidebar {
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0 40px;
  width: $width;

  .logo {
    color: $primary-color;
    cursor: pointer;
    margin-bottom: 40px;
    text-align: center;

    .text {
      font: 4.5em Whortle;
      letter-spacing: 1.1vw;
      line-height: 1;
      width: 100%;
    }

    .label {
      font-family: 'Proxima Nova Cn Rg';
      font-size: 0.9em;
      line-height: 0.5;
    }
  }

  .menu {
    color: #666;
    flex: 1;
    list-style: none;
    padding: 0;

    .item {
      align-items: center;
      border-bottom: 1px solid #e4e4e4;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      padding: 12px 0;

      &_active {
        font-weight: bold;
      }

      &:hover {
        color: #888;
      }

      &:last-child {
        border: 0;
      }
    }
  }

  .icons {
    background: rgba(221, 221, 221, 0.637);
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;
    margin-left: -40px;
    padding: 10px 40px;
    width: calc(100% + 80px);

    img {
      cursor: pointer;
      height: 32px;
      margin: 0 5px;
      width: 32px;
    }
  }
}
</style>