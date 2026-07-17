import { _ as _sfc_main$1, a as _sfc_main$2, b as __nuxt_component_2, u as useEvents } from "./useEvents-DiUcqKFI.js";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "/Users/swmarketing/kilo-code/admievents/node_modules/nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/swmarketing/kilo-code/admievents/node_modules/unctx/dist/index.mjs";
import "/Users/swmarketing/kilo-code/admievents/node_modules/nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/swmarketing/kilo-code/admievents/node_modules/radix3/dist/index.mjs";
import "/Users/swmarketing/kilo-code/admievents/node_modules/defu/dist/defu.mjs";
import "/Users/swmarketing/kilo-code/admievents/node_modules/ufo/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { allEvents } = useEvents();
    const COLOR_MAP = {
      coral: { bg: "rgba(251,217,69,.12)", accent: "var(--nu-tour)", tag: "badge-gold" },
      teal: { bg: "rgba(4,80,92,.1)", accent: "var(--nu-evergreen)", tag: "badge-teal" },
      gold: { bg: "rgba(251,217,69,.12)", accent: "var(--nu-tour)", tag: "badge-gold" }
    };
    const getColors = (color) => COLOR_MAP[color];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = _sfc_main$1;
      const _component_SiteFooter = _sfc_main$2;
      const _component_FaqChatbot = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e603413b>`);
      _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
      _push(`<section class="hero" data-v-e603413b><div class="container hero-inner" data-v-e603413b><div class="hero-copy" data-v-e603413b><p class="eyebrow eyebrow-gold" data-v-e603413b><svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-e603413b><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e603413b></path></svg> Northwest University Admissions </p><h1 class="hero-title" data-v-e603413b>Your next adventure<br data-v-e603413b>starts <em data-v-e603413b>here.</em></h1><p class="hero-sub" data-v-e603413b> Pick your mission. Tour the campus, stay overnight, meet the people who make this place home. Kirkland, WA — 20 min from Seattle. </p><div class="hero-actions" data-v-e603413b><a href="#missions" class="btn btn-coral btn-lg" data-v-e603413b><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-e603413b><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e603413b></path></svg> See upcoming missions </a><a href="mailto:visit@northwestu.edu" class="btn btn-outline" data-v-e603413b> Ask us anything </a></div></div><div class="hero-graphic" aria-hidden="true" data-v-e603413b><div class="graphic-card" data-v-e603413b><span class="graphic-emoji" data-v-e603413b>🏔️</span><div class="graphic-label" data-v-e603413b>56 acres</div><div class="graphic-sub" data-v-e603413b>of Pacific Northwest beauty</div></div><div class="graphic-card" data-v-e603413b><span class="graphic-emoji" data-v-e603413b>🎓</span><div class="graphic-label" data-v-e603413b>10 min</div><div class="graphic-sub" data-v-e603413b>from downtown Seattle</div></div><div class="graphic-card" data-v-e603413b><span class="graphic-emoji" data-v-e603413b>🌲</span><div class="graphic-label" data-v-e603413b>Forest</div><div class="graphic-sub" data-v-e603413b>trails behind every building</div></div></div></div><div class="hero-wave" aria-hidden="true" data-v-e603413b><svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" data-v-e603413b><path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 48C1200 48 1320 40 1380 36L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#FFFBF5" data-v-e603413b></path></svg></div></section><section class="section" id="missions" data-v-e603413b><div class="container" data-v-e603413b><header class="section-head reveal" data-v-e603413b><p class="eyebrow" data-v-e603413b>Choose your path</p><h2 class="section-title" data-v-e603413b>Upcoming missions</h2><p class="section-sub" data-v-e603413b>Each one is a different way to get a real feel for what life at NU looks like.</p></header><div class="missions-grid" data-v-e603413b><!--[-->`);
      ssrRenderList(unref(allEvents), (event) => {
        _push(`<article class="mission-card card reveal" style="${ssrRenderStyle(`--card-accent: ${getColors(event.color).accent}; --card-bg: ${getColors(event.color).bg};`)}" data-v-e603413b><div class="mission-header" data-v-e603413b><span class="mission-emoji" aria-hidden="true" data-v-e603413b>${ssrInterpolate(event.emoji)}</span><span class="${ssrRenderClass(`badge ${getColors(event.color).tag}`)}" data-v-e603413b>${ssrInterpolate(event.type === "discover" ? "Day event" : "Overnight")}</span></div><h3 class="mission-name" data-v-e603413b>${ssrInterpolate(event.name)}</h3><p class="mission-tagline" data-v-e603413b>${ssrInterpolate(event.tagline)}</p><p class="mission-desc" data-v-e603413b>${ssrInterpolate(event.shortDescription)}</p><div class="mission-dates" data-v-e603413b><p class="dates-label" data-v-e603413b><svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-e603413b><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" data-v-e603413b></rect><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-e603413b></path></svg> Choose your date </p><div class="dates-list" data-v-e603413b><!--[-->`);
        ssrRenderList(event.instances, (inst) => {
          _push(`<a${ssrRenderAttr("href", `/events/${event.slug}?date=${inst.date}`)} class="date-chip" data-v-e603413b><span class="date-chip-day" data-v-e603413b>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).toLocaleDateString("en-US", { weekday: "short" }))}</span><span class="date-chip-full" data-v-e603413b>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).toLocaleDateString("en-US", { month: "short", day: "numeric" }))}</span></a>`);
        });
        _push(`<!--]--></div></div><div class="mission-footer" data-v-e603413b><a${ssrRenderAttr("href", `/events/${event.slug}`)} class="btn btn-outline btn-sm" data-v-e603413b> See mission details → </a><a${ssrRenderAttr("href", event.registrationUrl)} target="_blank" rel="noopener" class="btn btn-coral btn-sm" data-v-e603413b> Register → </a></div></article>`);
      });
      _push(`<!--]--></div></div></section><section class="stats-strip" data-v-e603413b><div class="container stats-inner" data-v-e603413b><div class="stat-item" data-v-e603413b><strong data-v-e603413b>100%</strong><span data-v-e603413b>of programs include real internships</span></div><div class="stat-divider" aria-hidden="true" data-v-e603413b></div><div class="stat-item" data-v-e603413b><strong data-v-e603413b>94%</strong><span data-v-e603413b>of grads employed or in grad school in 6 months</span></div><div class="stat-divider" aria-hidden="true" data-v-e603413b></div><div class="stat-item" data-v-e603413b><strong data-v-e603413b>18:1</strong><span data-v-e603413b>student-to-faculty ratio</span></div><div class="stat-divider" aria-hidden="true" data-v-e603413b></div><div class="stat-item" data-v-e603413b><strong data-v-e603413b>90%+</strong><span data-v-e603413b>of students receive financial aid</span></div></div></section><section class="section-sm faid-strip" data-v-e603413b><div class="container faid-inner" data-v-e603413b><div class="faid-icon" aria-hidden="true" data-v-e603413b><svg width="28" height="28" viewBox="0 0 24 24" fill="none" data-v-e603413b><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e603413b></path></svg></div><div class="faid-copy" data-v-e603413b><h3 data-v-e603413b>Scholarships &amp; financial aid</h3><p data-v-e603413b>Over 90% of NU students receive financial aid. Grants, scholarships, and work-study — we&#39;ll walk you through the full picture before you apply.</p></div><a href="https://www.northwestu.edu/financial-aid" target="_blank" rel="noopener" class="btn btn-gold btn-sm" data-v-e603413b> Explore aid options → </a></div></section><section class="section visit-cta" data-v-e603413b><div class="container" data-v-e603413b><div class="visit-card card-ghost" data-v-e603413b><div class="visit-copy" data-v-e603413b><p class="eyebrow eyebrow-teal" data-v-e603413b>Can&#39;t find the right event?</p><h2 class="visit-title" data-v-e603413b>We&#39;ll work with your schedule.</h2><p class="visit-sub" data-v-e603413b>Private tours run year-round. Talk to an admissions counselor one-on-one. Or just email us — we actually reply.</p></div><div class="visit-actions" data-v-e603413b><a href="mailto:visit@northwestu.edu" class="btn btn-navy" data-v-e603413b><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-e603413b><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e603413b></path><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e603413b></polyline></svg> visit@northwestu.edu </a><a href="tel:+14255551234" class="btn btn-outline" data-v-e603413b>(425) 555-1234</a></div></div></div></section>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_FaqChatbot, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e603413b"]]);
export {
  index as default
};
//# sourceMappingURL=index-C9c-jrEN.js.map
