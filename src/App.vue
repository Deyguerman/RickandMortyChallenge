<template>
  <Home/>
</template>

<script>
const Home = () => import('@/views/Home.vue')

export default {
  name: 'App',
  components: {
    Home
  }
};
</script>

<style lang="scss">
</style>
