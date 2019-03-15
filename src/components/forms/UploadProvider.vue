<script>
export default {
  name: "UploadProvider",
  data() {
    return {
      files: []
    };
  },
  provide() {
    const selfUploadProvider = this;
    return {
      upload: {
        files: this.files,
        attrs: {
          action: "#",
          ...this.$attrs,
          "http-request"() {
            if (selfUploadProvider.$attrs["http-request"])
              selfUploadProvider.$attrs["http-request"].call(this, arguments);
          },
          "on-change"(file) {
            if (selfUploadProvider.files.indexOf(file) === -1) {
              selfUploadProvider.files.push(file);
            }
            if (selfUploadProvider.$attrs["on-change"])
              selfUploadProvider.$attrs["on-change"].call(this, arguments);
          }
        },
        listeners: this.listeners
      }
    };
  },
  methods: {},
  render() {
    return this.$slots.default;
  }
};
</script>
