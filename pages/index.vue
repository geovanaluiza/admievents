<script setup lang="ts">
useSeoMeta({
  title: 'Visit Northwest University — Admissions Events',
  description: 'Discover NU, NU Overnight, and more. Tour the campus, meet our community, and find your place at Northwest University in Kirkland, WA.',
  robots: 'noindex, nofollow',
})
</script>

<template>
  <div>
    <SiteHeader />

    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow eyebrow-gold">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Northwest University Admissions
          </p>
          <h1 class="hero-title">Find your event.</h1>
          <p class="hero-sub">
            Five different ways to experience campus — pick the one that fits your student.
            Kirkland, WA — 20 min from Seattle.
          </p>
        </div>

        <div class="hero-graphic" aria-hidden="true">
          <div class="graphic-card">
            <span class="graphic-emoji">🏔️</span>
            <div class="graphic-label">Discover NU</div>
            <div class="graphic-sub">day event · open to all</div>
          </div>
          <div class="graphic-card">
            <span class="graphic-emoji">🌙</span>
            <div class="graphic-label">NU Overnight</div>
            <div class="graphic-sub">stay with a student host</div>
          </div>
          <div class="graphic-card">
            <span class="graphic-emoji">🎓</span>
            <div class="graphic-label">Scholarships</div>
            <div class="graphic-sub">president's + program events</div>
          </div>
        </div>
      </div>

      <div class="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#FFFBF5"/>
        </svg>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <header class="section-head reveal">
          <p class="eyebrow">Upcoming events</p>
          <h2 class="section-title">Choose your path</h2>
          <p class="section-sub">Each event is a different way to get to know Northwest University.</p>
        </header>

        <div class="missions-grid">
          <article class="mission-card card reveal" style="--card-accent: var(--nu-tour); --card-bg: rgba(251,217,69,.12);">
            <div class="mission-header">
              <span class="mission-emoji">🏔️</span>
              <span class="badge badge-gold">Day Event</span>
            </div>
            <h3 class="mission-name">Discover NU</h3>
            <p class="mission-tagline">Your first look at what could be home.</p>
            <p class="mission-desc">A guided tour + admissions chat — perfect for first-timers figuring out if NU clicks. Meet professors, see the campus, and get all your questions answered.</p>
            <div class="mission-footer">
              <a href="https://www.northwestu.edu/visit/discover-nu" target="_blank" rel="noopener" class="btn btn-navy btn-sm">Learn more →</a>
              <a href="https://www.northwestu.edu/visit" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Register →</a>
            </div>
          </article>

          <article class="mission-card card reveal" style="--card-accent: var(--accent-teal); --card-bg: rgba(68,186,130,.1);">
            <div class="mission-header">
              <span class="mission-emoji">🌙</span>
              <span class="badge badge-teal">Overnight</span>
            </div>
            <h3 class="mission-name">NU Overnight</h3>
            <p class="mission-tagline">Sleep in a dorm. Eat in the dining hall. Be an NU Eagle for 24 hours.</p>
            <p class="mission-desc">Stay overnight with a student host, attend real classes, and see what a day in the life actually looks like. 6 dates available.</p>
            <div class="mission-footer">
              <a href="https://www.northwestu.edu/visit/nu-overnight" target="_blank" rel="noopener" class="btn btn-navy btn-sm">Learn more →</a>
              <a href="https://www.northwestu.edu/visit" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Register →</a>
            </div>
          </article>

          <article class="mission-card card reveal" style="--card-accent: var(--nu-tour); --card-bg: rgba(251,217,69,.12);">
            <div class="mission-header">
              <span class="mission-emoji">🎓</span>
              <span class="badge badge-gold">Scholarship</span>
            </div>
            <h3 class="mission-name">President's Scholarship Event</h3>
            <p class="mission-tagline">A two-day deep dive for high-achieving scholars.</p>
            <p class="mission-desc">Built for students aiming for the President's Scholarship. Honors coursework, scholarship prep, faculty meet-and-greet, and dedicated parent sessions.</p>
            <div class="mission-footer">
              <a href="https://www.northwestu.edu/visit" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Register →</a>
            </div>
          </article>

          <article class="mission-card card reveal" style="--card-accent: var(--nu-tour); --card-bg: rgba(251,217,69,.12);">
            <div class="mission-header">
              <span class="mission-emoji">🧪</span>
              <span class="badge badge-gold">Scholarship</span>
            </div>
            <h3 class="mission-name">Program Scholarship Event</h3>
            <p class="mission-tagline">See your program in action — and meet the faculty who will teach you.</p>
            <p class="mission-desc">Focused on specific academic programs. Attend real classes, meet professors, and explore scholarship opportunities in your field of interest.</p>
            <div class="mission-footer">
              <a href="https://www.northwestu.edu/visit" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Register →</a>
            </div>
          </article>

          <article class="mission-card card reveal" style="--card-accent: var(--accent-teal); --card-bg: rgba(68,186,130,.1);">
            <div class="mission-header">
              <span class="mission-emoji">🎤</span>
              <span class="badge badge-teal">Student Life</span>
            </div>
            <h3 class="mission-name">NU Backstage</h3>
            <p class="mission-tagline">The student life event. Concerts, Lip Sync Battle, and the whole NU crew.</p>
            <p class="mission-desc">Two days of music, community, and adventure. The most energetic event NU offers — featuring live student performances and hands-on activities.</p>
            <div class="mission-footer">
              <a href="https://www.northwestu.edu/visit" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Register →</a>
            </div>
          </article>
        </div>
      </div>
    </section>

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
@media (min-width: 900px) { .hero-inner { grid-template-columns: 1.2fr 1fr; } }
.hero-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: var(--text-hero);
  letter-spacing: var(--tracking-tight);
  color: #fff;
  line-height: 1.0;
  margin-bottom: 20px;
}
.hero-sub {
  font-size: var(--text-lg);
  color: rgba(240,244,248,.75);
  line-height: var(--leading-relaxed);
  max-width: 44ch;
  margin-bottom: 32px;
}
.hero-graphic { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
.graphic-card {
  background: rgba(3,76,135,.2);
  border: 1px solid rgba(0,104,187,.25);
  border-radius: var(--radius-lg);
  padding: 20px 16px;
  text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 6px;
}
.graphic-emoji { font-size: 2rem; }
.graphic-label { font-family: var(--font-display); font-weight: 800; font-size: var(--text-xl); color: #fff; }
.graphic-sub { font-size: var(--text-xs); color: rgba(240,244,248,.55); }
.hero-wave { position: relative; margin-top: -2px; line-height: 0; }
.hero-wave svg { width: 100%; display: block; }

.missions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px) { .missions-grid { grid-template-columns: 1fr 1fr; } }

.mission-card {
  padding: clamp(24px, 4vw, 36px);
  border-top: 4px solid var(--card-accent);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.mission-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); }
