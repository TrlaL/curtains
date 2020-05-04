<template>
  <b-modal
    hide-footer
    size="lg"
    title="Просмотр фото"
    visible
    @hide="clearModal">
    <img class="image" :src="require(`@/assets/images/${modal.image}`)">
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'modal'
    ])
  },

  methods: {
    clearModal () {
      this.$store.commit('SET_MODAL', {})
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  object-fit: contain;
  height: 75vh;
  width: 100%;
}
</style>