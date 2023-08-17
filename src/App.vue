<template>
  <div>
    <header v-if="authenticated">
      <div>로그인한 관리자 계정 정보 : {{ authenticated }}</div>
      <button @click="logout">로그아웃</button>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters({
      authenticated: "auth/authUser",
    }),
  },
  methods: {
    ...mapActions({
      logoutAction: "auth/logout",
    }),

    logout() {
      this.logoutAction();
    },
  },
};
</script>

<style scoped>
header {
  background-color: lightgray;
}
</style>
