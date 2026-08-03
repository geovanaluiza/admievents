<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: 'Visit Northwest University — Admissions Events',
  description: 'Discover NU, NU Overnight, and more. Tour the campus, meet our community, and find your place at Northwest University in Kirkland, WA.',
  robots: 'noindex, nofollow',
})

const reelItems = [
  { img: 'https://www-dev.northwestu.edu/assets/images/tests/170923_nu_color_run_for_hope_9189.jpg', category: 'On-campus', title: 'Undergraduate admissions', link: 'https://www-dev.northwestu.edu/admissions', accent: '#000', textLight: true },
  { img: 'https://www-dev.northwestu.edu/assets/images/tests/160407_campusphotos_1546.jpg', category: 'Anytime/Anywhere', title: 'Online programs', link: 'https://www-dev.northwestu.edu/online', accent: '#fbd945', textLight: false },
  { img: 'https://www-dev.northwestu.edu/assets/images/tests/240613CMHC_Event--9.jpg', category: 'On-campus', title: 'Graduate degrees', link: 'https://www-dev.northwestu.edu/graduate', accent: '#fff', textLight: false },
  { img: 'https://www-dev.northwestu.edu/assets/images/tests/CampusStudying-0190.jpg', category: 'On-campus', title: 'International education', link: 'https://www-dev.northwestu.edu/international', accent: '#000', textLight: true },
  { img: 'https://www-dev.northwestu.edu/assets/images/tests/FallDay231108--2.jpg', category: 'At church', title: 'Northwest Partnership Program', link: 'https://www-dev.northwestu.edu/partnership', accent: '#000', textLight: true },
  { img: 'https://www-dev.northwestu.edu/assets/images/tests/CommunityCrewKickoff-.jpg', category: 'In high school', title: 'Concurrent credit', link: 'https://www-dev.northwestu.edu/concurrent', accent: '#000', textLight: true },
]

let reloadTimer: ReturnType<typeof setInterval> | null = null
let inactivityTimer: ReturnType<typeof setTimeout> | null = null

function resetInactivityTimer() {
  if (inactivityTimer) clearTimeout(inactivityTimer)
  inactivityTimer = setTimeout(() => {
    window.location.href = '/'
  }, 60 * 1000)
}

function cleanupInactivityListeners() {
  const events = ['mousedown', 'touchstart', 'keydown', 'scroll']
  events.forEach(evt => window.removeEventListener(evt, resetInactivityTimer))
  if (inactivityTimer) clearTimeout(inactivityTimer)
}

onMounted(() => {
  const events = ['mousedown', 'touchstart', 'keydown', 'scroll']
  events.forEach(evt => window.addEventListener(evt, resetInactivityTimer, { passive: true }))
  resetInactivityTimer()
  reloadTimer = setInterval(() => { window.location.reload() }, 5 * 60 * 1000)
})

onUnmounted(() => {
  cleanupInactivityListeners()
  if (reloadTimer) clearInterval(reloadTimer)
})
</script>

