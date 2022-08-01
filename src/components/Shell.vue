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
      const binder = 'https://mybinder.org';
      const repo = 'gibiansky/IHaskell';
      const ref = 'mybinder'
      
      this.$backend.connectToBinder(repo, ref, binder, (e) => {console.log(e)})
    }
  }
}
</script>