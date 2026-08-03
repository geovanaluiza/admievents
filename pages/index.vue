<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: 'Visit Northwest University — Admissions Events',
  description: 'Discover NU, NU Overnight, and more. Tour the campus, meet our community, and find your place at Northwest University in Kirkland, WA.',
  robots: 'noindex, nofollow',
})

let reloadTimer: ReturnType<typeof setInterval> | null = null
let inactivityTimer: ReturnType<typeof setTimeout> | null = null

const homeVideoPlaying = ref(false)

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

    <div class="top-band" aria-hidden="true"></div>

    <section class="hero">
      <img
        class="hero-bg"
        src="https://www-dev.northwestu.edu/assets/images/tests/170923_nu_color_run_for_hope_9189.jpg"
        alt=""
        aria-hidden="true"
      />
      <div class="hero-overlay" aria-hidden="true"></div>

      <div class="hero-blob">
        <div class="hero-blob-shape">
          <h1 class="hero-title">DISCOVER<span class="hero-title-dot"></span></h1>
          <span class="hero-bubble">NU</span>
        </div>
      </div>

      <div class="container hero-inner">
        <p class="eyebrow eyebrow-gold">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Northwest University Admissions
        </p>
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

    <section class="video-section">
      <div class="home-video reveal">
        <iframe
          v-if="homeVideoPlaying"
          src="https://www.youtube.com/embed/UGxjeZtmvaE?autoplay=1&rel=0"
          title="Northwest University campus video"
          class="home-video-iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <template v-else>
          <img src="https://i.ytimg.com/vi/UGxjeZtmvaE/maxresdefault.jpg" alt="Northwest University campus video" loading="lazy" />
          <button class="play-ring" aria-label="Play campus video" @click="homeVideoPlaying = true">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </template>
      </div>
    </section>

    <section class="section" id="missions">
      <div class="container">
        <header class="section-head reveal">
          <hr class="divider" aria-hidden="true" />
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

    <section class="key-facts">
      <div class="container">
        <header class="facts-head reveal">
          <p class="eyebrow">By the numbers</p>
          <h2 class="facts-title">A snapshot of <em>what makes NU different.</em></h2>
        </header>

        <div class="facts-grid">
          <div class="fact-row reveal">
            <div class="fact-num">100%</div>
            <div class="fact-body">
              <p class="fact-label">Academic programs with built-in internships</p>
            </div>
          </div>
          <div class="fact-row reveal">
            <div class="fact-num">94%</div>
            <div class="fact-body">
              <p class="fact-label">of graduates employed or in grad school within six months</p>
            </div>
          </div>
          <div class="fact-row reveal">
            <div class="fact-num">18:1</div>
            <div class="fact-body">
              <p class="fact-label">Student-to-faculty ratio — your professors know your name</p>
            </div>
          </div>
          <div class="fact-row reveal">
            <div class="fact-num">90%+</div>
            <div class="fact-body">
              <p class="fact-label">of students receive financial aid or scholarships</p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
.top-band {
  height: 12px;
  background: #fbd945;
}

.hero {
  position: relative;
  overflow: hidden;
  min-height: clamp(560px, 86vh, 820px);
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
  background: linear-gradient(to top, rgba(0,40,80,.7) 0%, rgba(0,40,80,.25) 45%, rgba(0,40,80,.05) 100%);
}

/* DISCOVER NU — blob azul + bolha amarela */
.hero-blob {
  position: absolute;
  top: clamp(20px, 4vw, 48px);
  left: clamp(20px, 5vw, 64px);
  z-index: 2;
}
.hero-blob-shape {
  position: relative;
  background: var(--nu-blue);
  padding: clamp(20px, 3vw, 32px) clamp(28px, 5vw, 56px);
  transform: rotate(-3deg);
  border-radius: 18px 22px 20px 24px;
  display: inline-flex;
  align-items: center;
}
.hero-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  letter-spacing: var(--tracking-tight);
  color: #fff;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}
.hero-title-dot { display: none; }
.hero-bubble {
  display: inline-grid;
  place-items: center;
  width: clamp(54px, 7vw, 84px);
  height: clamp(54px, 7vw, 84px);
  border-radius: 50%;
  background: #fbd945;
  color: var(--nu-blue);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.1rem, 2.2vw, 1.8rem);
  letter-spacing: 0;
  margin-left: -6px;
  text-transform: uppercase;
}

.hero-inner {
  position: relative;
  padding-bottom: clamp(72px, 9vw, 110px);
}
.hero-sub {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  color: #fff;
  line-height: var(--leading-snug);
  max-width: 40ch;
  margin-bottom: 32px;
}
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-wave { position: relative; margin-top: -2px; line-height: 0; }
.hero-wave svg { width: 100%; display: block; }

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
  font-weight: 700;
  font-style: italic;
  font-size: var(--text-3xl);
  color: #fff;
  letter-spacing: var(--tracking-tight);
  line-height: 1.1;
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

/* ── Key facts ── */
.key-facts {
  background: #ffffff;
  padding: clamp(72px, 9vw, 120px) 0;
  border-top: 1px solid var(--border-subtle);
}
.facts-head { margin-bottom: clamp(48px, 6vw, 80px); max-width: 720px; }
.facts-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--text-primary);
  letter-spacing: var(--tracking-tight);
  line-height: 1.15;
  margin-top: 12px;
}
.facts-title em {
  font-style: italic;
  font-weight: 600;
  color: var(--nu-blue);
}
.facts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}
@media (min-width: 768px) {
  .facts-grid { grid-template-columns: 1fr 1fr; gap: 0 80px; }
}
.fact-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 28px;
  align-items: baseline;
  padding: clamp(28px, 4vw, 40px) 0;
  border-top: 1px solid var(--border-subtle);
}
.fact-row:last-child { border-bottom: 1px solid var(--border-subtle); }
.fact-num {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(3rem, 6vw, 5rem);
  color: var(--nu-blue);
  letter-spacing: var(--tracking-tight);
  line-height: 1;
  min-width: 1.4ch;
}
.fact-label {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: var(--leading-snug);
  max-width: 32ch;
}

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

.section-title { color: var(--nu-blue) !important; font-family: var(--font-display); font-weight: 800; font-size: clamp(2.2rem, 5vw, 3.4rem) !important; letter-spacing: var(--tracking-tight); line-height: 1.05; text-transform: none; }
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
.divider {
  border: 0;
  height: 4px;
  width: 220px;
  margin: 0 0 24px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--nu-sky) 0%, var(--nu-leaf) 50%, var(--nu-tour) 100%);
}

/* ── Home video ── */
.video-section { background: #ffffff; padding: clamp(48px, 7vw, 88px) 0 0; }
.home-video {
  position: relative;
  width: 100%;
  aspect-ratio: 21/9;
  max-height: 82vh;
  overflow: hidden;
}
.home-video img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.home-video-iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.play-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 96px; height: 96px;
  border-radius: 50%;
  background: rgba(255,255,255,.92);
  border: 2px solid rgba(0,104,187,.4);
  color: #0068bb;
  display: grid; place-items: center;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  transition: background var(--dur-fast) ease, transform var(--dur-fast) var(--ease-spring);
}
.play-ring:hover { background: #fff; transform: translate(-50%, -50%) scale(1.1); }
</style>
