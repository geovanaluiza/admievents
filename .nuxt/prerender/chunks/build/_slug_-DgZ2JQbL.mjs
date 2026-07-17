import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './SiteFooter-D9mtuOds.mjs';
import { defineComponent, computed, ref, unref, watch, nextTick, mergeProps, useSSRContext } from 'file:///Users/swmarketing/kilo-code/admievents/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from 'file:///Users/swmarketing/kilo-code/admievents/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, d as useRoute, e as createError } from './server.mjs';
import { u as useSeoMeta } from './v3-D4DNco51.mjs';
import '../_/renderer.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/nitropack/node_modules/h3/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/destr/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/ohash/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/klona/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/defu/dist/defu.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/scule/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/unctx/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/pathe/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/h3/dist/_entries/node.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/unhead/dist/server.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/devalue/index.js';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/swmarketing/kilo-code/admievents/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FaqChatbot",
  __ssrInlineRender: true,
  props: {
    eventName: {}
  },
  setup(__props) {
    const props = __props;
    const messages = ref([
      {
        role: "bot",
        text: props.eventName ? `Hi! I'm your NU Admissions helper. Ask me anything about ${props.eventName} or admissions in general.` : "Hi! I'm your NU Admissions helper. Ask me anything about our events, admissions, or what it's like to be an Eagle \u{1F985}",
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
      }
    ]);
    const inputText = ref("");
    const isOpen = ref(false);
    const isLoading = ref(false);
    const showEscalate = ref(false);
    const escalated = ref(false);
    ref(null);
    const chatEl = ref(null);
    watch(messages, () => {
      nextTick(() => {
        if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["chatbot", { "is-open": unref(isOpen) }]
      }, _attrs))} data-v-6ec4acc3><button class="chat-toggle" aria-label="Open admissions help" data-v-6ec4acc3>`);
      if (!unref(isOpen)) {
        _push(`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-6ec4acc3><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6ec4acc3></path></svg>`);
      } else {
        _push(`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-6ec4acc3><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-6ec4acc3></path></svg>`);
      }
      _push(`<span class="chat-label" data-v-6ec4acc3>Help?</span></button>`);
      if (unref(isOpen)) {
        _push(`<div class="chat-panel" role="dialog" aria-label="Admissions help chatbot" data-v-6ec4acc3><div class="chat-header" data-v-6ec4acc3><div class="chat-header-info" data-v-6ec4acc3><span class="chat-avatar" aria-hidden="true" data-v-6ec4acc3>\u{1F985}</span><div data-v-6ec4acc3><p class="chat-header-name" data-v-6ec4acc3>NU Admissions Helper</p><p class="chat-header-sub" data-v-6ec4acc3>Usually replies in minutes</p></div></div><a href="mailto:admissions@northwestu.edu" class="chat-email" title="Email us" data-v-6ec4acc3><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-6ec4acc3><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" data-v-6ec4acc3></path><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-6ec4acc3></polyline></svg></a></div><div class="chat-messages" aria-live="polite" data-v-6ec4acc3><!--[-->`);
        ssrRenderList(unref(messages), (msg, i) => {
          _push(`<div class="${ssrRenderClass([`msg-${msg.role}`, "chat-msg"])}" data-v-6ec4acc3>`);
          if (msg.role === "bot") {
            _push(`<span class="msg-avatar" aria-hidden="true" data-v-6ec4acc3>\u{1F985}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="msg-bubble" data-v-6ec4acc3><p data-v-6ec4acc3>${ssrInterpolate(msg.text)}</p><span class="msg-time" data-v-6ec4acc3>${ssrInterpolate(msg.time)}</span></div></div>`);
        });
        _push(`<!--]-->`);
        if (unref(isLoading)) {
          _push(`<div class="chat-msg msg-bot" data-v-6ec4acc3><span class="msg-avatar" aria-hidden="true" data-v-6ec4acc3>\u{1F985}</span><div class="msg-bubble typing" data-v-6ec4acc3><span data-v-6ec4acc3></span><span data-v-6ec4acc3></span><span data-v-6ec4acc3></span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(showEscalate)) {
          _push(`<div class="escalate-row" data-v-6ec4acc3><button class="btn btn-coral btn-sm btn-full" data-v-6ec4acc3> \u2709\uFE0F Email admissions team </button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(escalated)) {
          _push(`<div class="escalate-row" data-v-6ec4acc3><p class="escalate-note" data-v-6ec4acc3> Or call us: <a href="tel:+14255551234" data-v-6ec4acc3>(425) 555-1234</a> \xB7 <a href="mailto:admissions@northwestu.edu" data-v-6ec4acc3>admissions@northwestu.edu</a></p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<form class="chat-input-row" data-v-6ec4acc3><textarea class="chat-input" placeholder="Ask anything..." rows="1" maxlength="300" aria-label="Your message" data-v-6ec4acc3>${ssrInterpolate(unref(inputText))}</textarea><button type="submit" class="chat-send"${ssrIncludeBooleanAttr(!unref(inputText).trim()) ? " disabled" : ""} aria-label="Send message" data-v-6ec4acc3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-6ec4acc3><line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-6ec4acc3></line><polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6ec4acc3></polygon></svg></button></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqChatbot.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6ec4acc3"]]);
const EVENTS = [
  {
    id: "discover-nu-2026",
    slug: "discover-nu",
    name: "Discover NU",
    tagline: "Your first look at what could be home.",
    emoji: "\u{1F3D4}\uFE0F",
    color: "navy",
    shortDescription: "A guided tour + admissions chat \u2014 perfect for first-timers figuring out if NU clicks.",
    description: "Discover NU is our signature open house event. Spend the day on campus, meet professors and current students, and get all your questions answered by our admissions team. Bring the whole crew \u2014 parents, guardians, and anyone who wants to know what makes this place special.",
    heroImage: "/events/discover-hero.jpg",
    videoPlaceholder: {
      thumbnail: "/events/discover-video-thumb.jpg",
      label: "What to expect at Discover NU"
    },
    registrationUrl: "https://www.northwestu.edu/visit/discover-nu",
    swoopShopUrl: "https://shop.northwestu.edu",
    instances: [
      { date: "2026-09-18", label: "Thursday, September 18, 2026", timeStart: "8:15 AM", timeEnd: "4:00 PM" },
      { date: "2026-10-10", label: "Saturday, October 10, 2026", timeStart: "8:15 AM", timeEnd: "4:00 PM" }
    ],
    schedule: [
      { time: "8:15 AM", title: "Check In", description: "Grab your nametag, say hi to the team, and get settled.", icon: "\u{1F3F7}\uFE0F", location: "Larson Hall Lobby" },
      { time: "8:30 AM", title: "Welcome", description: "Get oriented \u2014 who we are, what the day looks like, and how to make the most of it.", icon: "\u{1F44B}", location: "Larson Hall" },
      { time: "9:00 AM", title: "Discover Campus", description: "Student-led walk through 56 acres \u2014 trails, chapel, labs, dining, the whole vibe.", icon: "\u{1F6B6}", location: "Departs from Larson Hall" },
      { time: "10:10 AM", title: "Discover Chapel", description: "See inside our chapel and hear how faith shapes daily life on campus.", icon: "\u26EA", location: "Chapel" },
      { time: "11:20 AM", title: "Discover Community", description: "Meet current students and hear what life is actually like at NU.", icon: "\u{1F4AC}", location: "University Center" },
      { time: "12:00 PM", title: "Send-Off", description: "Quick wrap-up and directions to lunch.", icon: "\u{1F44B}", location: "Larson Hall" },
      { time: "12:30 PM", title: "Choose Your Adventure \u2014 Lunch", description: "Eat at S\xE6ter, our campus dining hall. Come hungry.", icon: "\u{1F37D}\uFE0F", location: "S\xE6ter Dining Hall", track: "all" },
      // Optional afternoon sessions
      { time: "12:30\u20131:20 PM", title: "Class Visit", description: "Sit in on a real NU class.", icon: "\u{1F4D6}", location: "Academic Buildings", track: "students" },
      { time: "1:30\u20132:20 PM", title: "Class Visit", description: "Another class you can drop into.", icon: "\u{1F4D6}", location: "Academic Buildings", track: "students" },
      { time: "2:30\u20133:20 PM", title: "Class Visit", description: "A third class option.", icon: "\u{1F4D6}", location: "Academic Buildings", track: "students" },
      { time: "1:00\u20134:00 PM", title: "Music Auditions", description: "For prospective Music Production students.", icon: "\u{1F3B5}", location: "Creatio Studio", track: "students" },
      { time: "2:30 PM", title: "Residence Hall Tour", description: "See what dorm life looks like.", icon: "\u{1F3E0}", location: "Departs from Larson Hall", track: "all" },
      { time: "3:30 PM", title: "Choralons", description: " NU's auditioned choir \u2014 come hear them live.", icon: "\u{1F3A4}", location: "Chapel", track: "all" },
      { time: "12:30\u20134:00 PM", title: "One-on-One Meetings", description: "Meet individually with Admissions or Financial Aid staff.", icon: "\u{1F4BC}", location: "Larson Hall", track: "all" }
    ],
    faqs: [
      { q: "Is parking free?", a: "Yes \u2014 parking is free for all Discover NU guests. Pull into any visitor spot and grab a pass at check-in.", category: "logistics" },
      { q: "What should I wear?", a: "Come as you are. This is PNW casual \u2014 jeans and sneakers are totally fine. The tour is partly outdoors so dress for the weather.", category: "logistics" },
      { q: "Can I stay for just part of the day?", a: "Absolutely \u2014 you can come for the morning and leave at noon, or just show up for the afternoon sessions. No commitment required.", category: "logistics" },
      { q: "Can I bring younger siblings?", a: "Kids are welcome, especially at lunch and the campus tour. Some afternoon classes may not be appropriate for young children \u2014 use your judgment.", category: "logistics" },
      { q: "How do I register each family member?", a: "Each guest attending lunch needs their own registration, even if they're coming with a student.", category: "logistics" },
      { q: "What is the cancellation policy?", a: "Email admissions@northwestu.edu at least 48 hours before your event and we'll move you to another date with no penalty.", category: "logistics" },
      { q: "Is my student expected to apply on the day?", a: "Not at all. Discover NU is a no-pressure event. We want you to explore, ask questions, and figure out if NU feels right.", category: "general" },
      { q: "Will there be someone to talk about financial aid?", a: "Yes \u2014 our financial aid team is at every Discover NU event. You can also ask us anything in the Q&A or swing by the table during lunch.", category: "cost" },
      { q: "How competitive is admissions?", a: "We take a holistic approach \u2014 your student's character, story, and fit matter as much as grades. Our counselors can talk through your student's profile individually.", category: "general" },
      { q: "Can I get a feel for the spiritual environment?", a: "Absolutely. We'll talk openly about faith at NU, including chapel, worship nights, and how spirituality shows up in and out of the classroom.", category: "parents" },
      { q: "What if my student is applying to multiple schools?", a: "Completely normal. We'll give you the full picture of what makes NU unique, but we'll never pressure you.", category: "parents" }
    ],
    bringItems: [
      { icon: "\u{1F45F}", text: "Comfy shoes for the campus tour (partly outdoor, about 45 minutes)" },
      { icon: "\u{1F327}\uFE0F", text: "Layers and a light jacket \u2014 Kirkland weather is unpredictable" },
      { icon: "\u{1F4DD}", text: "Questions! Bring a list or just wing it" },
      { icon: "\u{1F4F1}", text: "Your phone for photos and the campus app" },
      { icon: "\u{1F48A}", text: "Any personal meds / allergy epi-pens (we don't have these on hand)" }
    ],
    dressCode: "PNW Casual",
    dressCodeTip: "Jeans, sneakers, layers \u2014 totally fine. Nothing formal needed.",
    parentsTitle: "A note for parents & guardians",
    parentsIntro: "We know you're asking different questions than your student. Here's what matters to you \u2014 and how we've got you covered.",
    parentsItems: [
      { icon: "\u{1F512}", title: "Safety & wellbeing", body: "Our campus is private, gated, and has 24/7 security. Students consistently tell us NU feels safe and like a real community." },
      { icon: "\u{1F4B0}", title: "Financial clarity", body: "We'll walk through real scholarship scenarios, out-of-pocket costs, and what financial aid actually looks like. No surprises." },
      { icon: "\u{1F469}\u200D\u{1F3EB}", title: "Faculty accessibility", body: "Class sizes average 18 students. Your student's professor will know their name by week two." },
      { icon: "\u{1F697}", title: "Getting here", body: "We're 20 minutes from Seattle, with easy parking on campus. SEA-TAC is about 35 minutes away." }
    ],
    financialAid: {
      headline: "Scholarships are part of the conversation.",
      body: "Over 90% of our students receive financial aid. We'll break down grants, scholarships, and work-study so you know what to expect before you apply.",
      ctaLabel: "Explore scholarships \u2192",
      ctaUrl: "https://www.northwestu.edu/financial-aid"
    }
  }
];
const useEvents = () => {
  const getEvent = (slug) => {
    var _a;
    return (_a = EVENTS.find((e) => e.slug === slug)) != null ? _a : null;
  };
  return { allEvents: EVENTS, getEvent };
};
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
      title: `${event.value.name} \u2014 Northwest University Admissions`,
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
      () => {
        var _a;
        return (_a = event.value.instances.find((i) => i.date === selectedDate.value)) != null ? _a : event.value.instances[0];
      }
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
      const _component_SiteHeader = _sfc_main$1$1;
      const _component_SiteFooter = _sfc_main$2;
      const _component_FaqChatbot = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1ce67b8c>`);
      _push(ssrRenderComponent(_component_SiteHeader, { event: unref(event) }, null, _parent));
      _push(`<div class="no-print" aria-hidden="true" data-v-1ce67b8c></div><section class="event-hero" style="${ssrRenderStyle(`--event-accent: ${unref(colors).accent}; --event-light: ${unref(colors).light};`)}" data-v-1ce67b8c><div class="hero-bg-img" style="${ssrRenderStyle(`background-image: url('${unref(event).heroImage}')`)}" aria-hidden="true" data-v-1ce67b8c><div class="hero-bg-overlay" data-v-1ce67b8c></div></div><div class="container event-hero-inner" data-v-1ce67b8c><div class="event-hero-copy" data-v-1ce67b8c><div class="event-meta" data-v-1ce67b8c><span class="${ssrRenderClass(`badge ${unref(colors).tag}`)}" data-v-1ce67b8c>${ssrInterpolate(unref(event).type === "discover" ? "\u{1F3D4}\uFE0F Day Event" : "\u{1F319} Overnight")}</span><span class="badge badge-dark" data-v-1ce67b8c>${ssrInterpolate(unref(selectedInst).timeStart)} \u2013 ${ssrInterpolate(unref(selectedInst).timeEnd)}</span></div><h1 class="event-title" data-v-1ce67b8c>${ssrInterpolate(unref(event).name)}</h1><p class="event-tagline" data-v-1ce67b8c>${ssrInterpolate(unref(event).tagline)}</p><div class="instance-picker" data-v-1ce67b8c><p class="instance-label" data-v-1ce67b8c><svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-1ce67b8c><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" data-v-1ce67b8c></rect><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-1ce67b8c></path></svg> Pick your date </p><div class="instance-chips" data-v-1ce67b8c><!--[-->`);
      ssrRenderList(unref(event).instances, (inst) => {
        _push(`<button class="${ssrRenderClass([{ "is-active": inst.date === unref(selectedDate) }, "instance-chip"])}" data-v-1ce67b8c><span class="chip-weekday" data-v-1ce67b8c>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).toLocaleDateString("en-US", { weekday: "short" }))}</span><span class="chip-date" data-v-1ce67b8c>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).toLocaleDateString("en-US", { month: "short", day: "numeric" }))}</span><span class="chip-year" data-v-1ce67b8c>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).getFullYear())}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="event-ctas" data-v-1ce67b8c><a${ssrRenderAttr("href", unref(event).registrationUrl)} target="_blank" rel="noopener" class="btn btn-coral btn-lg" data-v-1ce67b8c><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-1ce67b8c><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ce67b8c></path></svg> Register for ${ssrInterpolate(unref(selectedInst).label)}</a><a${ssrRenderAttr("href", unref(event).swoopShopUrl)} target="_blank" rel="noopener" class="btn btn-outline btn-lg" style="${ssrRenderStyle({ "border-color": "rgba(255,255,255,.4)", "color": "#fff" })}" data-v-1ce67b8c> \u{1F6CD}\uFE0F Swoop Shop </a><button class="btn btn-outline btn-lg no-print" style="${ssrRenderStyle({ "border-color": "rgba(255,255,255,.4)", "color": "#fff" })}" data-v-1ce67b8c><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-1ce67b8c><polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ce67b8c></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ce67b8c></path><rect x="6" y="14" width="12" height="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ce67b8c></rect></svg> Print event info </button></div></div><div class="video-placeholder" data-v-1ce67b8c><div class="video-thumb" data-v-1ce67b8c><img${ssrRenderAttr("src", unref(event).videoPlaceholder.thumbnail)}${ssrRenderAttr("alt", unref(event).videoPlaceholder.label)} loading="eager" data-v-1ce67b8c><div class="video-overlay" data-v-1ce67b8c><button class="play-ring"${ssrRenderAttr("aria-label", `Play: ${unref(event).videoPlaceholder.label}`)} data-v-1ce67b8c><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-1ce67b8c><path d="M8 5v14l11-7z" data-v-1ce67b8c></path></svg></button></div></div><p class="video-label" data-v-1ce67b8c>${ssrInterpolate(unref(event).videoPlaceholder.label)}</p><span class="video-note badge badge-dark" data-v-1ce67b8c>Placeholder \u2014 video coming soon</span></div></div></section><div class="container event-layout" data-v-1ce67b8c><div class="event-main" data-v-1ce67b8c><section class="event-section" id="about" data-v-1ce67b8c><h2 class="event-section-title" data-v-1ce67b8c>What to expect</h2><p class="event-body-text" data-v-1ce67b8c>${ssrInterpolate(unref(event).description)}</p></section><section class="event-section" id="schedule" data-v-1ce67b8c><div class="section-header-row" data-v-1ce67b8c><h2 class="event-section-title" data-v-1ce67b8c>Your day</h2><button class="btn btn-outline btn-sm no-print" data-v-1ce67b8c><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-1ce67b8c><polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ce67b8c></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ce67b8c></path><rect x="6" y="14" width="12" height="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ce67b8c></rect></svg> Print schedule </button></div><div class="schedule-timeline" data-v-1ce67b8c><!--[-->`);
      ssrRenderList(unref(event).schedule, (item, i) => {
        _push(`<div class="timeline-item" data-v-1ce67b8c><div class="tl-time" data-v-1ce67b8c>${ssrInterpolate(item.time)}</div><div class="tl-dot" style="${ssrRenderStyle(`background: ${unref(colors).accent}`)}" aria-hidden="true" data-v-1ce67b8c></div><div class="tl-content" data-v-1ce67b8c><div class="tl-header" data-v-1ce67b8c><span class="tl-icon" aria-hidden="true" data-v-1ce67b8c>${ssrInterpolate(item.icon)}</span><h3 class="tl-title" data-v-1ce67b8c>${ssrInterpolate(item.title)}</h3></div>`);
        if (item.description) {
          _push(`<p class="tl-desc" data-v-1ce67b8c>${ssrInterpolate(item.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (item.location) {
          _push(`<p class="tl-location" data-v-1ce67b8c><svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-1ce67b8c><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" data-v-1ce67b8c></path><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" data-v-1ce67b8c></circle></svg> ${ssrInterpolate(item.location)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></section><section class="event-section" id="bring" data-v-1ce67b8c><h2 class="event-section-title" data-v-1ce67b8c>What to bring</h2><div class="bring-grid" data-v-1ce67b8c><!--[-->`);
      ssrRenderList(unref(event).bringItems, (item, i) => {
        _push(`<div class="bring-item" data-v-1ce67b8c><span class="bring-icon" aria-hidden="true" data-v-1ce67b8c>${ssrInterpolate(item.icon)}</span><span class="bring-text" data-v-1ce67b8c>${ssrInterpolate(item.text)}</span></div>`);
      });
      _push(`<!--]--></div><div class="dress-code-box card-ghost" data-v-1ce67b8c><div class="dress-icon" aria-hidden="true" data-v-1ce67b8c><svg width="22" height="22" viewBox="0 0 24 24" fill="none" data-v-1ce67b8c><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-1ce67b8c></path></svg></div><div data-v-1ce67b8c><p class="dress-label" data-v-1ce67b8c>Dress code</p><p class="dress-code-val" data-v-1ce67b8c>${ssrInterpolate(unref(event).dressCode)}</p><p class="dress-tip" data-v-1ce67b8c>${ssrInterpolate(unref(event).dressCodeTip)}</p></div></div></section><section class="event-section parents-section" id="parents" data-v-1ce67b8c><div class="parents-header" data-v-1ce67b8c><span class="parents-emoji" aria-hidden="true" data-v-1ce67b8c>\u{1F468}\u200D\u{1F469}\u200D\u{1F467}</span><div data-v-1ce67b8c><h2 class="event-section-title" data-v-1ce67b8c>${ssrInterpolate(unref(event).parentsTitle)}</h2><p class="event-body-text" data-v-1ce67b8c>${ssrInterpolate(unref(event).parentsIntro)}</p></div></div><div class="parents-grid" data-v-1ce67b8c><!--[-->`);
      ssrRenderList(unref(event).parentsItems, (item, i) => {
        _push(`<div class="parent-card card-ghost" data-v-1ce67b8c><span class="parent-icon" aria-hidden="true" data-v-1ce67b8c>${ssrInterpolate(item.icon)}</span><h3 class="parent-title" data-v-1ce67b8c>${ssrInterpolate(item.title)}</h3><p class="parent-body" data-v-1ce67b8c>${ssrInterpolate(item.body)}</p></div>`);
      });
      _push(`<!--]--></div></section>`);
      if (unref(event).financialAid) {
        _push(`<section class="event-section faid-section" id="aid" data-v-1ce67b8c><div class="faid-box card-ghost" data-v-1ce67b8c><div class="faid-icon" aria-hidden="true" data-v-1ce67b8c><svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-1ce67b8c><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ce67b8c></path></svg></div><div class="faid-body" data-v-1ce67b8c><h3 class="faid-headline" data-v-1ce67b8c>${ssrInterpolate(unref(event).financialAid.headline)}</h3><p class="faid-text" data-v-1ce67b8c>${ssrInterpolate(unref(event).financialAid.body)}</p></div><a${ssrRenderAttr("href", unref(event).financialAid.ctaUrl)} target="_blank" rel="noopener" class="btn btn-gold btn-sm" data-v-1ce67b8c>${ssrInterpolate(unref(event).financialAid.ctaLabel)}</a></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="event-section" id="faq" data-v-1ce67b8c><h2 class="event-section-title" data-v-1ce67b8c>Questions &amp; answers</h2><div class="faq-filters no-print" role="tablist" aria-label="Filter FAQ by topic" data-v-1ce67b8c><!--[-->`);
      ssrRenderList(faqCategories, (cat) => {
        _push(`<button class="${ssrRenderClass([{ "is-active": unref(activeFaqCat) === cat.key }, "faq-tab"])}" role="tab"${ssrRenderAttr("aria-selected", unref(activeFaqCat) === cat.key)} data-v-1ce67b8c>${ssrInterpolate(cat.label)}</button>`);
      });
      _push(`<!--]--></div><div class="faq-list" data-v-1ce67b8c><!--[-->`);
      ssrRenderList(unref(filteredFaqs), (faq) => {
        _push(`<div class="faq-item" data-v-1ce67b8c><button class="faq-q"${ssrRenderAttr("aria-expanded", unref(openFaq) === faq.q)} data-v-1ce67b8c><span data-v-1ce67b8c>${ssrInterpolate(faq.q)}</span><svg class="${ssrRenderClass([{ "is-open": unref(openFaq) === faq.q }, "faq-chevron"])}" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-1ce67b8c><polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ce67b8c></polyline></svg></button>`);
        if (unref(openFaq) === faq.q) {
          _push(`<div class="faq-a" data-v-1ce67b8c><p data-v-1ce67b8c>${ssrInterpolate(faq.a)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div><aside class="event-sidebar" data-v-1ce67b8c><div class="reg-card card" style="${ssrRenderStyle(`--card-accent: ${unref(colors).accent}`)}" data-v-1ce67b8c><div class="reg-card-header" style="${ssrRenderStyle(`background: ${unref(colors).light}`)}" data-v-1ce67b8c><p class="reg-date-display" data-v-1ce67b8c><span class="reg-weekday" data-v-1ce67b8c>${ssrInterpolate((/* @__PURE__ */ new Date(unref(selectedDate) + "T00:00:00")).toLocaleDateString("en-US", { weekday: "long" }))}</span><span class="reg-full" data-v-1ce67b8c>${ssrInterpolate((/* @__PURE__ */ new Date(unref(selectedDate) + "T00:00:00")).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))}</span></p><p class="reg-time" data-v-1ce67b8c><svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-1ce67b8c><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" data-v-1ce67b8c></circle><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-1ce67b8c></polyline></svg> ${ssrInterpolate(unref(selectedInst).timeStart)} \u2013 ${ssrInterpolate(unref(selectedInst).timeEnd)}</p></div><div class="reg-card-body" data-v-1ce67b8c><a${ssrRenderAttr("href", unref(event).registrationUrl)} target="_blank" rel="noopener" class="btn btn-coral btn-full btn-lg" data-v-1ce67b8c> Register now \u2014 it&#39;s free </a><a${ssrRenderAttr("href", unref(event).swoopShopUrl)} target="_blank" rel="noopener" class="btn btn-outline btn-full btn-sm" data-v-1ce67b8c> \u{1F6CD}\uFE0F Swoop Shop </a><p class="reg-note" data-v-1ce67b8c>No commitment required to register.</p></div></div><div class="badge-generator card" data-v-1ce67b8c><h3 class="badge-gen-title" data-v-1ce67b8c><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-1ce67b8c><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2" data-v-1ce67b8c></rect><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="2" data-v-1ce67b8c></path></svg> Make your name tag </h3><p class="badge-gen-sub" data-v-1ce67b8c>Your name as it will appear on your event badge:</p><div class="field" data-v-1ce67b8c><label for="badgeName" data-v-1ce67b8c>Your name</label><input id="badgeName"${ssrRenderAttr("value", unref(badgeName))} type="text" placeholder="e.g. Maya Thompson" maxlength="40" data-v-1ce67b8c></div>`);
      if (unref(badgeName)) {
        _push(`<div class="badge-preview" style="${ssrRenderStyle(`border-color: ${unref(colors).accent}; background: ${unref(colors).light}`)}" data-v-1ce67b8c><p class="badge-preview-label" data-v-1ce67b8c>Preview</p><p class="badge-preview-name" data-v-1ce67b8c>${ssrInterpolate(unref(badgeName))}</p><p class="badge-preview-event" data-v-1ce67b8c>${ssrInterpolate(unref(event).name)} \xB7 ${ssrInterpolate(unref(selectedInst).label)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="contact-card card-ghost" data-v-1ce67b8c><h3 class="contact-title" data-v-1ce67b8c>Questions?</h3><p class="contact-body" data-v-1ce67b8c>Our admissions team replies within one business day.</p><a href="mailto:admissions@northwestu.edu" class="contact-link" data-v-1ce67b8c><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-1ce67b8c><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" data-v-1ce67b8c></path><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-1ce67b8c></polyline></svg> admissions@northwestu.edu </a></div></aside></div><div class="print-only-page" data-v-1ce67b8c><header class="print-header" data-v-1ce67b8c><svg class="print-shield" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-1ce67b8c><path d="M32 4L8 14v18c0 14 24 22 24 22s24-8 24-22V14L32 4z" fill="#001729" stroke="#fbd945" stroke-width="2" data-v-1ce67b8c></path><text x="32" y="38" text-anchor="middle" font-size="14" font-weight="900" fill="#fbd945" font-family="system-ui" data-v-1ce67b8c>NU</text></svg><p class="print-event-type" data-v-1ce67b8c>Northwest University \xB7 Admissions Event</p><h1 class="print-event-name" data-v-1ce67b8c>${ssrInterpolate(unref(event).name)}</h1><p class="print-event-tagline" data-v-1ce67b8c>${ssrInterpolate(unref(event).tagline)}</p><div class="print-event-meta" data-v-1ce67b8c><div class="print-meta-item" data-v-1ce67b8c><div class="print-meta-icon" data-v-1ce67b8c><svg viewBox="0 0 24 24" fill="none" data-v-1ce67b8c><rect x="3" y="4" width="18" height="18" rx="2" stroke="white" stroke-width="2" data-v-1ce67b8c></rect><path d="M16 2v4M8 2v4M3 10h18" stroke="white" stroke-width="2" stroke-linecap="round" data-v-1ce67b8c></path></svg></div><div data-v-1ce67b8c><p class="print-meta-label" data-v-1ce67b8c>Date</p><p class="print-meta-value" data-v-1ce67b8c>${ssrInterpolate(unref(selectedInst).label)}</p></div></div><div class="print-meta-item" data-v-1ce67b8c><div class="print-meta-icon" data-v-1ce67b8c><svg viewBox="0 0 24 24" fill="none" data-v-1ce67b8c><circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" data-v-1ce67b8c></circle><polyline points="12 6 12 12 16 14" stroke="white" stroke-width="2" stroke-linecap="round" data-v-1ce67b8c></polyline></svg></div><div data-v-1ce67b8c><p class="print-meta-label" data-v-1ce67b8c>Time</p><p class="print-meta-value" data-v-1ce67b8c>${ssrInterpolate(unref(selectedInst).timeStart)} \u2013 ${ssrInterpolate(unref(selectedInst).timeEnd)}</p></div></div><div class="print-meta-item" data-v-1ce67b8c><div class="print-meta-icon" data-v-1ce67b8c><svg viewBox="0 0 24 24" fill="none" data-v-1ce67b8c><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" stroke-width="2" data-v-1ce67b8c></path><circle cx="12" cy="10" r="3" stroke="white" stroke-width="2" data-v-1ce67b8c></circle></svg></div><div data-v-1ce67b8c><p class="print-meta-label" data-v-1ce67b8c>Location</p><p class="print-meta-value" data-v-1ce67b8c>Northwest University, Kirkland WA</p></div></div></div></header><div class="print-body" data-v-1ce67b8c><div class="print-reg-box" data-v-1ce67b8c><div class="print-qr-placeholder" aria-hidden="true" data-v-1ce67b8c><div class="print-qr-placeholder-inner" data-v-1ce67b8c></div></div><div data-v-1ce67b8c><p class="print-reg-label" data-v-1ce67b8c>Register at</p><p class="print-reg-url" data-v-1ce67b8c>${ssrInterpolate(unref(event).registrationUrl)}</p></div></div><section data-v-1ce67b8c><h2 class="print-section-title" data-v-1ce67b8c>Schedule</h2><table class="print-schedule" data-v-1ce67b8c><thead data-v-1ce67b8c><tr data-v-1ce67b8c><th data-v-1ce67b8c>Time</th><th data-v-1ce67b8c>Activity</th><th data-v-1ce67b8c>Details</th></tr></thead><tbody data-v-1ce67b8c><!--[-->`);
      ssrRenderList(unref(event).schedule, (item) => {
        _push(`<tr data-v-1ce67b8c><td class="print-time" data-v-1ce67b8c>${ssrInterpolate(item.time)}</td><td data-v-1ce67b8c><p class="print-title" data-v-1ce67b8c>${ssrInterpolate(item.title)}</p>`);
        if (item.track && item.track !== "all") {
          _push(`<span class="${ssrRenderClass(`print-track print-track-${item.track}`)}" data-v-1ce67b8c>${ssrInterpolate(item.track)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td data-v-1ce67b8c><p class="print-desc" data-v-1ce67b8c>${ssrInterpolate(item.description)}</p>`);
        if (item.location) {
          _push(`<p class="print-desc" style="${ssrRenderStyle({ "font-style": "italic", "margin-top": "2pt" })}" data-v-1ce67b8c>\u{1F4CD} ${ssrInterpolate(item.location)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></section><section data-v-1ce67b8c><h2 class="print-section-title" data-v-1ce67b8c>What to bring</h2><div class="print-bring" data-v-1ce67b8c><!--[-->`);
      ssrRenderList(unref(event).bringItems, (item) => {
        _push(`<div class="print-bring-item" data-v-1ce67b8c><span class="print-bring-icon" aria-hidden="true" data-v-1ce67b8c>${ssrInterpolate(item.icon)}</span><span class="print-bring-text" data-v-1ce67b8c>${ssrInterpolate(item.text)}</span></div>`);
      });
      _push(`<!--]--></div></section><section data-v-1ce67b8c><h2 class="print-section-title" data-v-1ce67b8c>Dress code</h2><div class="print-dress" data-v-1ce67b8c><div class="print-dress-icon" aria-hidden="true" data-v-1ce67b8c><svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-v-1ce67b8c><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" stroke="#001729" stroke-width="1.5" data-v-1ce67b8c></path></svg></div><div data-v-1ce67b8c><p class="print-dress-label" data-v-1ce67b8c>Dress code</p><p class="print-dress-value" data-v-1ce67b8c>${ssrInterpolate(unref(event).dressCode)}</p><p class="print-dress-tip" data-v-1ce67b8c>${ssrInterpolate(unref(event).dressCodeTip)}</p></div></div></section><footer class="print-footer" data-v-1ce67b8c><span data-v-1ce67b8c>Northwest University \xB7 Kirkland, WA \xB7 northwestu.edu</span><span data-v-1ce67b8c>Questions? <a${ssrRenderAttr("href", `mailto:${"admissions@northwestu.edu"}`)} data-v-1ce67b8c>admissions@northwestu.edu</a> \xB7 (425) 555-1234</span></footer></div></div>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ce67b8c"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-DgZ2JQbL.mjs.map
