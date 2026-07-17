<script setup lang="ts">
import { useEvents } from '~/composables/useEvents'

const route = useRoute()
const { getEvent } = useEvents()

const event = computed(() => getEvent(route.params.slug as string))

if (!event.value) {
  throw createError({ statusCode: 404, statusMessage: 'Event not found' })
}

useSeoMeta({
  title: `${event.value.name} — Northwest University Admissions`,
  description: event.value.shortDescription,
  robots: 'noindex, nofollow',
})

const COLOR_MAP = {
  coral: { accent: 'var(--accent-coral)', light: 'var(--accent-coral-light)', tag: 'badge-coral' },
  teal:  { accent: 'var(--accent-teal)',  light: 'var(--accent-teal-light)',  tag: 'badge-teal'  },
  gold:  { accent: 'var(--accent-gold)',  light: 'var(--accent-gold-light)',  tag: 'badge-gold'  },
} as const

const colors = computed(() => COLOR_MAP[event.value!.color])

const selectedDate = ref(event.value.instances[0].date)
const selectedInst = computed(() =>
  event.value!.instances.find(i => i.date === selectedDate.value) ?? event.value!.instances[0]
)

const openFaq = ref<string | null>(null)
const toggleFaq = (q: string) => { openFaq.value = openFaq.value === q ? null : q }

const faqCategories = [
  { key: 'all', label: 'All' },
  { key: 'general', label: 'General' },
  { key: 'logistics', label: 'Logistics' },
  { key: 'cost', label: 'Cost & aid' },
  { key: 'parents', label: 'For parents' },
]
const activeFaqCat = ref('all')
const filteredFaqs = computed(() => {
  if (activeFaqCat.value === 'all') return event.value!.faqs
  return event.value!.faqs.filter(f => f.category === activeFaqCat.value)
})

const badgeName = ref('')

const printPage = () => window.print()
</script>

