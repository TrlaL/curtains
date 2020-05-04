<template>
  <b-modal
    visible
    @hide="clearModal">
    123
  </b-modal>
</template>

<script>
export default {
  methods: {
    clearModal () {
      this.$store.commit('SET_MODAL', {})
    }
  }
}
</script>