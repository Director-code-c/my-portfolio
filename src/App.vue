<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectCard from './components/ProjectCard.vue'
import AboutSection from './components/AboutSection.vue'
import { projects } from './data/projects.js'
</script>

<template>
  <Navbar />

  <main>
    <HeroSection />

    <!-- 作品区 -->
    <section id="works" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">我的作品</h2>
        </div>

        <div class="works__list">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>

        <!-- 未来作品 -->
        <div class="works__coming">
          <svg class="works__coming-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <h3 class="works__coming-title">更多作品正在路上</h3>
          <p class="works__coming-desc">新的软件与实验项目会陆续在这里发布。</p>
        </div>
      </div>
    </section>

    <AboutSection />
  </main>

  <footer class="site-footer">
    <div class="container">
      <p class="site-footer__inner">© 2026 My Works</p>
      <p class="site-footer__built">Built with <span class="built-accent">Vue</span></p>
    </div>
  </footer>
</template>

<style scoped>
.works__list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.works__coming {
  margin-top: 40px;
  padding: 44px 24px;
  text-align: center;
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
}

.works__coming-icon {
  width: 34px;
  height: 34px;
  margin: 0 auto 14px;
  color: var(--color-primary);
}

.works__coming-title {
  font-size: 19px;
  font-weight: 600;
}

.works__coming-desc {
  margin-top: 8px;
  font-size: 15px;
  color: var(--color-text-muted);
}

.site-footer {
  padding: 36px 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.site-footer__inner {
  font-size: 15px;
  color: var(--color-text-muted);
}

.site-footer__built {
  margin-top: 6px;
  font-size: 13px;
  color: var(--color-text-muted);
}

.built-accent {
  color: var(--color-primary);
  font-weight: 600;
}
</style>