<template>
  <div>
    <SiteHeader :event="event" />

    <!-- ── Print: event name + date only ── -->
    <div class="no-print" aria-hidden="true"></div>

    <!-- ── Hero with video placeholder ──────────────────── -->
    <section class="event-hero" :style="`--event-accent: ${colors.accent}; --event-light: ${colors.light};`">
      <div class="hero-bg-img" :style="`background-image: url('${event.heroImage}')`" aria-hidden="true">
        <div class="hero-bg-overlay"></div>
      </div>

      <div class="container event-hero-inner">
        <div class="event-hero-copy">
          <div class="event-meta">
            <span :class="`badge ${colors.tag}`">
              {{ event.type === 'discover' ? '🏔️ Day Event' : '🌙 Overnight' }}
            </span>
            <span class="badge badge-dark">{{ selectedInst.timeStart }} – {{ selectedInst.timeEnd }}</span>
          </div>

          <h1 class="event-title">{{ event.name }}</h1>
          <p class="event-tagline">{{ event.tagline }}</p>

          <!-- Instance picker -->
          <div class="instance-picker">
            <p class="instance-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Pick your date
            </p>
            <div class="instance-chips">
              <button
                v-for="inst in event.instances"
                :key="inst.date"
                class="instance-chip"
                :class="{ 'is-active': inst.date === selectedDate }"
                @click="selectedDate = inst.date"
              >
                <span class="chip-weekday">{{ new Date(inst.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' }) }}</span>
                <span class="chip-date">{{ new Date(inst.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }}</span>
                <span class="chip-year">{{ new Date(inst.date + 'T00:00:00').getFullYear() }}</span>
              </button>
            </div>
          </div>

          <!-- CTA row -->
          <div class="event-ctas">
            <a :href="event.registrationUrl" target="_blank" rel="noopener" class="btn btn-coral btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Register for {{ selectedInst.label }}
            </a>
            <a :href="event.swoopShopUrl" target="_blank" rel="noopener" class="btn btn-outline btn-lg" style="border-color: rgba(255,255,255,.4); color: #fff;">
              🛍️ Swoop Shop
            </a>
          </div>
        </div>

        <!-- Video placeholder -->
        <div class="video-placeholder">
          <div class="video-thumb">
            <img :src="event.videoPlaceholder.thumbnail" :alt="event.videoPlaceholder.label" loading="eager" />
            <div class="video-overlay">
              <button class="play-ring" :aria-label="`Play: ${event.videoPlaceholder.label}`">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
          <p class="video-label">{{ event.videoPlaceholder.label }}</p>
          <span class="video-note badge badge-dark">Placeholder — video coming soon</span>
        </div>
      </div>
    </section>

    <!-- ── Main content ─────────────────────────────────── -->
    <div class="container event-layout">

      <!-- Left column -->
      <div class="event-main">

        <!-- About -->
        <section class="event-section" id="about">
          <h2 class="event-section-title">What to expect</h2>
          <p class="event-body-text">{{ event.description }}</p>
        </section>

        <!-- Schedule -->
        <section class="event-section" id="schedule">
          <div class="section-header-row">
            <h2 class="event-section-title">Your day</h2>
            <button class="btn btn-outline btn-sm no-print" @click="printPage">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="6" y="14" width="12" height="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Print schedule
            </button>
          </div>

          <div class="schedule-timeline">
            <div
              v-for="(item, i) in event.schedule"
              :key="i"
              class="timeline-item"
            >
              <div class="tl-time">{{ item.time }}</div>
              <div class="tl-dot" :style="`background: ${colors.accent}`" aria-hidden="true"></div>
              <div class="tl-content">
                <div class="tl-header">
                  <span class="tl-icon" aria-hidden="true">{{ item.icon }}</span>
                  <h3 class="tl-title">{{ item.title }}</h3>
                </div>
                <p v-if="item.description" class="tl-desc">{{ item.description }}</p>
                <p v-if="item.location" class="tl-location">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  {{ item.location }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- What to bring -->
        <section class="event-section" id="bring">
          <h2 class="event-section-title">What to bring</h2>
          <div class="bring-grid">
            <div
              v-for="(item, i) in event.bringItems"
              :key="i"
              class="bring-item"
            >
              <span class="bring-icon" aria-hidden="true">{{ item.icon }}</span>
              <span class="bring-text">{{ item.text }}</span>
            </div>
          </div>

          <div class="dress-code-box card-ghost">
            <div class="dress-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <p class="dress-label">Dress code</p>
              <p class="dress-code-val">{{ event.dressCode }}</p>
              <p class="dress-tip">{{ event.dressCodeTip }}</p>
            </div>
          </div>
        </section>

        <!-- Parents section -->
        <section class="event-section parents-section" id="parents">
          <div class="parents-header">
            <span class="parents-emoji" aria-hidden="true">👨‍👩‍👧</span>
            <div>
              <h2 class="event-section-title">{{ event.parentsTitle }}</h2>
              <p class="event-body-text">{{ event.parentsIntro }}</p>
            </div>
          </div>

          <div class="parents-grid">
            <div
              v-for="(item, i) in event.parentsItems"
              :key="i"
              class="parent-card card-ghost"
            >
              <span class="parent-icon" aria-hidden="true">{{ item.icon }}</span>
              <h3 class="parent-title">{{ item.title }}</h3>
              <p class="parent-body">{{ item.body }}</p>
            </div>
          </div>
        </section>

        <!-- Financial aid -->
        <section v-if="event.financialAid" class="event-section faid-section" id="aid">
          <div class="faid-box card-ghost">
            <div class="faid-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="faid-body">
              <h3 class="faid-headline">{{ event.financialAid.headline }}</h3>
              <p class="faid-text">{{ event.financialAid.body }}</p>
            </div>
            <a :href="event.financialAid.ctaUrl" target="_blank" rel="noopener" class="btn btn-gold btn-sm">
              {{ event.financialAid.ctaLabel }}
            </a>
          </div>
        </section>

        <!-- FAQ -->
        <section class="event-section" id="faq">
          <h2 class="event-section-title">Questions & answers</h2>

          <div class="faq-filters no-print" role="tablist" aria-label="Filter FAQ by topic">
            <button
              v-for="cat in faqCategories"
              :key="cat.key"
              class="faq-tab"
              :class="{ 'is-active': activeFaqCat === cat.key }"
              role="tab"
              :aria-selected="activeFaqCat === cat.key"
              @click="activeFaqCat = cat.key"
            >
              {{ cat.label }}
            </button>
          </div>

          <div class="faq-list">
            <div
              v-for="faq in filteredFaqs"
              :key="faq.q"
              class="faq-item"
            >
              <button
                class="faq-q"
                :aria-expanded="openFaq === faq.q"
                @click="toggleFaq(faq.q)"
              >
                <span>{{ faq.q }}</span>
                <svg class="faq-chevron" :class="{ 'is-open': openFaq === faq.q }" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <Transition name="faq-expand">
                <div v-if="openFaq === faq.q" class="faq-a">
                  <p>{{ faq.a }}</p>
                </div>
              </Transition>
            </div>
          </div>
        </section>

      </div>

      <!-- Sticky sidebar -->
      <aside class="event-sidebar">

        <!-- Registration card -->
        <div class="reg-card card" :style="`--card-accent: ${colors.accent}`">
          <div class="reg-card-header" :style="`background: ${colors.light}`">
            <p class="reg-date-display">
              <span class="reg-weekday">{{ new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long' }) }}</span>
              <span class="reg-full">{{ new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</span>
            </p>
            <p class="reg-time">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              {{ selectedInst.timeStart }} – {{ selectedInst.timeEnd }}
            </p>
          </div>

          <div class="reg-card-body">
            <a :href="event.registrationUrl" target="_blank" rel="noopener" class="btn btn-coral btn-full btn-lg">
              Register now — it's free
            </a>
            <a :href="event.swoopShopUrl" target="_blank" rel="noopener" class="btn btn-outline btn-full btn-sm">
              🛍️ Swoop Shop
            </a>
            <p class="reg-note">No commitment required to register.</p>
          </div>
        </div>

        <!-- Badge name generator -->
        <div class="badge-generator card">
          <h3 class="badge-gen-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="2"/>
            </svg>
            Make your name tag
          </h3>
          <p class="badge-gen-sub">Your name as it will appear on your event badge:</p>
          <div class="field">
            <label for="badgeName">Your name</label>
            <input
              id="badgeName"
              v-model="badgeName"
              type="text"
              placeholder="e.g. Maya Thompson"
              maxlength="40"
            />
          </div>
          <div v-if="badgeName" class="badge-preview" :style="`border-color: ${colors.accent}; background: ${colors.light}`">
            <p class="badge-preview-label">Preview</p>
            <p class="badge-preview-name">{{ badgeName }}</p>
            <p class="badge-preview-event">{{ event.name }} · {{ selectedInst.label }}</p>
          </div>
        </div>

        <!-- Contact -->
        <div class="contact-card card-ghost">
          <h3 class="contact-title">Questions?</h3>
          <p class="contact-body">Our admissions team replies within one business day.</p>
          <a href="mailto:visit@northwestu.edu" class="contact-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            visit@northwestu.edu
          </a>
        </div>

      </aside>
    </div>

    <SiteFooter />
    <FaqChatbot :event-name="event.name" />
  </div>
</template>

<style scoped>
/* ── Event hero ────────────────────────────────────────── */
.event-hero {
  position: relative;
  background: var(--bg-dark);
  color: var(--text-on-dark);
  padding: clamp(80px, 10vw, 120px) 0 clamp(60px, 8vw, 96px);
  overflow: hidden;
}
.hero-bg-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.25;
}
.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,23,41,.95) 0%, rgba(0,23,41,.7) 50%, rgba(0,23,41,.85) 100%);
}
.event-hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(32px, 5vw, 56px);
  align-items: start;
}
@media (min-width: 960px) {
  .event-hero-inner { grid-template-columns: 1.4fr 1fr; align-items: center; }
}

.event-meta { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }

.event-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 3.5rem);
  letter-spacing: var(--tracking-tight);
  color: #fff;
  line-height: 1.05;
  margin-bottom: 12px;
}
.event-tagline {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.1rem, 1.5vw, 1.4rem);
  color: rgba(240,244,248,.75);
  margin-bottom: 28px;
  line-height: var(--leading-snug);
}

.instance-picker { margin-bottom: 24px; }
.instance-label {
  display: flex; align-items: center; gap: 6px;
  font-size: var(--text-xs); font-weight: 700;
  letter-spacing: var(--tracking-widest); text-transform: uppercase;
  color: rgba(240,244,248,.5);
  margin-bottom: 10px;
}
.instance-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.instance-chip {
  display: flex; flex-direction: column; align-items: center;
  padding: 8px 16px;
  border-radius: var(--radius-md);
  border: 1.5px solid rgba(255,255,255,.2);
  background: rgba(255,255,255,.07);
  color: rgba(240,244,248,.7);
  cursor: pointer;
  transition: all var(--dur-fast) ease;
}
.instance-chip.is-active,
.instance-chip:hover {
  border-color: var(--event-accent);
  background: rgba(255,255,255,.12);
  color: #fff;
}
.chip-weekday { font-size: var(--text-xs); font-weight: 700; text-transform: uppercase; letter-spacing: .06em; }
.chip-date { font-size: var(--text-base); font-weight: 700; }
.chip-year { font-size: var(--text-xs); opacity: .6; }

.event-ctas { display: flex; flex-wrap: wrap; gap: 12px; }

/* Video placeholder */
.video-placeholder { display: flex; flex-direction: column; gap: 10px; }
.video-thumb {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 16/9;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.12);
}
.video-thumb img {
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: .6;
}
.video-overlay {
  position: absolute;
  inset: 0;
  display: grid; place-items: center;
  background: rgba(0,23,41,.35);
}
.play-ring {
  width: 64px; height: 64px;
  border-radius: 50%;
  background: rgba(255,255,255,.15);
  border: 2px solid rgba(255,255,255,.5);
  color: #fff;
  display: grid; place-items: center;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: background var(--dur-fast) ease, transform var(--dur-fast) var(--ease-spring);
}
.play-ring:hover { background: rgba(255,255,255,.25); transform: scale(1.1); }
.video-label { font-size: var(--text-sm); color: rgba(240,244,248,.7); font-weight: 500; }
.video-note { align-self: flex-start; }

