
<script>
import FormDesign from './form-design'
import FormView from './form-view'
export default {
  name: 'MForm',
  components: {
    FormDesign,
    FormView
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  render: function (createElement) {
    return createElement(
      'form-' + (this.options.mode || 'view'),
      {
        attrs: {
          options: this.options
        }
      },
      this.$slots.default
    )
  }
}
</script>