.mission-header { display: flex; align-items: center; justify-content: space-between; }
.mission-emoji { font-size: 2.4rem; }
.mission-name { font-family: var(--font-display); font-weight: 800; font-size: var(--text-3xl); color: var(--text-primary); letter-spacing: var(--tracking-tight); }
.mission-tagline { font-family: var(--font-serif); font-style: italic; font-size: var(--text-lg); color: var(--text-secondary); line-height: var(--leading-snug); }
.mission-desc { font-size: var(--text-base); color: var(--text-secondary); line-height: var(--leading-relaxed); flex: 1; }
.mission-footer { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px; }

.stats-strip { background: var(--bg-dark); color: var(--text-on-dark); padding: clamp(40px, 5vw, 56px) 0; }
.stats-inner { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 4vw, 40px); align-items: center; }
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

.eyebrow { color: #034C87 !important; }
.eyebrow-gold { color: #85754e !important; }
.eyebrow-teal { color: #44ba82 !important; }

.section-title { color: #1a2e42 !important; }
.section-sub { color: #3d5a73 !important; }

.mission-name { color: #1a2e42 !important; }
.mission-tagline { color: #3d5a73 !important; }
.mission-desc { color: #3d5a73 !important; }

.badge-gold { background: rgba(251,217,69,.15) !important; color: #85754e !important; }
.badge-teal { background: rgba(68,186,130,.12) !important; color: #44ba82 !important; }
</style>
