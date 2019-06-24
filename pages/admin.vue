<template>
  <div class="container">
    <h1>{{$t('nuxtStarter')}}</h1>
    <p>
      <el-button @click="logout" type="danger" round>{{$t('logout')}}</el-button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('updateAuthenticated', false)
      this.$router.replace(this.localePath('index'))
    }
  }
}
</script>
