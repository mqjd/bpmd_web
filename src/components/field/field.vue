<script>
import MCheckbox from './src/checkbox.vue'
import MDate from './src/date.vue'
import MDaterange from './src/daterange.vue'
import MInput from './src/input.vue'
import MNumber from './src/number.vue'
import MRadio from './src/radio.vue'
import MSelect from './src/select.vue'
import MTextarea from './src/textarea.vue'
export default {
  name: 'MField',
  components: {
    MInput,
    MCheckbox,
    MDate,
    MDaterange,
    MNumber,
    MRadio,
    MSelect,
    MTextarea
  },
  render: function (createElement) {
    return createElement(
      'm-' + this.options.type,
      {
        attrs: {
          options: this.options,
          disabled: this.disabled
        }
      },
      this.$slots.default // 子元素数组
    )
  },
  props: {
    options: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
</style>
