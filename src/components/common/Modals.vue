<template>
  <div class="modals">
    <component :is="modal.name" />
  </div>
</template>

<script>
import ModalViewer from '@/modals/ModalViewer'
import { mapGetters } from 'vuex'

export default {
  components: {
    ModalViewer
  },

  computed: {
    ...mapGetters([
      'modal'
    ])
  }
}
</script>