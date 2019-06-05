<template>
  <m-form :options="options"></m-form>
</template>

<script>
import MForm from '@/components/form/form'
export default {
  name: 'home',
  components: {
    MForm
  },
  data () {
    return {
      options: {
        mode: 'design'
      }
    }
  }
}
</script>
