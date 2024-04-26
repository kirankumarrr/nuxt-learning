<template>
  <div>
    <h1>Home</h1>

    <header>
      <nav>
        <div class="navigation">
          <NuxtLink to="/apps">Apps</NuxtLink>
          <NuxtLink to="/products">Products</NuxtLink>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  grid-gap: 20px;
  font-size: 20px;
}
</style>
