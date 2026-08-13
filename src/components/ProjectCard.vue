<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const expanded = ref(false)
const detailRef = ref(null)

async function toggleDetail() {
  expanded.value = !expanded.value
  if (expanded.value) {
    await nextTick()
    detailRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <article class="project-card">
    <div class="project-card__main">
      <div class="project-card__icon-wrap">
        <img
          class="project-card__icon"
          :src="project.icon"
          :alt="`${project.name} 图标`"
          loading="lazy"
        />
      </div>

      <div class="project-card__body">
        <h3 class="project-card__name">{{ project.name }}</h3>

        <div class="project-card__meta">
          <span class="badge">版本 {{ project.version }}</span>
          <span class="badge badge--quiet">平台 {{ project.platform }}</span>
        </div>

        <p class="project-card__description">{{ project.description }}</p>

        <ul class="project-card__tags">
          <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
        </ul>

        <div class="project-card__actions">
          <button type="button" class="btn btn--secondary" @click="toggleDetail">
            {{ expanded ? '收起详情' : '查看详情' }}
          </button>

          <div class="project-card__download">
            <a
              v-if="project.downloadUrl"
              class="btn btn--primary"
              :href="project.downloadUrl"
              target="_blank"
              rel="noopener"
            >
              Windows 下载
            </a>
            <button v-else type="button" class="btn btn--disabled" disabled title="即将开放下载">
              Windows 下载
            </button>
            <span v-if="!project.downloadUrl" class="download-note">即将开放下载</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="expanded" ref="detailRef" class="project-card__detail">
      <div class="detail__grid">
        <div>
          <span class="detail__label">版本</span>
          <span class="detail__value">{{ project.version }}</span>
        </div>
        <div>
          <span class="detail__label">平台</span>
          <span class="detail__value">Windows</span>
        </div>
      </div>

      <h4 class="detail__heading">主要能力</h4>
      <ul class="detail__capabilities">
        <li v-for="capability in project.capabilities" :key="capability">
          <svg class="check" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M3 8.5 6.2 12 13 4.5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {{ capability }}
        </li>
      </ul>

      <div class="detail__status">
        <span class="detail__label">当前状态</span>
        <span class="status-badge">{{ project.status }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 32px;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

@media (hover: hover) {
  .project-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
}

.project-card__main {
  display: flex;
  gap: 28px;
  align-items: flex-start;
}

.project-card__icon-wrap {
  flex-shrink: 0;
}

.project-card__icon {
  width: 120px;
  height: 120px;
  border-radius: var(--radius);
  object-fit: cover;
  background: var(--gradient-soft);
  border: 1px solid var(--color-border);
}

.project-card__body {
  flex: 1;
  min-width: 0;
}

.project-card__name {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.project-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.badge {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  background: rgba(37, 99, 235, 0.1);
}

.badge--quiet {
  color: var(--color-text-muted);
  background: var(--color-surface-2);
}

.project-card__description {
  margin-top: 16px;
  color: var(--color-text-muted);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.tag {
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text);
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
}

.project-card__actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.project-card__download {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.download-note {
  font-size: 13px;
  color: var(--color-text-muted);
}

/* 详情展开区 */
.project-card__detail {
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px dashed var(--color-border);
}

.detail__grid {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.detail__label {
  display: block;
  font-size: 13px;
  color: var(--color-text-muted);
  margin-bottom: 6px;
}

.detail__value {
  font-size: 16px;
  font-weight: 600;
}

.detail__heading {
  margin-top: 24px;
  font-size: 15px;
  font-weight: 600;
}

.detail__capabilities {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 24px;
}

.detail__capabilities li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--color-text);
}

.check {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-accent);
}

.detail__status {
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.status-badge {
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  background: rgba(37, 99, 235, 0.1);
}

@media (max-width: 768px) {
  .project-card {
    padding: 24px;
  }

  .project-card__main {
    flex-direction: column;
    gap: 20px;
  }

  .project-card__icon {
    width: 88px;
    height: 88px;
  }

  .detail__capabilities {
    grid-template-columns: 1fr;
  }
}
</style>