<template>
  <div>
    <SiteHeader />

    <section class="hero">
      <img
        class="hero-bg"
        src="https://www-dev.northwestu.edu/assets/images/tests/170923_nu_color_run_for_hope_9189.jpg"
        alt=""
        aria-hidden="true"
      />
      <div class="hero-overlay" aria-hidden="true"></div>

      <div class="container hero-inner">
        <p class="eyebrow eyebrow-gold">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Northwest University Admissions
        </p>
        <h1 class="hero-title">Find your path.</h1>
        <p class="hero-sub">Five ways to experience campus. One that's yours.</p>
        <div class="hero-actions">
          <a href="#missions" class="btn btn-gold btn-lg">Find your event</a>
        </div>
      </div>

      <div class="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>

    <section class="reel-section">
      <div class="reel">
        <div class="reel-container">
          <ul class="reel-list">
            <li v-for="item in reelItems" :key="item.link">
              <div class="reel-item">
                <img :src="item.img" :alt="item.title">
                <div class="reel-gradient" :style="{ background: `linear-gradient(-25deg, transparent 55%, ${item.accent})` }" />
                <div :class="['reel-content', item.textLight ? 'reel-content-light' : 'reel-content-dark']">
                  <p class="reel-category">{{ item.category }}</p>
                  <h4 class="reel-title">{{ item.title }}</h4>
                </div>
                <a :href="item.link" class="reel-link" target="_blank" rel="noopener" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section" id="missions">
      <div class="container">
        <header class="section-head reveal">
          <p class="eyebrow">Upcoming events</p>
          <h2 class="section-title">Choose your adventure</h2>
        </header>

        <div class="missions-grid">
          <article class="mission-card reveal">
            <img class="mission-photo" src="https://www-dev.northwestu.edu/assets/images/tests/FallDay231108--2.jpg" alt="Students walking across the NU campus on a fall day" loading="lazy" />
            <div class="mission-scrim" aria-hidden="true"></div>
            <div class="mission-content">
              <p class="mission-category">Day event · open to all</p>
              <h3 class="mission-name">Discover NU</h3>
              <p class="mission-tagline">Your first look at what could be home.</p>
              <span class="mission-cta">See the day →</span>
            </div>
            <a href="/events/discover-nu" class="mission-hit" aria-label="Discover NU event details"></a>
          </article>

          <article class="mission-card reveal">
            <img class="mission-photo" src="https://www-dev.northwestu.edu/assets/images/tests/240613CMHC_Event--9.jpg" alt="Evening event on the NU campus" loading="lazy" />
            <div class="mission-scrim" aria-hidden="true"></div>
            <div class="mission-content">
              <p class="mission-category">Overnight · 6 dates</p>
              <h3 class="mission-name">NU Overnight</h3>
              <p class="mission-tagline">Be an NU Eagle for 24 hours.</p>
              <span class="mission-cta">Pick your date →</span>
            </div>
            <a href="/events/nu-overnight" class="mission-hit" aria-label="NU Overnight event details"></a>
          </article>

          <article class="mission-card reveal">
            <img class="mission-photo" src="https://www-dev.northwestu.edu/assets/images/tests/CampusStudying-0190.jpg" alt="Students studying together on campus" loading="lazy" />
            <div class="mission-scrim" aria-hidden="true"></div>
            <div class="mission-content">
              <p class="mission-category">Scholarship</p>
              <h3 class="mission-name">President's Scholarship</h3>
              <p class="mission-tagline">A two-day deep dive for high-achieving scholars.</p>
              <span class="mission-cta">Register →</span>
            </div>
            <a href="https://www.northwestu.edu/visit" target="_blank" rel="noopener" class="mission-hit" aria-label="Register for the President's Scholarship Event"></a>
          </article>

          <article class="mission-card reveal">
            <img class="mission-photo" src="https://www-dev.northwestu.edu/assets/images/tests/160407_campusphotos_1546.jpg" alt="Class in session at Northwest University" loading="lazy" />
            <div class="mission-scrim" aria-hidden="true"></div>
            <div class="mission-content">
              <p class="mission-category">Scholarship</p>
              <h3 class="mission-name">Program Scholarship</h3>
              <p class="mission-tagline">See your program in action.</p>
              <span class="mission-cta">Register →</span>
            </div>
            <a href="https://www.northwestu.edu/visit" target="_blank" rel="noopener" class="mission-hit" aria-label="Register for the Program Scholarship Event"></a>
          </article>

          <article class="mission-card reveal">
            <img class="mission-photo" src="https://www-dev.northwestu.edu/assets/images/tests/CommunityCrewKickoff-.jpg" alt="Students at a campus community event" loading="lazy" />
            <div class="mission-scrim" aria-hidden="true"></div>
            <div class="mission-content">
              <p class="mission-category">Student life</p>
              <h3 class="mission-name">NU Backstage</h3>
              <p class="mission-tagline">Concerts, Lip Sync Battle, the whole crew.</p>
              <span class="mission-cta">Register →</span>
            </div>
            <a href="https://www.northwestu.edu/visit" target="_blank" rel="noopener" class="mission-hit" aria-label="Register for NU Backstage"></a>
          </article>
        </div>
      </div>
    </section>

    <div class="ridge" aria-hidden="true">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60V42L120 26L240 46L360 14L480 36L600 8L720 30L840 18L960 44L1080 22L1200 38L1320 10L1440 34V60H0Z" fill="#0068bb"/>
      </svg>
    </div>

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

    <div class="ridge ridge-flip" aria-hidden="true">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60V42L120 26L240 46L360 14L480 36L600 8L720 30L840 18L960 44L1080 22L1200 38L1320 10L1440 34V60H0Z" fill="#0068bb"/>
      </svg>
    </div>

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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              admissions@northwestu.edu
            </a>
            <a href="tel:+14255551234" class="btn btn-outline">(425) 555-1234</a>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  min-height: clamp(520px, 82vh, 760px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: var(--nu-blue);
  color: #fff;
}
.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,40,80,.78) 0%, rgba(0,40,80,.35) 45%, rgba(0,40,80,.15) 100%);
}
.hero-inner {
  position: relative;
  padding-bottom: clamp(72px, 9vw, 110px);
}
.hero-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-hero);
  letter-spacing: var(--tracking-tight);
  color: #fff;
  line-height: 1.0;
  margin-bottom: 16px;
  max-width: 12ch;
}
.hero-sub {
  font-size: var(--text-xl);
  color: rgba(255,255,255,.85);
  line-height: var(--leading-snug);
  max-width: 40ch;
  margin-bottom: 32px;
}
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-wave { position: relative; margin-top: -2px; line-height: 0; }
.hero-wave svg { width: 100%; display: block; }

