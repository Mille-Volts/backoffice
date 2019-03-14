<script>
import { getUser, setUser, unsetUser } from "../util/auth";

/*TODO
 - authentication provider gère le stockage
 - chaque XXLogin récupère le authentication provider et possède une fonction qui permet de réaliser la connexion
 - si connexion OK -> on utilise la fonction login() du authentication provider sur chaque XXLogin et on déclenche un évènement "login-success"
 - si connexion pas OK -> on déclenche un évènement @login-error
*/

export default {
  name: "AuthenticationProvider",
  props: {
    fetch: Function,
    login: Function,
    logout: Function
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
        fetch: this.doFetch,
        login: this.doLogin,
        logout: this.doLogout,
        setUser: this.doSetUser,
        unsetUser: this.doUnsetUser
      }
    };
  },
  async created() {
    const userData = await this.doFetch();
    if (userData) {
      this.doUnsetUser();
    } else {
      this.doSetUser(userData, "session");
    }
  },
  methods: {
    async doFetch() {
      const fnFetch = this.fetch || this.fetchDefault;
      const data = await fnFetch();
      return data;
    },
    fetchDefault() {
      return this.user.data || getUser();
    },
    async doLogin({ type, ...data }) {
      const fnLogin = this.login || this.loginDefault;
      await fnLogin({ type, ...data });
      this.doSetUser(userData, type);
    },
    loginDefault({ type, ...data }) {
      switch (type) {
        case "guest":
          this.doSetUser(data);
          this.$router.push(this.$route.query.next || { name: "home" });
          return data;
        default:
          throw new Error(`Login method not implemented!`);
      }
    },
    async doLogout() {
      const fnLogout = this.logout || this.logoutDefault;
      await fnLogout();
      this.doUnsetUser();
    },
    logoutDefault() {
      this.$router.push({ name: "login" });
    },
    async doSetUser(data = null, type = null) {
      const fnSetUser = this.setUser || this.setUserDefault;
      await fnSetUser(data);
      this.$set(this.user, "data", data);
      this.$set(this.user, "authenticated", true);
      this.$set(this.user, "type", type);
      this.$set(this.user, "date", new Date());
    },
    setUserDefault(data) {
      return setUser(data);
    },
    async doUnsetUser() {
      const fnUnsetUser = this.unsetUser || this.unsetUserDefault;
      await fnUnsetUser();
      this.$set(this.user, "data", null);
      this.$set(this.user, "authenticated", false);
      this.$set(this.user, "type", null);
      this.$set(this.user, "date", null);
    },
    unsetUserDefault() {
      return unsetUser();
    }
  },
  render() {
    return this.$slots.default;
  }
};
</script>
