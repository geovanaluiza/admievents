<script setup lang="ts">
import { useEvents } from '~/composables/useEvents'

const { allEvents } = useEvents()

const COLOR_MAP = {
  coral: { bg: 'rgba(251,217,69,.12)', accent: 'var(--nu-tour)', tag: 'badge-gold' },
  teal:  { bg: 'rgba(68,186,130,.1)',      accent: 'var(--accent-teal)', tag: 'badge-teal' },
  gold:  { bg: 'rgba(251,217,69,.12)', accent: 'var(--nu-tour)',   tag: 'badge-gold' },
} as const

const getColors = (color: 'coral' | 'teal' | 'gold') => COLOR_MAP[color]
</script>

<template>
  <div>
    <SiteHeader />

    <!-- ── Hero ───────────────────────────────────────────── -->
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow eyebrow-gold">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Northwest University Admissions
          </p>
          <h1 class="hero-title">Your next adventure<br />starts <em>here.</em></h1>
          <p class="hero-sub">
            Pick your mission. Tour the campus, stay overnight, meet the people who make this place home.
            Kirkland, WA — 20 min from Seattle.
          </p>
          <div class="hero-actions">
            <a href="#missions" class="btn btn-coral btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              See upcoming missions
            </a>
            <a href="mailto:admissions@northwestu.edu" class="btn btn-outline">
              Ask us anything
            </a>
          </div>
        </div>

        <!-- Decorative adventure graphic -->
        <div class="hero-graphic" aria-hidden="true">
          <div class="graphic-card">
            <span class="graphic-emoji">🏔️</span>
            <div class="graphic-label">56 acres</div>
            <div class="graphic-sub">of Pacific Northwest beauty</div>
          </div>
          <div class="graphic-card">
            <span class="graphic-emoji">🎓</span>
            <div class="graphic-label">10 min</div>
            <div class="graphic-sub">from downtown Seattle</div>
          </div>
          <div class="graphic-card">
            <span class="graphic-emoji">🌲</span>
            <div class="graphic-label">Forest</div>
            <div class="graphic-sub">trails behind every building</div>
          </div>
        </div>
      </div>

      <!-- Wave divider -->
      <div class="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#FFFBF5"/>
        </svg>
      </div>
    </section>

    <!-- ── Missions / Event Cards ────────────────────────── -->
    <section class="section" id="missions">
      <div class="container">
        <header class="section-head reveal">
          <p class="eyebrow">Choose your path</p>
          <h2 class="section-title">Upcoming missions</h2>
          <p class="section-sub">Each one is a different way to get a real feel for what life at NU looks like.</p>
        </header>

        <div class="missions-grid">
          <article
            v-for="event in allEvents"
            :key="event.id"
            class="mission-card card reveal"
            :style="`--card-accent: ${getColors(event.color).accent}; --card-bg: ${getColors(event.color).bg};`"
          >
            <div class="mission-header">
              <span class="mission-emoji" aria-hidden="true">{{ event.emoji }}</span>
              <span :class="`badge ${getColors(event.color).tag}`">{{ event.type === 'discover' ? 'Day event' : 'Overnight' }}</span>
            </div>

            <h3 class="mission-name">{{ event.name }}</h3>
            <p class="mission-tagline">{{ event.tagline }}</p>
            <p class="mission-desc">{{ event.shortDescription }}</p>

            <!-- Instance selector -->
            <div class="mission-dates">
              <p class="dates-label">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Choose your date
              </p>
              <div class="dates-list">
                <a
                  v-for="inst in event.instances"
                  :key="inst.date"
                  :href="`/events/${event.slug}?date=${inst.date}`"
                  class="date-chip"
                >
                  <span class="date-chip-day">{{ new Date(inst.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' }) }}</span>
                  <span class="date-chip-full">{{ new Date(inst.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }}</span>
                </a>
              </div>
            </div>

            <div class="mission-footer">
              <a :href="`/events/${event.slug}`" class="btn btn-outline btn-sm">
                See mission details →
              </a>
              <a :href="event.registrationUrl" target="_blank" rel="noopener" class="btn btn-coral btn-sm">
                Register →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ── Quick stats ─────────────────────────────────── -->
    <section class="stats-strip">
      <div class="container stats-inner">
        <div class="stat-item">
          <strong>100%</strong>
          <span>of programs include real internships</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat-item">
          <strong>94%</strong>
          <span>of grads employed or in grad school in 6 months</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat-item">
          <strong>18:1</strong>
          <span>student-to-faculty ratio</span>
        </div>
        <div class="stat-divider" aria-hidden="true"></div>
        <div class="stat-item">
          <strong>90%+</strong>
          <span>of students receive financial aid</span>
        </div>
      </div>
    </section>

    <!-- ── Financial Aid snippet ────────────────────────── -->
    <section class="section-sm faid-strip">
      <div class="container faid-inner">
        <div class="faid-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="faid-copy">
          <h3>Scholarships & financial aid</h3>
          <p>Over 90% of NU students receive financial aid. Grants, scholarships, and work-study — we'll walk you through the full picture before you apply.</p>
        </div>
        <a href="https://www.northwestu.edu/financial-aid" target="_blank" rel="noopener" class="btn btn-gold btn-sm">
          Explore aid options →
        </a>
      </div>
    </section>

    <!-- ── Visit / contact CTA ──────────────────────────── -->
    <section class="section visit-cta">
      <div class="container">
        <div class="visit-card card-ghost">
          <div class="visit-copy">
            <p class="eyebrow eyebrow-teal">Can't find the right event?</p>
            <h2 class="visit-title">We'll work with your schedule.</h2>
            <p class="visit-sub">Private tours run year-round. Talk to an admissions counselor one-on-one. Or just email us — we actually reply.</p>
          </div>
          <div class="visit-actions">
            <a href="mailto:admissions@northwestu.edu" class="btn btn-navy">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              admissions@northwestu.edu
            </a>
            <a href="tel:+14255551234" class="btn btn-outline">(425) 555-1234</a>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
    <FaqChatbot />
  </div>
</template>

<style scoped>
/* ── Hero ──────────────────────────────────────────────── */
.hero {
  background: var(--bg-dark);
  color: var(--text-on-dark);
  padding: clamp(72px, 10vw, 120px) 0 0;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0,104,187,.15) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 20% 80%, rgba(251,217,69,.08) 0%, transparent 60%);
  pointer-events: none;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 72px);
  align-items: center;
  padding-bottom: clamp(60px, 8vw, 100px);
}
@media (min-width: 900px) {
  .hero-inner { grid-template-columns: 1.2fr 1fr; }
}
.hero-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-hero);
  letter-spacing: var(--tracking-tight);
  color: #fff;
  line-height: 1.0;
  margin-bottom: 20px;
}
.hero-title em { font-style: italic; color: var(--accent-gold); }
.hero-sub {
  font-size: var(--text-lg);
  color: rgba(240,244,248,.75);
  line-height: var(--leading-relaxed);
  max-width: 44ch;
  margin-bottom: 32px;
}
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }

.hero-graphic {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}
.graphic-card {
  background: rgba(3,76,135,.2);
  border: 1px solid rgba(0,104,187,.25);
  border-radius: var(--radius-lg);
  padding: 20px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.graphic-emoji { font-size: 2rem; }
.graphic-label {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-xl);
  color: #fff;
}
.graphic-sub { font-size: var(--text-xs); color: rgba(240,244,248,.55); }

.hero-wave {
  position: relative;
  margin-top: -2px;
  line-height: 0;
}
.hero-wave svg { width: 100%; display: block; }

/* ── Missions ──────────────────────────────────────────── */
.missions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px) { .missions-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .missions-grid { grid-template-columns: 1fr 1fr; max-width: 900px; margin: 0 auto; } }

.mission-card {
  padding: clamp(24px, 4vw, 36px);
  border-top: 4px solid var(--card-accent);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.mission-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
.mission-header { display: flex; align-items: center; justify-content: space-between; }
.mission-emoji { font-size: 2.4rem; }
.mission-name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-3xl);
  color: var(--text-primary);
  letter-spacing: var(--tracking-tight);
}
.mission-tagline {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: var(--leading-snug);
}
.mission-desc { font-size: var(--text-base); color: var(--text-secondary); line-height: var(--leading-relaxed); flex: 1; }

