<template>
  <div class="wrapper">
    <nuxt/>
    <div class="locales">
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)">
        {{ locale.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import '~/assets/css/style.css'

export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  },
  mounted () {
    console.log(`current locale is: ${this.$i18n.locale}`)
  }
}
</script>