.ridge { line-height: 0; margin-bottom: -1px; background: #ffffff; }
.ridge svg { width: 100%; height: clamp(30px, 5vw, 60px); display: block; }
.ridge-flip { margin-bottom: 0; margin-top: -1px; }
.ridge-flip svg { transform: scaleY(-1); }

.missions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  counter-reset: waypoint;
}
@media (min-width: 640px) { .missions-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1000px) { .missions-grid { grid-template-columns: repeat(3, 1fr); } }

.mission-card {
  position: relative;
  counter-increment: waypoint;
  border-radius: var(--radius-xl);
  overflow: hidden;
  min-height: 420px;
  display: flex;
  align-items: flex-end;
  box-shadow: var(--shadow-md);
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.mission-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); }
.mission-card::after {
  content: '· ' counter(waypoint, decimal-leading-zero) ' ·';
  position: absolute;
  top: 18px;
  right: 20px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-widest);
  color: rgba(255,255,255,.85);
  z-index: 2;
}
.mission-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur-slow) var(--ease-out);
}
.mission-card:hover .mission-photo { transform: scale(1.05); }
.mission-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,23,41,.88) 0%, rgba(0,23,41,.25) 55%, rgba(0,23,41,0) 100%);
}
.mission-content {
  position: relative;
  z-index: 1;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.mission-category {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--nu-tour);
}
.mission-name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-3xl);
  color: #fff;
  letter-spacing: var(--tracking-tight);
}
.mission-tagline {
  font-size: var(--text-base);
  color: rgba(255,255,255,.8);
  line-height: var(--leading-snug);
}
.mission-cta {
  margin-top: 8px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-sm);
  color: #fff;
}
.mission-hit { position: absolute; inset: 0; z-index: 3; }

