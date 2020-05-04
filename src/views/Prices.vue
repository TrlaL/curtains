<template>
  <div class="prices">
    <b-table
      bordered
      class="table"
      striped
      :fields="fields"
      :items="items">
    </b-table>
  </div>
</template>

<script>
export default {
  computed: {
    fields () {
      return [
        { key: 'id', label: '#' },
        { key: 'name', label: 'Наименование' },
        { key: 'value', label: 'Цена' }
      ]
    },
    items () {
      return [
        { id: 1, name: 'Какая-то штора 1', value: '1200' },
        { id: 2, name: 'Какая-то штора 2', value: '2200' },
        { id: 3, name: 'Какая-то штора 3', value: '3200' },
        { id: 4, name: 'Какая-то штора 4', value: '2500' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.prices {
  .table {
    background: #fff;
  }
}
</style>