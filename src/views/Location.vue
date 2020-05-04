<template>
  <div class="location">
    <p>Наш адрес: г. Сальск, улица Пушкина</p>
    <iframe class="map" :src="computedUrl"></iframe>
  </div>
</template>

<script>
export default {
  data: () => ({
    params: {
      q: 'place_id:EjtVbGl0c2EgUHVzaGtpbmEsIFNhbHNrLCBSb3N0b3Zza2F5YSBvYmxhc3QnLCBSdXNzaWEsIDM0NzYzMCIuKiwKFAoSCUG6gm1o8PxAEcY9iWpg5xLoEhQKEgkVygwbavD8QBHcl5wS5YbloQ',
      key: 'AIzaSyB8cyr-xYpNl31QWWheF1FyF-uwW26iS_E'
    },
    url: 'https://www.google.com/maps/embed/v1/place'
  }),

  computed: {
    computedUrl () {
      const params = new URLSearchParams(this.params)
      return `${this.url}?${params}`
    }
  }
}
</script>

<style lang="scss" scoped>
.location {
  .map {
    border: 0;
    height: 500px;
    width: 100%;
  }
}
</style>