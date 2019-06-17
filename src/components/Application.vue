<script>
export default {
  name: "MvApplication",
  inject: ["authentication"],
  props: {
    layout: String,
    author: Object,
    routes: Array
  },
  data() {
    return {
      data: {
        layout: this.layout || "vertical",
        author: this.author || {
          name: "Mille Volts",
          website: "https://www.millevolts.fr"
        },
        routes: this.routes || []
      }
    };
  },
  provide() {
    return {
      application: this.data
    };
  },
  render() {
    return this.$slots.default;
  }
};
</script>