/* ── Event layout ────────────────────────────────────────── */
.event-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(32px, 5vw, 56px);
  padding-top: clamp(48px, 6vw, 72px);
  padding-bottom: clamp(60px, 8vw, 96px);
}
@media (min-width: 1024px) {
  .event-layout { grid-template-columns: 1fr 320px; align-items: start; }
}

.event-section { margin-bottom: clamp(40px, 6vw, 64px); }
.section-header-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 24px; }
.event-section-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-3xl);
  color: var(--text-primary);
  letter-spacing: var(--tracking-tight);
  margin-bottom: 20px;
}
.section-header-row .event-section-title { margin-bottom: 0; }
.event-body-text {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

/* ── Schedule timeline ──────────────────────────────────── */
.schedule-timeline { display: flex; flex-direction: column; gap: 0; }
.timeline-item {
  display: grid;
  grid-template-columns: 80px 12px 1fr;
  gap: 0 16px;
  align-items: start;
  min-height: 60px;
}
.tl-time {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-muted);
  padding-top: 2px;
  text-align: right;
  white-space: nowrap;
}
.tl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 5px;
  flex: none;
  position: relative;
  z-index: 1;
}
.timeline-item:not(:last-child) .tl-dot::after {
  content: '';
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: var(--border-subtle);
  height: calc(100% + 20px);
}
.tl-content { padding-bottom: 24px; }
.tl-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.tl-icon { font-size: 1.1rem; }
.tl-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-lg);
  color: var(--text-primary);
}
.tl-desc { font-size: var(--text-base); color: var(--text-secondary); line-height: var(--leading-relaxed); margin-bottom: 4px; }
.tl-location {
  display: flex; align-items: center; gap: 4px;
  font-size: var(--text-xs); color: var(--text-muted);
  font-weight: 500;
}

