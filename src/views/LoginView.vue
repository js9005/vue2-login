<template>
  <div>
    <h1>LoginView</h1>

    <form action="">
      <input v-model="email" type="text" placeholder="이메일" />
      <br />
      <input v-model="password" type="password" placeholder="비밀번호" />
      <br />
      <button @click="login">로그인</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      loginAction: "auth/login",
    }),

    async login(e) {
      e.preventDefault();
      await this.loginAction({
        userStringId: this.email,
        password: this.password,
      });
    },
  },
};
</script>