.stats-strip { background: var(--bg-dark); color: var(--text-on-dark); padding: clamp(40px, 5vw, 56px) 0; position: relative; overflow: hidden; }
.stats-strip::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='700' viewBox='0 0 700 700'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='.06' stroke-width='1.5'%3E%3Ccircle cx='110' cy='580' r='45'/%3E%3Ccircle cx='110' cy='580' r='90'/%3E%3Ccircle cx='110' cy='580' r='140'/%3E%3Ccircle cx='110' cy='580' r='195'/%3E%3Ccircle cx='110' cy='580' r='255'/%3E%3Ccircle cx='620' cy='90' r='40'/%3E%3Ccircle cx='620' cy='90' r='80'/%3E%3Ccircle cx='620' cy='90' r='125'/%3E%3Ccircle cx='620' cy='90' r='175'/%3E%3C/g%3E%3C/svg%3E");
  background-position: center;
  background-size: min(90vw, 700px);
  background-repeat: no-repeat;
  pointer-events: none;
}
.stats-inner { position: relative; display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 4vw, 40px); align-items: center; }
@media (min-width: 768px) { .stats-inner { grid-template-columns: repeat(4, 1fr); } }
.stat-item { text-align: center; }
.stat-item strong { display: block; font-family: var(--font-display); font-weight: 800; font-size: clamp(1.6rem, 3vw, 2.2rem); color: var(--accent-gold); margin-bottom: 4px; }
.stat-item span { font-size: var(--text-sm); color: rgba(240,244,248,.65); line-height: var(--leading-snug); }
.stat-divider { display: none; }
@media (min-width: 768px) { .stat-divider { display: block; width: 1px; height: 48px; background: rgba(255,255,255,.1); margin: 0 auto; } }

.visit-cta { background: var(--bg-base); }
.visit-card { padding: clamp(32px, 5vw, 52px); display: grid; grid-template-columns: 1fr; gap: 24px; align-items: center; }
@media (min-width: 768px) { .visit-card { grid-template-columns: 1.5fr 1fr; } }
.visit-title { font-family: var(--font-display); font-weight: 800; font-size: var(--text-4xl); color: var(--text-primary); letter-spacing: var(--tracking-tight); margin-bottom: 12px; }
.visit-sub { font-size: var(--text-lg); color: var(--text-secondary); line-height: var(--leading-relaxed); }
.visit-actions { display: flex; flex-wrap: wrap; gap: 12px; }

/* ── Fix contrast — explicit colors, no CSS var dependency ── */
.section { background: #f7f9fb; }

.eyebrow { color: #0068bb !important; }
.eyebrow-gold { color: #fbd945 !important; }
.eyebrow-teal { color: #44ba82 !important; }

.section-title { color: #1a2e42 !important; font-size: 2.5rem !important; }
.section-sub { color: #4a5568 !important; }
.mission-name { color: #1a2e42 !important; }
.mission-tagline { color: #4a5568 !important; }
.mission-desc { color: #4a5568 !important; }
.visit-title { color: #1a2e42 !important; }
.visit-sub { color: #4a5568 !important; }
.badge-gold { background: rgba(251,217,69,.2) !important; color: #85754e !important; }
.badge-teal { background: rgba(0,104,187,.15) !important; color: #0068bb !important; }

/* ── Hardcoded backgrounds ── */
.section { background: #ffffff !important; }
.visit-cta { background: #ffffff !important; }
.visit-card { background: #ffffff !important; backdrop-filter: blur(12px) !important; }
.stats-strip { background: #0068bb !important; color: #fff !important; }
.stats-strip .stat-item strong { color: #fbd945 !important; }
.stats-strip .stat-item span { color: rgba(255,255,255,.85) !important; }
.stats-strip .stat-divider { background: rgba(255,255,255,.25) !important; }
.hero { background: #0068bb !important; color: #fff !important; }

/* ── Reel Section ── */
.reel-section {
  background: #ffffff;
  padding: 40px 0;
}
.reel {
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.reel::-webkit-scrollbar { display: none; }
.reel-container {
  padding: 0 24px;
}
.reel-list {
  display: flex;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
  width: max-content;
}
.reel-item {
  position: relative;
  width: 320px;
  height: 420px;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;
}
.reel-item img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.reel-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.reel-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
}
.reel-content-light { color: #fff; }
.reel-content-dark { color: #1a2e42; }
.reel-category {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 8px;
  opacity: 0.9;
}
.reel-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.3rem;
  line-height: 1.2;
  margin: 0;
}
.reel-link {
  position: absolute;
  inset: 0;
}
</style>
