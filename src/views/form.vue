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
        labelWidth: 80,
        labelPosition: 'right',
        fields: [{
          type: 'input',
          text: '输入框',
          placeholder: '请输入',
          allrow: false,
          cols: 2,
          required: true,
          disabled: false
        }, {
          type: 'input',
          text: '输入框',
          placeholder: '请输入',
          allrow: false,
          cols: 2,
          required: false,
          disabled: false
        }]
      }
    }
  }
}
</script>
