<script>
export default {
  name: "Application",
  data() {
    return {
      layout: this.layout || "vertical"
    };
  },
  provide() {
    return {
      application: this
    };
  },
  render() {
    return this.$slots.default;
  }
};
</script>

<style type="text/css">
@import url("https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600");
</style>
