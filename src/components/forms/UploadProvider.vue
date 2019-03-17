<script>
export default {
  name: "UploadProvider",
  props: {
    httpRequest: Function,
    onChange: Function,
    onSuccess: Function,
    onRemove: Function
  },
  data() {
    return {
      files: []
    };
  },
  provide() {
    const self = this;
    return {
      upload: {
        files: this.files,
        attrs: {
          action: "#",
          httpRequest() {
            if (self.httpRequest) self.httpRequest(...arguments);
          },
          onChange(file) {
            if (self.files.indexOf(file) === -1) {
              self.files.push(file);
            }
            if (self.onChange) self.onChange(...arguments);
          },
          onRemove() {
            if (self.onRemove) self.onRemove(...arguments);
          },
          onSuccess() {
            if (self.onSuccess) self.onSuccess(...arguments);
          },
          ...this.$attrs
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
