<script setup>
const links = [
  { label: '作品', target: '#works' },
  { label: '关于', target: '#about' },
]

function scrollTo(target) {
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar__inner">
      <a class="navbar__brand" href="#hero" @click.prevent="scrollTo('#hero')">
        我的作品
      </a>
      <nav class="navbar__nav" aria-label="主导航">
        <a
          v-for="link in links"
          :key="link.target"
          class="navbar__link"
          :href="link.target"
          @click.prevent="scrollTo(link.target)"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--nav-height);
  background: rgba(248, 250, 252, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.navbar__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: var(--color-text);
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar__link {
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.navbar__link:hover {
  color: var(--color-primary);
  background: var(--gradient-soft);
}
</style>
