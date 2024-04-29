<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id);

const { data } = await useFetch(`/api/products/${route.params.id}`, {
  transform: (_apps) => _apps.data,
});
</script>

<template>
  <div>
    <div class="navigation">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/apps">Apps</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>
    </div>
    <div class="app">
      <h2>Products - ID - {{ route.params.id }}</h2>
      <h2 v-if="!data">Products - ID - {{ data }}</h2>
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
