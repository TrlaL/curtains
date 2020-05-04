<template>
  <PerfectScrollbar class="portfolio">
    <div
      class="frame"
      v-for="(image, i) in images"
      :key="i"
      @click="openModalViewer(image)">
      <img class="image" :src="require(`@/assets/images/${image}`)">
    </div>
  </PerfectScrollbar>
</template>

<script>
export default {
  data: () => ({
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']
  }),

  methods: {
    openModalViewer (image) {
      this.$store.commit('SET_MODAL', {
        name: 'ModalViewer',
        image: image
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
      box-shadow: 0 0 3px 1px $secondary-color;
    }
  }
}
</style>