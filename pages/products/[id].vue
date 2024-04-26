<script setup lang="ts">
import { useRoute } from "vue-router";

import { ref } from "vue";

const data = ref({
  avatar: "https://placehold.co/600x400/orange/white",
});
const error = ref(null);

const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id);

const fetchData = async () => {
  try {
    const response = await fetch(
      `https://60b0c06a1f26610017fff217.mockapi.io/api/users/products/${route.params.id}`
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
  <div>
    <div class="navigation">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/apps">Apps</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>
    </div>
    <div class="app">
      <h2>App - ID - {{ route.params.id }}</h2>
      <h2 v-if="!data">App - ID - {{ data }}</h2>
      <div else class="card">
        <img :src="data.avatar" :alt="data.name" width="100" height="100" />
        <h2>{{ data.name }}</h2>
        <p>{{ data.desc }}</p>
        <p>Created At: {{ data.createdAt }}</p>
      </div>
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
  align-items: center;
  display: flex;
  flex-direction: column;
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
