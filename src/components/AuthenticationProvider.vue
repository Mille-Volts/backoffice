<script>
import { getUser, setUser, unsetUser } from "./auth";

export default {
  name: "AuthenticationProvider",
  props: {
    fetch: Function,
    tryLogin: Function,
    tryLogout: Function
  },
  data() {
    return {
      user: {
        data: null,
        authenticated: false,
        type: null,
        date: null
      }
    };
  },
  provide() {
    return {
      user: this.user,
      authentication: {
        fetch: this.fetch || this.fetchDefault,
        tryLogin: this.tryLogin || this.tryLoginDefault,
        tryLogout: this.tryLogout || this.tryLogoutDefault
      }
    };
  },
  async created() {
    this.$set(this.user, "data", await (this.fetch || this.fetchDefault)());
    this.$set(this.user, "authenticated", true);
    this.$set(this.user, "type", "storage");
    this.$set(this.user, "date", new Date());
  },
  methods: {
    fetchDefault() {
      return this.user.data || getUser();
    },
    tryLoginDefault({ type, ...data }) {
      switch (type) {
        case "guest":
          this.$set(this.user, "data", data);
          this.$set(this.user, "authenticated", true);
          this.$set(this.user, "type", "guest");
          this.$set(this.user, "date", new Date());
          break;
        default:
          throw new Error(`Aucune méthode de connexion implémentée !`);
      }
      setUser(this.user.data);
      this.$router.push(this.$route.query.next || { name: "home" });
    },
    tryLogoutDefault() {
      this.$set(this.user, "data", null);
      this.$set(this.user, "authenticated", false);
      this.$set(this.user, "type", null);
      this.$set(this.user, "date", null);
      unsetUser();
      this.$router.push({ name: "login" });
    }
  },
  render() {
    return this.$slots.default;
  }
};
</script>