import { _ as _sfc_main$1, a as _sfc_main$2, b as __nuxt_component_2, u as useEvents } from "./useEvents-DiUcqKFI.js";
import { defineComponent, computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { d as useRoute, e as createError, _ as _export_sfc } from "../server.mjs";
import { a as useSeoMeta } from "./v3-D4DNco51.js";
import "#internal/nuxt/paths";
import "ofetch";
import "/Users/swmarketing/kilo-code/admievents/node_modules/nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/swmarketing/kilo-code/admievents/node_modules/unctx/dist/index.mjs";
import "/Users/swmarketing/kilo-code/admievents/node_modules/nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/swmarketing/kilo-code/admievents/node_modules/radix3/dist/index.mjs";
import "/Users/swmarketing/kilo-code/admievents/node_modules/defu/dist/defu.mjs";
import "/Users/swmarketing/kilo-code/admievents/node_modules/ufo/dist/index.mjs";
import "/Users/swmarketing/kilo-code/admievents/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { getEvent } = useEvents();
    const event = computed(() => getEvent(route.params.slug));
    if (!event.value) {
      throw createError({ statusCode: 404, statusMessage: "Event not found" });
    }
    useSeoMeta({
      title: `${event.value.name} — Northwest University Admissions`,
      description: event.value.shortDescription,
      robots: "noindex, nofollow"
    });
    const COLOR_MAP = {
      coral: { accent: "var(--accent-coral)", light: "var(--accent-coral-light)", tag: "badge-coral" },
      teal: { accent: "var(--accent-teal)", light: "var(--accent-teal-light)", tag: "badge-teal" },
      gold: { accent: "var(--accent-gold)", light: "var(--accent-gold-light)", tag: "badge-gold" }
    };
    const colors = computed(() => COLOR_MAP[event.value.color]);
    const selectedDate = ref(event.value.instances[0].date);
    const selectedInst = computed(
      () => event.value.instances.find((i) => i.date === selectedDate.value) ?? event.value.instances[0]
    );
    const openFaq = ref(null);
    const faqCategories = [
      { key: "all", label: "All" },
      { key: "general", label: "General" },
      { key: "logistics", label: "Logistics" },
      { key: "cost", label: "Cost & aid" },
      { key: "parents", label: "For parents" }
    ];
    const activeFaqCat = ref("all");
    const filteredFaqs = computed(() => {
      if (activeFaqCat.value === "all") return event.value.faqs;
      return event.value.faqs.filter((f) => f.category === activeFaqCat.value);
    });
    const badgeName = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = _sfc_main$1;
      const _component_SiteFooter = _sfc_main$2;
      const _component_FaqChatbot = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-29ecd96e>`);
      _push(ssrRenderComponent(_component_SiteHeader, { event: unref(event) }, null, _parent));
      _push(`<div class="no-print" aria-hidden="true" data-v-29ecd96e></div><section class="event-hero" style="${ssrRenderStyle(`--event-accent: ${unref(colors).accent}; --event-light: ${unref(colors).light};`)}" data-v-29ecd96e><div class="hero-bg-img" style="${ssrRenderStyle(`background-image: url('${unref(event).heroImage}')`)}" aria-hidden="true" data-v-29ecd96e><div class="hero-bg-overlay" data-v-29ecd96e></div></div><div class="container event-hero-inner" data-v-29ecd96e><div class="event-hero-copy" data-v-29ecd96e><div class="event-meta" data-v-29ecd96e><span class="${ssrRenderClass(`badge ${unref(colors).tag}`)}" data-v-29ecd96e>${ssrInterpolate(unref(event).type === "discover" ? "🏔️ Day Event" : "🌙 Overnight")}</span><span class="badge badge-dark" data-v-29ecd96e>${ssrInterpolate(unref(selectedInst).timeStart)} – ${ssrInterpolate(unref(selectedInst).timeEnd)}</span></div><h1 class="event-title" data-v-29ecd96e>${ssrInterpolate(unref(event).name)}</h1><p class="event-tagline" data-v-29ecd96e>${ssrInterpolate(unref(event).tagline)}</p><div class="instance-picker" data-v-29ecd96e><p class="instance-label" data-v-29ecd96e><svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-29ecd96e><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" data-v-29ecd96e></rect><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-29ecd96e></path></svg> Pick your date </p><div class="instance-chips" data-v-29ecd96e><!--[-->`);
      ssrRenderList(unref(event).instances, (inst) => {
        _push(`<button class="${ssrRenderClass([{ "is-active": inst.date === unref(selectedDate) }, "instance-chip"])}" data-v-29ecd96e><span class="chip-weekday" data-v-29ecd96e>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).toLocaleDateString("en-US", { weekday: "short" }))}</span><span class="chip-date" data-v-29ecd96e>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).toLocaleDateString("en-US", { month: "short", day: "numeric" }))}</span><span class="chip-year" data-v-29ecd96e>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).getFullYear())}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="event-ctas" data-v-29ecd96e><a${ssrRenderAttr("href", unref(event).registrationUrl)} target="_blank" rel="noopener" class="btn btn-coral btn-lg" data-v-29ecd96e><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-29ecd96e><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-29ecd96e></path></svg> Register for ${ssrInterpolate(unref(selectedInst).label)}</a><a${ssrRenderAttr("href", unref(event).swoopShopUrl)} target="_blank" rel="noopener" class="btn btn-outline btn-lg" style="${ssrRenderStyle({ "border-color": "rgba(255,255,255,.4)", "color": "#fff" })}" data-v-29ecd96e> 🛍️ Swoop Shop </a></div></div><div class="video-placeholder" data-v-29ecd96e><div class="video-thumb" data-v-29ecd96e><img${ssrRenderAttr("src", unref(event).videoPlaceholder.thumbnail)}${ssrRenderAttr("alt", unref(event).videoPlaceholder.label)} loading="eager" data-v-29ecd96e><div class="video-overlay" data-v-29ecd96e><button class="play-ring"${ssrRenderAttr("aria-label", `Play: ${unref(event).videoPlaceholder.label}`)} data-v-29ecd96e><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-29ecd96e><path d="M8 5v14l11-7z" data-v-29ecd96e></path></svg></button></div></div><p class="video-label" data-v-29ecd96e>${ssrInterpolate(unref(event).videoPlaceholder.label)}</p><span class="video-note badge badge-dark" data-v-29ecd96e>Placeholder — video coming soon</span></div></div></section><div class="container event-layout" data-v-29ecd96e><div class="event-main" data-v-29ecd96e><section class="event-section" id="about" data-v-29ecd96e><h2 class="event-section-title" data-v-29ecd96e>What to expect</h2><p class="event-body-text" data-v-29ecd96e>${ssrInterpolate(unref(event).description)}</p></section><section class="event-section" id="schedule" data-v-29ecd96e><div class="section-header-row" data-v-29ecd96e><h2 class="event-section-title" data-v-29ecd96e>Your day</h2><button class="btn btn-outline btn-sm no-print" data-v-29ecd96e><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-29ecd96e><polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-29ecd96e></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-29ecd96e></path><rect x="6" y="14" width="12" height="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-29ecd96e></rect></svg> Print schedule </button></div><div class="schedule-timeline" data-v-29ecd96e><!--[-->`);
      ssrRenderList(unref(event).schedule, (item, i) => {
        _push(`<div class="timeline-item" data-v-29ecd96e><div class="tl-time" data-v-29ecd96e>${ssrInterpolate(item.time)}</div><div class="tl-dot" style="${ssrRenderStyle(`background: ${unref(colors).accent}`)}" aria-hidden="true" data-v-29ecd96e></div><div class="tl-content" data-v-29ecd96e><div class="tl-header" data-v-29ecd96e><span class="tl-icon" aria-hidden="true" data-v-29ecd96e>${ssrInterpolate(item.icon)}</span><h3 class="tl-title" data-v-29ecd96e>${ssrInterpolate(item.title)}</h3></div>`);
        if (item.description) {
          _push(`<p class="tl-desc" data-v-29ecd96e>${ssrInterpolate(item.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (item.location) {
          _push(`<p class="tl-location" data-v-29ecd96e><svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-29ecd96e><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" data-v-29ecd96e></path><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" data-v-29ecd96e></circle></svg> ${ssrInterpolate(item.location)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></section><section class="event-section" id="bring" data-v-29ecd96e><h2 class="event-section-title" data-v-29ecd96e>What to bring</h2><div class="bring-grid" data-v-29ecd96e><!--[-->`);
      ssrRenderList(unref(event).bringItems, (item, i) => {
        _push(`<div class="bring-item" data-v-29ecd96e><span class="bring-icon" aria-hidden="true" data-v-29ecd96e>${ssrInterpolate(item.icon)}</span><span class="bring-text" data-v-29ecd96e>${ssrInterpolate(item.text)}</span></div>`);
      });
      _push(`<!--]--></div><div class="dress-code-box card-ghost" data-v-29ecd96e><div class="dress-icon" aria-hidden="true" data-v-29ecd96e><svg width="22" height="22" viewBox="0 0 24 24" fill="none" data-v-29ecd96e><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-29ecd96e></path></svg></div><div data-v-29ecd96e><p class="dress-label" data-v-29ecd96e>Dress code</p><p class="dress-code-val" data-v-29ecd96e>${ssrInterpolate(unref(event).dressCode)}</p><p class="dress-tip" data-v-29ecd96e>${ssrInterpolate(unref(event).dressCodeTip)}</p></div></div></section><section class="event-section parents-section" id="parents" data-v-29ecd96e><div class="parents-header" data-v-29ecd96e><span class="parents-emoji" aria-hidden="true" data-v-29ecd96e>👨‍👩‍👧</span><div data-v-29ecd96e><h2 class="event-section-title" data-v-29ecd96e>${ssrInterpolate(unref(event).parentsTitle)}</h2><p class="event-body-text" data-v-29ecd96e>${ssrInterpolate(unref(event).parentsIntro)}</p></div></div><div class="parents-grid" data-v-29ecd96e><!--[-->`);
      ssrRenderList(unref(event).parentsItems, (item, i) => {
        _push(`<div class="parent-card card-ghost" data-v-29ecd96e><span class="parent-icon" aria-hidden="true" data-v-29ecd96e>${ssrInterpolate(item.icon)}</span><h3 class="parent-title" data-v-29ecd96e>${ssrInterpolate(item.title)}</h3><p class="parent-body" data-v-29ecd96e>${ssrInterpolate(item.body)}</p></div>`);
      });
      _push(`<!--]--></div></section>`);
      if (unref(event).financialAid) {
        _push(`<section class="event-section faid-section" id="aid" data-v-29ecd96e><div class="faid-box card-ghost" data-v-29ecd96e><div class="faid-icon" aria-hidden="true" data-v-29ecd96e><svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-29ecd96e><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-29ecd96e></path></svg></div><div class="faid-body" data-v-29ecd96e><h3 class="faid-headline" data-v-29ecd96e>${ssrInterpolate(unref(event).financialAid.headline)}</h3><p class="faid-text" data-v-29ecd96e>${ssrInterpolate(unref(event).financialAid.body)}</p></div><a${ssrRenderAttr("href", unref(event).financialAid.ctaUrl)} target="_blank" rel="noopener" class="btn btn-gold btn-sm" data-v-29ecd96e>${ssrInterpolate(unref(event).financialAid.ctaLabel)}</a></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="event-section" id="faq" data-v-29ecd96e><h2 class="event-section-title" data-v-29ecd96e>Questions &amp; answers</h2><div class="faq-filters no-print" role="tablist" aria-label="Filter FAQ by topic" data-v-29ecd96e><!--[-->`);
      ssrRenderList(faqCategories, (cat) => {
        _push(`<button class="${ssrRenderClass([{ "is-active": unref(activeFaqCat) === cat.key }, "faq-tab"])}" role="tab"${ssrRenderAttr("aria-selected", unref(activeFaqCat) === cat.key)} data-v-29ecd96e>${ssrInterpolate(cat.label)}</button>`);
      });
      _push(`<!--]--></div><div class="faq-list" data-v-29ecd96e><!--[-->`);
      ssrRenderList(unref(filteredFaqs), (faq) => {
        _push(`<div class="faq-item" data-v-29ecd96e><button class="faq-q"${ssrRenderAttr("aria-expanded", unref(openFaq) === faq.q)} data-v-29ecd96e><span data-v-29ecd96e>${ssrInterpolate(faq.q)}</span><svg class="${ssrRenderClass([{ "is-open": unref(openFaq) === faq.q }, "faq-chevron"])}" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-29ecd96e><polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-29ecd96e></polyline></svg></button>`);
        if (unref(openFaq) === faq.q) {
          _push(`<div class="faq-a" data-v-29ecd96e><p data-v-29ecd96e>${ssrInterpolate(faq.a)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div><aside class="event-sidebar" data-v-29ecd96e><div class="reg-card card" style="${ssrRenderStyle(`--card-accent: ${unref(colors).accent}`)}" data-v-29ecd96e><div class="reg-card-header" style="${ssrRenderStyle(`background: ${unref(colors).light}`)}" data-v-29ecd96e><p class="reg-date-display" data-v-29ecd96e><span class="reg-weekday" data-v-29ecd96e>${ssrInterpolate((/* @__PURE__ */ new Date(unref(selectedDate) + "T00:00:00")).toLocaleDateString("en-US", { weekday: "long" }))}</span><span class="reg-full" data-v-29ecd96e>${ssrInterpolate((/* @__PURE__ */ new Date(unref(selectedDate) + "T00:00:00")).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))}</span></p><p class="reg-time" data-v-29ecd96e><svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-29ecd96e><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" data-v-29ecd96e></circle><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-29ecd96e></polyline></svg> ${ssrInterpolate(unref(selectedInst).timeStart)} – ${ssrInterpolate(unref(selectedInst).timeEnd)}</p></div><div class="reg-card-body" data-v-29ecd96e><a${ssrRenderAttr("href", unref(event).registrationUrl)} target="_blank" rel="noopener" class="btn btn-coral btn-full btn-lg" data-v-29ecd96e> Register now — it&#39;s free </a><a${ssrRenderAttr("href", unref(event).swoopShopUrl)} target="_blank" rel="noopener" class="btn btn-outline btn-full btn-sm" data-v-29ecd96e> 🛍️ Swoop Shop </a><p class="reg-note" data-v-29ecd96e>No commitment required to register.</p></div></div><div class="badge-generator card" data-v-29ecd96e><h3 class="badge-gen-title" data-v-29ecd96e><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-29ecd96e><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2" data-v-29ecd96e></rect><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="2" data-v-29ecd96e></path></svg> Make your name tag </h3><p class="badge-gen-sub" data-v-29ecd96e>Your name as it will appear on your event badge:</p><div class="field" data-v-29ecd96e><label for="badgeName" data-v-29ecd96e>Your name</label><input id="badgeName"${ssrRenderAttr("value", unref(badgeName))} type="text" placeholder="e.g. Maya Thompson" maxlength="40" data-v-29ecd96e></div>`);
      if (unref(badgeName)) {
        _push(`<div class="badge-preview" style="${ssrRenderStyle(`border-color: ${unref(colors).accent}; background: ${unref(colors).light}`)}" data-v-29ecd96e><p class="badge-preview-label" data-v-29ecd96e>Preview</p><p class="badge-preview-name" data-v-29ecd96e>${ssrInterpolate(unref(badgeName))}</p><p class="badge-preview-event" data-v-29ecd96e>${ssrInterpolate(unref(event).name)} · ${ssrInterpolate(unref(selectedInst).label)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="contact-card card-ghost" data-v-29ecd96e><h3 class="contact-title" data-v-29ecd96e>Questions?</h3><p class="contact-body" data-v-29ecd96e>Our admissions team replies within one business day.</p><a href="mailto:visit@northwestu.edu" class="contact-link" data-v-29ecd96e><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-29ecd96e><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" data-v-29ecd96e></path><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-29ecd96e></polyline></svg> visit@northwestu.edu </a></div></aside></div>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_FaqChatbot, {
        "event-name": unref(event).name
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-29ecd96e"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-154bneT8.js.map
