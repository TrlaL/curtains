<template>
  <div class="sidebar">
    <div class="logo">
      <div class="text">Аллея</div>
      <div class="label">Что-то там про шторы</div>
    </div>
    <ul class="menu">
      <li
        class="item"
        v-for="(item, i) in items"
        :key="i"
        @click="push(item.name)">
        {{ item.label }}
        <b-icon class="icon" icon="chevron-right" />
      </li>
    </ul>
    <div class="icons">
      <div class="service-icon vk-1"></div>
      <div class="service-icon vk-2"></div>
      <div class="service-icon facebook"></div>
    </div>
  </div>
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

  methods: {
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
  padding: 40px;
  width: $width;

  .logo {
    color:rgba(236, 92, 9, 0.8);
    margin-bottom: 40px;
    text-align: center;

    .text {
      font: 4.5em Whortle;
      letter-spacing: 1.1vw;
      line-height: 1;
      width: 100%;
    }

    .label {
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

      &:hover {
        color: #888;
      }

      &:last-child {
        border: 0;
      }
    }
  }

  .icons {
    display: flex;
  }
}
</style>