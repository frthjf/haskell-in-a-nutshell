<template>
    <button @click="connect()">Launch</button>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    async connect() {
      this.$backend.connectToBinder()
    }
  }
}
</script>