/* ── Bring ──────────────────────────────────────────────── */
.bring-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 20px;
}
@media (min-width: 600px) { .bring-grid { grid-template-columns: 1fr 1fr; } }
.bring-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--bg-card);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-sm);
}
.bring-icon { font-size: 1.3rem; flex: none; }
.bring-text { font-size: var(--text-base); color: var(--text-secondary); line-height: var(--leading-snug); }

.dress-code-box {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 20px;
}
.dress-icon {
  width: 44px; height: 44px;
  border-radius: var(--radius-md);
  background: var(--accent-gold-light);
  display: grid; place-items: center;
  flex: none;
}
.dress-label { font-size: var(--text-xs); font-weight: 700; text-transform: uppercase; letter-spacing: var(--tracking-widest); color: var(--text-muted); margin-bottom: 4px; }
.dress-code-val { font-family: var(--font-display); font-weight: 800; font-size: var(--text-xl); color: var(--text-primary); margin-bottom: 4px; }
.dress-tip { font-size: var(--text-sm); color: var(--text-secondary); }

/* ── Parents ────────────────────────────────────────────── */
.parents-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}
.parents-emoji { font-size: 2.4rem; flex: none; margin-top: 4px; }
.parents-section .event-section-title { margin-bottom: 8px; }
.parents-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}
@media (min-width: 640px) { .parents-grid { grid-template-columns: 1fr 1fr; } }
.parent-card { padding: 20px; }
.parent-icon { font-size: 1.5rem; display: block; margin-bottom: 10px; }
.parent-title { font-family: var(--font-display); font-weight: 700; font-size: var(--text-lg); color: var(--text-primary); margin-bottom: 8px; }
.parent-body { font-size: var(--text-base); color: var(--text-secondary); line-height: var(--leading-relaxed); }