.mission-dates { display: flex; flex-direction: column; gap: 10px; }
.dates-label {
  display: flex; align-items: center; gap: 6px;
  font-size: var(--text-xs); font-weight: 700;
  letter-spacing: var(--tracking-widest); text-transform: uppercase;
  color: var(--text-muted);
}
.dates-list { display: flex; flex-wrap: wrap; gap: 8px; }
.date-chip {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  border-radius: var(--radius-md);
  background: var(--card-bg);
  border: 1.5px solid var(--card-accent);
  text-decoration: none;
  transition: background var(--dur-fast) ease, transform var(--dur-fast) ease;
}
.date-chip:hover { background: var(--card-accent); transform: translateY(-1px); }
.date-chip:hover .date-chip-day,
.date-chip:hover .date-chip-full { color: #fff; }
.date-chip-day {
  font-size: var(--text-xs); font-weight: 700;
  color: var(--card-accent);
  text-transform: uppercase; letter-spacing: 0.06em;
}
.date-chip-full { font-size: var(--text-sm); font-weight: 600; color: var(--text-primary); }

.mission-footer { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px; }

/* ── Stats strip ────────────────────────────────────────── */
.stats-strip {
  background: var(--bg-dark);
  color: var(--text-on-dark);
  padding: clamp(40px, 5vw, 56px) 0;
}
.stats-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 4vw, 40px);
  align-items: center;
}
@media (min-width: 768px) { .stats-inner { grid-template-columns: repeat(4, 1fr); } }
.stat-item { text-align: center; }
.stat-item strong {
  display: block;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: var(--accent-gold);
  margin-bottom: 4px;
}
.stat-item span { font-size: var(--text-sm); color: rgba(240,244,248,.65); line-height: var(--leading-snug); }
.stat-divider { display: none; }
@media (min-width: 768px) { .stat-divider { display: block; width: 1px; height: 48px; background: rgba(255,255,255,.1); margin: 0 auto; } }

/* ── Financial aid strip ───────────────────────────────── */
.faid-strip { background: var(--accent-gold-light); }
.faid-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}
.faid-icon {
  width: 56px; height: 56px;
  border-radius: var(--radius-circle);
  background: #fff;
  display: grid; place-items: center;
  flex: none;
  box-shadow: var(--shadow-sm);
}
.faid-copy { flex: 1; min-width: 240px; }
.faid-copy h3 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-xl);
  color: var(--text-primary);
  margin-bottom: 6px;
}
.faid-copy p { font-size: var(--text-base); color: var(--text-secondary); line-height: var(--leading-relaxed); }

/* ── Visit CTA ─────────────────────────────────────────── */
.visit-cta { background: var(--bg-base); }
.visit-card {
  padding: clamp(32px, 5vw, 52px);
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: center;
}
@media (min-width: 768px) { .visit-card { grid-template-columns: 1.5fr 1fr; } }
.visit-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-4xl);
  color: var(--text-primary);
  letter-spacing: var(--tracking-tight);
  margin-bottom: 12px;
}
.visit-sub { font-size: var(--text-lg); color: var(--text-secondary); line-height: var(--leading-relaxed); }
.visit-actions { display: flex; flex-wrap: wrap; gap: 12px; }
</style>
