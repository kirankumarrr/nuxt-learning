<script setup lang="ts">
import { ref } from "vue";

const data = ref(null);
const error = ref(null);

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://60b0c06a1f26610017fff217.mockapi.io/api/users/products"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    data.value = await response.json();
  } catch (err) {
    error.value = err.message;
  }
};

fetchData();
</script>

<template>
  <div class="container">
    <div class="navigation">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/apps">Apps</NuxtLink>
    </div>
    <h1>Products</h1>
    <div class="app">
      <div v-if="!data">Loading</div>
      <router-link
        else
        v-for="user in data"
        :key="user.id"
        :to="'/products/' + user.id"
      >
        <div class="card">
          <img :src="user.avatar" :alt="user.name" width="100" height="100" />
          <h2>{{ user.name }}</h2>
          <p>{{ user.desc }}</p>
          <p>Created At: {{ user.createdAt }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  grid-gap: 20px;
  font-size: 20px;
}
.app {
  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card img {
  border-radius: 50%;
}
.card h2 {
  margin-top: 8px;
  margin-bottom: 4px;
}
.card p {
  margin: 4px 0;
}
</style>