/* ── Financial aid ──────────────────────────────────────── */
.faid-box {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  flex-wrap: wrap;
}
.faid-icon {
  width: 48px; height: 48px;
  border-radius: var(--radius-circle);
  background: var(--accent-gold-light);
  display: grid; place-items: center;
  flex: none;
}
.faid-body { flex: 1; min-width: 200px; }
.faid-headline { font-family: var(--font-display); font-weight: 800; font-size: var(--text-xl); color: var(--text-primary); margin-bottom: 6px; }
.faid-text { font-size: var(--text-base); color: var(--text-secondary); line-height: var(--leading-relaxed); }

/* ── FAQ ────────────────────────────────────────────────── */
.faq-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.faq-tab {
  padding: 7px 16px;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--border-mid);
  background: transparent;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all var(--dur-fast) ease;
}
.faq-tab:hover { border-color: var(--accent-teal); color: var(--accent-teal); }
.faq-tab.is-active { background: var(--accent-teal); color: #fff; border-color: var(--accent-teal); }
.faq-list { display: flex; flex-direction: column; gap: 4px; }
.faq-item {
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  background: var(--bg-card);
}
.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
  transition: background var(--dur-fast) ease;
}
.faq-q:hover { background: var(--bg-tint); }
.faq-chevron { flex: none; transition: transform var(--dur-base) var(--ease-out); color: var(--text-muted); }
.faq-chevron.is-open { transform: rotate(180deg); }
.faq-a {
  padding: 0 20px 18px;
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  border-top: 1px solid var(--border-subtle);
  padding-top: 14px;
}
.faq-expand-enter-active, .faq-expand-leave-active { transition: opacity var(--dur-base) ease; }
.faq-expand-enter-from, .faq-expand-leave-to { opacity: 0; }

/* ── Sidebar ────────────────────────────────────────────── */
.event-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 80px;
}
.reg-card { overflow: hidden; }
.reg-card-header {
  padding: 20px;
  border-bottom: 1px solid var(--border-subtle);
}
.reg-date-display { display: flex; flex-direction: column; gap: 2px; margin-bottom: 6px; }
.reg-weekday { font-size: var(--text-xs); font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--text-muted); }
.reg-full { font-family: var(--font-display); font-weight: 800; font-size: var(--text-xl); color: var(--text-primary); }
.reg-time {
  display: flex; align-items: center; gap: 6px;
  font-size: var(--text-sm); color: var(--text-secondary); font-weight: 500;
}
.reg-card-body { padding: 20px; display: flex; flex-direction: column; gap: 10px; }
.reg-note { text-align: center; font-size: var(--text-xs); color: var(--text-muted); }

.badge-gen-title {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--font-display); font-weight: 700; font-size: var(--text-lg);
  color: var(--text-primary); margin-bottom: 6px;
}
.badge-gen-sub { font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: 14px; }
.badge-generator { padding: 20px; display: flex; flex-direction: column; gap: 12px; }
.badge-preview {
  padding: 14px;
  border-radius: var(--radius-md);
  border: 2px solid;
  text-align: center;
}
.badge-preview-label { font-size: var(--text-xs); font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--text-muted); margin-bottom: 4px; }
.badge-preview-name { font-family: var(--font-display); font-weight: 800; font-size: var(--text-2xl); color: var(--text-primary); }
.badge-preview-event { font-size: var(--text-xs); color: var(--text-secondary); margin-top: 2px; }

.contact-card { padding: 20px; }
.contact-title { font-family: var(--font-display); font-weight: 700; font-size: var(--text-lg); color: var(--text-primary); margin-bottom: 6px; }
.contact-body { font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: 12px; }
.contact-link {
  display: flex; align-items: center; gap: 8px;
  font-size: var(--text-sm); font-weight: 600; color: var(--accent-teal);
  text-decoration: none;
  transition: color var(--dur-fast) ease;
}
.contact-link:hover { color: var(--accent-coral); }

/* ── Print overrides ────────────────────────────────────── */
@media print {
  .event-hero { background: white; color: black; padding: 24pt 0; }
  .hero-bg-overlay, .hero-bg-img { display: none; }
  .event-hero-inner { display: block; }
  .event-ctas, .video-placeholder, .no-print, .event-sidebar, .reg-card, .badge-generator, .contact-card, .faid-section { display: none !important; }
  .event-layout { display: block; }
  .event-main { max-width: 100%; }
  .event-section { page-break-inside: avoid; margin-bottom: 24pt; }
  .timeline-item { page-break-inside: avoid; }
  .event-section-title { font-size: 16pt; }
  .event-body-text { font-size: 11pt; }
  h1.event-title { font-size: 24pt; color: black; }
  .event-tagline { font-size: 12pt; color: #444; }
}
</style>
