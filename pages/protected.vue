<template>
  <div class="protected-page">
    <h1>Protected Page</h1>
    <div class="title-navigation">
      <nuxt-link to="/public">Public Page</nuxt-link>
      <button @click="logout">Logout</button>
    </div>
    <section class="user-cards">
      <div v-for="user in users" :key="user.login.uuid" class="user-card">
        <img :src="user.picture.large" alt="User Avatar">
        <h3>{{ user.name.first }} {{ user.name.last }}</h3>
        <p><strong>Date of Birth:</strong> {{ new Date(user.dob.date).toLocaleDateString() }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Location:</strong> {{ user.location.city }}, {{ user.location.country }}</p>
      </div>
    </section>

    <button @click="loadMoreUsers" :disabled="loading">Load More</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { eraseCookie } from "~/utils/cookieHelper";

export default defineComponent({
  middleware: 'auth',
  data() {
    return {
      users: [],
      resultsPerPage: 6,
      page: 1,
      loading: false
    };
  },
  async created() {
    await this.loadMoreUsers();
  },
  methods: {
    logout() {
      eraseCookie('auth');
      this.$router.push('/');
    },
    async loadMoreUsers() {
      this.loading = true;
      try {
        const response = await fetch(`https://randomuser.me/api/?results=${this.resultsPerPage}&page=${this.page}`);
        const data = await response.json();
        this.users = [...this.users, ...data.results];
        this.page++;
      } catch (error) {
        console.error('Failed to load users:', error);
      }
      this.loading = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.protected-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #3490dc;
  }

  p {
    text-align: center;
    margin-bottom: 30px;
    font-size: 1.2rem;
    font-weight: 300;
  }
  .title-navigation {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-bottom: 26px;
    a {
      margin: 0 16px;
    }
    button {
      margin: 0;
      width: 150px;
      height: 45px;
    }
  }

  .user-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .user-card {
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;

    img {
      border-radius: 50%;
      margin-bottom: 10px;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }

    h3 {
      margin-bottom: 10px;
      font-size: 1.2rem;
      color: #2b6cb0;
    }

    p {
      margin: 5px 0;
      font-size: 0.9rem;
    }
  }

  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 20px auto 0;
    background: #3490dc;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: #2779bd;
    }
  }
}
</style>
