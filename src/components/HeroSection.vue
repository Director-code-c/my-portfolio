<script setup>
function scrollToWorks() {
  document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__glow hero__glow--blue" aria-hidden="true"></div>
    <div class="hero__glow hero__glow--cyan" aria-hidden="true"></div>

    <div class="container hero__inner">
      <h1 class="hero__title">把想法，做成真正能用的产品</h1>
      <p class="hero__subtitle">这里记录我开发的软件、AI 工具与实验项目。</p>
      <button type="button" class="btn btn--primary btn--lg hero__cta" @click="scrollToWorks">
        查看作品
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 120px 0 140px;
  background: var(--color-bg);
}

.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.hero__glow--blue {
  width: 480px;
  height: 480px;
  top: -160px;
  left: -120px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, transparent 70%);
}

.hero__glow--cyan {
  width: 440px;
  height: 440px;
  right: -140px;
  bottom: -160px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.14) 0%, transparent 70%);
}

.hero__inner {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__title {
  max-width: 720px;
  font-size: clamp(34px, 5.5vw, 54px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #0f172a 30%, var(--color-primary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.hero__subtitle {
  margin-top: 24px;
  font-size: 18px;
  color: var(--color-text-muted);
}

.hero__cta {
  margin-top: 40px;
}

@media (max-width: 768px) {
  .hero {
    padding: 96px 0 104px;
  }

  .hero__subtitle {
    font-size: 16px;
  }
}
</style>
