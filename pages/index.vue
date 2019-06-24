<template>
  <div class="container">
    <h1>{{ $t('nuxtStarter') }}</h1>
    <p>
      <el-button @click="login" type="primary" round>
        {{ $t('login') }}
      </el-button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$store.dispatch('updateAuthenticated', true)
      this.$router.replace(this.localePath('admin'))
    }
  }
}
</script>
