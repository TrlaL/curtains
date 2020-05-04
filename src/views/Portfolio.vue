<template>
  <div class="portfolio">
    <div
      class="frame"
      v-for="(image, i) in images"
      :key="i"
      @click="openModalViewer">
      <img class="image" :src="require(`@/assets/images/${image}`)">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  }),

  methods: {
    openModalViewer () {
      this.$store.commit('SET_MODAL', {
        name: 'ModalViewer'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: 150px;
  grid-template-columns: repeat(3, 1fr);

  .image {
    cursor: pointer;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s;
    width: 100%;

    &:hover {
      box-shadow: 0 0 3px 3px rgba(236, 92, 9, 0.5);
    }
  }
}
</style>