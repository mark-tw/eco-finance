<template>
  <div class="login-page">
    <h1>Login Page</h1>
    <form @submit.prevent="login" class="login-form">
      <input v-model="username" placeholder="email" required />
      <input v-model="password" type="password" placeholder="password" required />
      <button type="submit">Login</button>
    </form>
    <div class="navigation">
      <nuxt-link style="margin-top: 24px" to="/public">Public Page</nuxt-link>
    </div>
  </div>
</template>

<script>
import { setCookie } from '@/utils/cookieHelper';

export default {
  middleware: 'auth',
  data() {
    return {
      username: 'admin@example.com',
      password: 'Qwerty12345',
    };
  },
  methods: {
    login() {
      if (this.username === 'admin@example.com' && this.password === 'Qwerty12345') {
        setCookie('auth', 'true', 1); // 1 day expiry
        this.$router.push('/protected');
      } else {
        alert('Invalid credentials');
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border-radius: 15px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  color: #333;
}
.navigation {
  margin-top: 32px;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #3490dc;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.login-form button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background: #3490dc;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.login-form button:hover {
  background: #2779bd;
}
</style>
