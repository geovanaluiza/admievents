import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './SiteFooter-D9mtuOds.mjs';
import { defineComponent, computed, ref, unref, mergeProps, watch, nextTick, useSSRContext } from 'file:///Users/swmarketing/kilo-code/admievents/node_modules/vue/index.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EventIcon",
  __ssrInlineRender: true,
  props: {
    name: {},
    size: { default: 20 }
  },
  setup(__props) {
    const props = __props;
    const ICONS = {
      "mountain": '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
      "moon": '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
      "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
      "flask": '<path d="M10 2v7.31L4.34 18.5A2 2 0 0 0 6.13 22h11.74a2 2 0 0 0 1.79-3.5L14 9.31V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
      "mic": '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
      "tag": '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
      "hand": '<path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
      "footprints": '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>',
      "church": '<path d="M12 2v4"/><path d="M10 4h4"/><path d="M6 22V10l6-4 6 4v12"/><path d="M10 22v-4h4v4"/><path d="M2 22h20"/>',
      "message": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
      "utensils": '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
      "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
      "music": '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
      "home": '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
      "briefcase": '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect x="2" y="6" width="20" height="14" rx="2"/>',
      "cloud-rain": '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>',
      "pen-line": '<path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>',
      "smartphone": '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/>',
      "pill": '<path d="M10.5 20.5 3.5 13.5a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7Z"/><path d="m8.5 8.5 7 7"/>',
      "lock": '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
      "dollar-sign": '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
      "presentation": '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="M12 16v2"/><path d="m7 22 5-4 5 4"/>',
      "car": '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.7A2 2 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
      "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
      "shopping-bag": '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
      "bird": '<path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/>'
    };
    const inner = computed(() => {
      var _a;
      return (_a = ICONS[props.name]) != null ? _a : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: __props.size,
        height: __props.size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "aria-hidden": "true"
      }, _attrs))}>${(_a = unref(inner)) != null ? _a : ""}</svg>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EventIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
        text: props.eventName ? `Hi! I'm your NU Admissions helper. Ask me anything about ${props.eventName} or admissions in general.` : "Hi! I'm your NU Admissions helper. Ask me anything about our events, admissions, or what it's like to be an Eagle",
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
      const _component_EventIcon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["chatbot", { "is-open": unref(isOpen) }]
      }, _attrs))} data-v-653f77e6><button class="chat-toggle" aria-label="Open admissions help" data-v-653f77e6>`);
      if (!unref(isOpen)) {
        _push(`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-653f77e6><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-653f77e6></path></svg>`);
      } else {
        _push(`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-653f77e6><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-653f77e6></path></svg>`);
      }
      _push(`<span class="chat-label" data-v-653f77e6>Help?</span></button>`);
      if (unref(isOpen)) {
        _push(`<div class="chat-panel" role="dialog" aria-label="Admissions help chatbot" data-v-653f77e6><div class="chat-header" data-v-653f77e6><div class="chat-header-info" data-v-653f77e6><span class="chat-avatar" aria-hidden="true" data-v-653f77e6>`);
        _push(ssrRenderComponent(_component_EventIcon, {
          name: "bird",
          size: 22
        }, null, _parent));
        _push(`</span><div data-v-653f77e6><p class="chat-header-name" data-v-653f77e6>NU Admissions Helper</p><p class="chat-header-sub" data-v-653f77e6>Usually replies in minutes</p></div></div><a href="mailto:visit@northwest.edu" class="chat-email" title="Email us" data-v-653f77e6><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-653f77e6><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" data-v-653f77e6></path><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-653f77e6></polyline></svg></a></div><div class="chat-messages" aria-live="polite" data-v-653f77e6><!--[-->`);
        ssrRenderList(unref(messages), (msg, i) => {
          _push(`<div class="${ssrRenderClass([`msg-${msg.role}`, "chat-msg"])}" data-v-653f77e6>`);
          if (msg.role === "bot") {
            _push(`<span class="msg-avatar" aria-hidden="true" data-v-653f77e6>`);
            _push(ssrRenderComponent(_component_EventIcon, {
              name: "bird",
              size: 16
            }, null, _parent));
            _push(`</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="msg-bubble" data-v-653f77e6><p data-v-653f77e6>${ssrInterpolate(msg.text)}</p><span class="msg-time" data-v-653f77e6>${ssrInterpolate(msg.time)}</span></div></div>`);
        });
        _push(`<!--]-->`);
        if (unref(isLoading)) {
          _push(`<div class="chat-msg msg-bot" data-v-653f77e6><span class="msg-avatar" aria-hidden="true" data-v-653f77e6>`);
          _push(ssrRenderComponent(_component_EventIcon, {
            name: "bird",
            size: 16
          }, null, _parent));
          _push(`</span><div class="msg-bubble typing" data-v-653f77e6><span data-v-653f77e6></span><span data-v-653f77e6></span><span data-v-653f77e6></span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(showEscalate)) {
          _push(`<div class="escalate-row" data-v-653f77e6><button class="btn btn-coral btn-sm btn-full" data-v-653f77e6> Email admissions team </button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(escalated)) {
          _push(`<div class="escalate-row" data-v-653f77e6><p class="escalate-note" data-v-653f77e6> Or call us: <a href="tel:+14255551234" data-v-653f77e6>(425) 555-1234</a> \xB7 <a href="mailto:visit@northwest.edu" data-v-653f77e6>visit@northwest.edu</a></p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<form class="chat-input-row" data-v-653f77e6><textarea class="chat-input" placeholder="Ask anything..." rows="1" maxlength="300" aria-label="Your message" data-v-653f77e6>${ssrInterpolate(unref(inputText))}</textarea><button type="submit" class="chat-send"${ssrIncludeBooleanAttr(!unref(inputText).trim()) ? " disabled" : ""} aria-label="Send message" data-v-653f77e6><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-653f77e6><line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-653f77e6></line><polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-653f77e6></polygon></svg></button></form></div>`);
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-653f77e6"]]);
const EVENTS = [
  {
    id: "discover-nu-2026",
    slug: "discover-nu",
    name: "Discover NU",
    tagline: "Your first look at what could be home.",
    icon: "mountain",
    color: "navy",
    shortDescription: "A guided tour + admissions chat \u2014 perfect for first-timers figuring out if NU clicks.",
    description: "Discover NU is our signature open house event. Spend the day on campus, meet professors and current students, and get all your questions answered by our admissions team. Bring the whole crew \u2014 parents, guardians, and anyone who wants to know what makes this place special.",
    heroImage: "https://www-dev.northwestu.edu/assets/images/tests/FallDay231108--2.jpg",
    videoPlaceholder: {
      thumbnail: "https://www-dev.northwestu.edu/assets/images/tests/CampusStudying-0190.jpg",
      label: "What to expect at Discover NU"
    },
    registrationUrl: "https://www.northwestu.edu/visit/discover-nu",
    swoopShopUrl: "https://shop.northwestu.edu",
    instances: [
      { date: "2026-09-18", label: "Thursday, September 18, 2026", timeStart: "8:15 AM", timeEnd: "4:00 PM" },
      { date: "2026-10-10", label: "Saturday, October 10, 2026", timeStart: "8:15 AM", timeEnd: "4:00 PM" }
    ],
    schedule: [
      { time: "8:15 AM", title: "Check In", description: "Grab your nametag, say hi to the team, and get settled.", icon: "tag", location: "Larson Hall Lobby" },
      { time: "8:30 AM", title: "Welcome", description: "Get oriented \u2014 who we are, what the day looks like, and how to make the most of it.", icon: "hand", location: "Larson Hall" },
      { time: "9:00 AM", title: "Discover Campus", description: "Student-led walk through 56 acres \u2014 trails, chapel, labs, dining, the whole vibe.", icon: "footprints", location: "Departs from Larson Hall" },
      { time: "10:10 AM", title: "Discover Chapel", description: "See inside our chapel and hear how faith shapes daily life on campus.", icon: "church", location: "Chapel" },
      { time: "11:20 AM", title: "Discover Community", description: "Meet current students and hear what life is actually like at NU.", icon: "message", location: "University Center" },
      { time: "12:00 PM", title: "Send-Off", description: "Quick wrap-up and directions to lunch.", icon: "hand", location: "Larson Hall" },
      { time: "12:30 PM", title: "Choose Your Adventure \u2014 Lunch", description: "Eat at S\xE6ter, our campus dining hall. Come hungry.", icon: "utensils", location: "S\xE6ter Dining Hall", track: "all" },
      // Optional afternoon sessions
      { time: "12:30\u20131:20 PM", title: "Class Visit", description: "Sit in on a real NU class.", icon: "book-open", location: "Academic Buildings", track: "students" },
      { time: "1:30\u20132:20 PM", title: "Class Visit", description: "Another class you can drop into.", icon: "book-open", location: "Academic Buildings", track: "students" },
      { time: "2:30\u20133:20 PM", title: "Class Visit", description: "A third class option.", icon: "book-open", location: "Academic Buildings", track: "students" },
      { time: "1:00\u20134:00 PM", title: "Music Auditions", description: "For prospective Music Production students.", icon: "music", location: "Creatio Studio", track: "students" },
      { time: "2:30 PM", title: "Residence Hall Tour", description: "See what dorm life looks like.", icon: "home", location: "Departs from Larson Hall", track: "all" },
      { time: "3:30 PM", title: "Choralons", description: " NU's auditioned choir \u2014 come hear them live.", icon: "mic", location: "Chapel", track: "all" },
      { time: "12:30\u20134:00 PM", title: "One-on-One Meetings", description: "Meet individually with Admissions or Financial Aid staff.", icon: "briefcase", location: "Larson Hall", track: "all" }
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
      { icon: "footprints", text: "Comfy shoes for the campus tour (partly outdoor, about 45 minutes)" },
      { icon: "cloud-rain", text: "Layers and a light jacket \u2014 Kirkland weather is unpredictable" },
      { icon: "pen-line", text: "Questions! Bring a list or just wing it" },
      { icon: "smartphone", text: "Your phone for photos and the campus app" },
      { icon: "pill", text: "Any personal meds / allergy epi-pens (we don't have these on hand)" }
    ],
    dressCode: "PNW Casual",
    dressCodeTip: "Jeans, sneakers, layers \u2014 totally fine. Nothing formal needed.",
    parentsTitle: "A note for parents & guardians",
    parentsIntro: "We know you're asking different questions than your student. Here's what matters to you \u2014 and how we've got you covered.",
    parentsItems: [
      { icon: "lock", title: "Safety & wellbeing", body: "Our campus is private, gated, and has 24/7 security. Students consistently tell us NU feels safe and like a real community." },
      { icon: "dollar-sign", title: "Financial clarity", body: "We'll walk through real scholarship scenarios, out-of-pocket costs, and what financial aid actually looks like. No surprises." },
      { icon: "presentation", title: "Faculty accessibility", body: "Class sizes average 18 students. Your student's professor will know their name by week two." },
      { icon: "car", title: "Getting here", body: "We're 20 minutes from Seattle, with easy parking on campus. SEA-TAC is about 35 minutes away." }
    ],
    financialAid: {
      headline: "Scholarships are part of the conversation.",
      body: "Over 90% of our students receive financial aid. We'll break down grants, scholarships, and work-study so you know what to expect before you apply.",
      ctaLabel: "Explore scholarships \u2192",
      ctaUrl: "https://www.northwestu.edu/financial-aid"
    }
  },
  {
    id: "nu-overnight-2026",
    slug: "nu-overnight",
    name: "NU Overnight",
    tagline: "Sleep in a dorm. Eat in the dining hall. Be an NU Eagle for 24 hours.",
    icon: "moon",
    color: "teal",
    shortDescription: "Stay overnight with a student host, attend real classes, and see what a day in the life actually looks like.",
    description: "NU Overnight is the closest you can get to being a student without enrolling. You'll stay in a residence hall with a trained, background-checked student host, eat dinner and breakfast in S\xE6ter, sit in on real morning classes, and experience chapel and campus life after dark. Six dates across the school year \u2014 pick the one that fits your schedule.",
    heroImage: "https://www-dev.northwestu.edu/assets/images/tests/240613CMHC_Event--9.jpg",
    videoPlaceholder: {
      thumbnail: "https://www-dev.northwestu.edu/assets/images/tests/CommunityCrewKickoff-.jpg",
      label: "What NU Overnight is really like"
    },
    registrationUrl: "https://www.northwestu.edu/visit/nu-overnight",
    swoopShopUrl: "https://shop.northwestu.edu",
    instances: [
      { date: "2026-10-02", label: "Friday, October 2, 2026", timeStart: "4:00 PM", timeEnd: "11:00 AM next day" },
      { date: "2026-11-06", label: "Friday, November 6, 2026", timeStart: "4:00 PM", timeEnd: "11:00 AM next day" },
      { date: "2027-01-22", label: "Friday, January 22, 2027", timeStart: "4:00 PM", timeEnd: "11:00 AM next day" },
      { date: "2027-02-12", label: "Friday, February 12, 2027", timeStart: "4:00 PM", timeEnd: "11:00 AM next day" },
      { date: "2027-03-05", label: "Friday, March 5, 2027", timeStart: "4:00 PM", timeEnd: "11:00 AM next day" },
      { date: "2027-04-16", label: "Friday, April 16, 2027", timeStart: "4:00 PM", timeEnd: "11:00 AM next day" }
    ],
    schedule: [
      { time: "Day 1 \xB7 4:00 PM", title: "Check In & Meet Your Host", description: "Get your nametag, drop your bag, and meet the student host you'll be staying with tonight.", icon: "tag", location: "Larson Hall Lobby" },
      { time: "Day 1 \xB7 4:30 PM", title: "Campus Tour", description: "Student-led walk through campus \u2014 trails, chapel, labs, and the spots students actually hang out.", icon: "footprints", location: "Departs from Larson Hall" },
      { time: "Day 1 \xB7 6:00 PM", title: "Dinner at S\xE6ter", description: "Dinner in our campus dining hall with hosts and other overnight guests. Come hungry.", icon: "utensils", location: "S\xE6ter Dining Hall", track: "all" },
      { time: "Day 1 \xB7 7:30 PM", title: "Evening Activity", description: "Game night, worship night, or a student showcase \u2014 depends on the date, always a good time.", icon: "music", location: "University Center", track: "students" },
      { time: "Day 1 \xB7 9:30 PM", title: "Hall Hangout", description: "Snacks, games, and honest conversation with current students in the residence hall lounge.", icon: "message", location: "Residence Hall", track: "students" },
      { time: "Day 1 \xB7 11:00 PM", title: "Lights Out", description: "Settle in with your host. Residence halls are key-card access only, with overnight staff on duty.", icon: "moon", location: "Residence Hall", track: "students" },
      { time: "Day 2 \xB7 7:30 AM", title: "Breakfast at S\xE6ter", description: "The most important meal of the day, dining-hall style.", icon: "utensils", location: "S\xE6ter Dining Hall", track: "all" },
      { time: "Day 2 \xB7 8:30 AM", title: "Class Visit", description: "Sit in on a real NU class in your area of interest.", icon: "book-open", location: "Academic Buildings", track: "students" },
      { time: "Day 2 \xB7 10:00 AM", title: "Admissions Q&A + Wrap-Up", description: "Final questions with the admissions team, plus next steps if NU feels right.", icon: "briefcase", location: "Larson Hall", track: "all" },
      { time: "Day 2 \xB7 11:00 AM", title: "Pick-Up", description: "Parents pick up students at Larson Hall. Stick around for coffee with our team if you'd like.", icon: "car", location: "Larson Hall", track: "all" }
    ],
    faqs: [
      { q: "Who will my student stay with?", a: "Every overnight guest is paired with a trained, background-checked NU student host of the same gender, in a supervised residence hall.", category: "parents" },
      { q: "Do parents stay overnight too?", a: "The overnight portion is students-only \u2014 it's designed to feel like real dorm life. Parents join for check-in and pick-up, and Kirkland has several hotels nearby if you're traveling.", category: "parents" },
      { q: "What should my student bring?", a: "A sleeping bag or bedding, pillow, toiletries, and comfy clothes. See the full What to Bring list on this page.", category: "logistics" },
      { q: "Are meals included?", a: "Yes \u2014 dinner, evening snacks, and breakfast are all included at no cost.", category: "cost" },
      { q: "Is the event really free?", a: "Completely free. NU Overnight is our gift to students seriously considering NU.", category: "cost" },
      { q: "What if my student has allergies or dietary needs?", a: "Note them on your registration and our dining team will have options ready at every meal.", category: "logistics" },
      { q: "What time is pick-up?", a: "11:00 AM the next morning at Larson Hall. You're welcome to come early for coffee with the admissions team.", category: "logistics" },
      { q: "Can I request a specific host?", a: "If your student knows a current NU student, mention it during registration and we'll do our best to pair them.", category: "general" },
      { q: "What happens if my student feels uncomfortable?", a: "Residence staff are on duty all night, and every host carries a direct line to our team. Your student can call you \u2014 or be picked up \u2014 at any time.", category: "parents" },
      { q: "Which class will my student visit?", a: "We match class visits to the academic interest listed on your registration. Want a specific class? Email us ahead of time.", category: "general" }
    ],
    bringItems: [
      { icon: "moon", text: "Sleeping bag or bedding + pillow (mattress is provided)" },
      { icon: "briefcase", text: "Toiletries and a towel" },
      { icon: "cloud-rain", text: "Comfy layers \u2014 pajamas, and a jacket for the evening walk" },
      { icon: "smartphone", text: "Phone + charger for photos and the campus app" },
      { icon: "pill", text: "Any personal meds / allergy epi-pens (staff don't carry these)" }
    ],
    dressCode: "Sleepover Casual",
    dressCodeTip: "Comfy clothes for day one, pajamas for the night, and something presentable for morning classes.",
    parentsTitle: "A note for parents & guardians",
    parentsIntro: "Sending your student to sleep on a college campus takes trust. Here's exactly how we keep them safe \u2014 and keep you in the loop.",
    parentsItems: [
      { icon: "lock", title: "Vetted hosts only", body: "Every student host is background-checked, trained, and supervised by full-time residence life staff." },
      { icon: "home", title: "Secure residence halls", body: "Key-card access only, separated by gender, with overnight staff on duty and a 24/7 campus security line." },
      { icon: "message", title: "Reachable all night", body: "Your student keeps their phone, and our team shares a direct contact number at check-in. You can reach your student at any time." },
      { icon: "car", title: "Simple drop-off & pick-up", body: "Drop off at 4:00 PM Friday, pick up at 11:00 AM Saturday \u2014 both at Larson Hall. Free visitor parking." }
    ],
    financialAid: {
      headline: "Thinking about cost? So are we.",
      body: "Over 90% of our students receive financial aid. Ask us about scholarships during the Saturday wrap-up \u2014 or before you even arrive.",
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
      navy: { accent: "var(--nu-blue)", light: "var(--accent-blue-light)", tag: "badge-teal" },
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
      const _component_EventIcon = _sfc_main$2;
      const _component_SiteFooter = _sfc_main$3;
      const _component_FaqChatbot = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c0f787bf>`);
      _push(ssrRenderComponent(_component_SiteHeader, { event: unref(event) }, null, _parent));
      _push(`<div class="no-print" aria-hidden="true" data-v-c0f787bf></div><section class="event-hero" style="${ssrRenderStyle(`--event-accent: ${unref(colors).accent}; --event-light: ${unref(colors).light};`)}" data-v-c0f787bf><div class="hero-bg-img" style="${ssrRenderStyle(`background-image: url('${unref(event).heroImage}')`)}" aria-hidden="true" data-v-c0f787bf><div class="hero-bg-overlay" data-v-c0f787bf></div></div><div class="container event-hero-inner" data-v-c0f787bf><div class="event-hero-copy" data-v-c0f787bf><div class="event-meta" data-v-c0f787bf><span class="${ssrRenderClass(`badge ${unref(colors).tag}`)}" data-v-c0f787bf>`);
      _push(ssrRenderComponent(_component_EventIcon, {
        name: unref(event).icon,
        size: 14
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(event).name)}</span><span class="badge badge-dark" data-v-c0f787bf>${ssrInterpolate(unref(selectedInst).timeStart)} \u2013 ${ssrInterpolate(unref(selectedInst).timeEnd)}</span></div><h1 class="event-title" data-v-c0f787bf>${ssrInterpolate(unref(event).name)}</h1><p class="event-tagline" data-v-c0f787bf>${ssrInterpolate(unref(event).tagline)}</p><div class="instance-picker" data-v-c0f787bf><p class="instance-label" data-v-c0f787bf><svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-c0f787bf><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" data-v-c0f787bf></rect><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-c0f787bf></path></svg> Pick your date </p><div class="instance-chips" data-v-c0f787bf><!--[-->`);
      ssrRenderList(unref(event).instances, (inst) => {
        _push(`<button class="${ssrRenderClass([{ "is-active": inst.date === unref(selectedDate) }, "instance-chip"])}" data-v-c0f787bf><span class="chip-weekday" data-v-c0f787bf>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).toLocaleDateString("en-US", { weekday: "short" }))}</span><span class="chip-date" data-v-c0f787bf>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).toLocaleDateString("en-US", { month: "short", day: "numeric" }))}</span><span class="chip-year" data-v-c0f787bf>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).getFullYear())}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="event-ctas" data-v-c0f787bf><a${ssrRenderAttr("href", unref(event).registrationUrl)} target="_blank" rel="noopener" class="btn btn-coral btn-lg" data-v-c0f787bf><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-c0f787bf><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c0f787bf></path></svg> Register for ${ssrInterpolate(unref(selectedInst).label)}</a><a${ssrRenderAttr("href", unref(event).swoopShopUrl)} target="_blank" rel="noopener" class="btn btn-outline btn-lg" style="${ssrRenderStyle({ "border-color": "rgba(0,104,187,.4)", "color": "#0068bb" })}" data-v-c0f787bf>`);
      _push(ssrRenderComponent(_component_EventIcon, {
        name: "shopping-bag",
        size: 18
      }, null, _parent));
      _push(` Swoop Shop </a><button class="btn btn-outline btn-lg no-print" style="${ssrRenderStyle({ "border-color": "rgba(0,104,187,.4)", "color": "#0068bb" })}" data-v-c0f787bf><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-c0f787bf><polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c0f787bf></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c0f787bf></path><rect x="6" y="14" width="12" height="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c0f787bf></rect></svg> Print event info </button></div></div><div class="video-placeholder" data-v-c0f787bf><div class="video-thumb" data-v-c0f787bf><img${ssrRenderAttr("src", unref(event).videoPlaceholder.thumbnail)}${ssrRenderAttr("alt", unref(event).videoPlaceholder.label)} loading="eager" data-v-c0f787bf><div class="video-overlay" data-v-c0f787bf><button class="play-ring"${ssrRenderAttr("aria-label", `Play: ${unref(event).videoPlaceholder.label}`)} data-v-c0f787bf><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f787bf><path d="M8 5v14l11-7z" data-v-c0f787bf></path></svg></button></div></div><p class="video-label" data-v-c0f787bf>${ssrInterpolate(unref(event).videoPlaceholder.label)}</p><span class="video-note badge badge-dark" data-v-c0f787bf>Placeholder \u2014 video coming soon</span></div></div></section><div class="container event-layout" data-v-c0f787bf><div class="event-main" data-v-c0f787bf><section class="event-section" id="about" data-v-c0f787bf><h2 class="event-section-title" data-v-c0f787bf>What to expect</h2><p class="event-body-text" data-v-c0f787bf>${ssrInterpolate(unref(event).description)}</p></section><section class="event-section" id="schedule" data-v-c0f787bf><div class="section-header-row" data-v-c0f787bf><h2 class="event-section-title" data-v-c0f787bf>Your day</h2><button class="btn btn-outline btn-sm no-print" data-v-c0f787bf><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-c0f787bf><polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c0f787bf></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c0f787bf></path><rect x="6" y="14" width="12" height="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c0f787bf></rect></svg> Print schedule </button></div><div class="schedule-timeline" data-v-c0f787bf><!--[-->`);
      ssrRenderList(unref(event).schedule, (item, i) => {
        _push(`<div class="timeline-item" data-v-c0f787bf><div class="tl-time" data-v-c0f787bf>${ssrInterpolate(item.time)}</div><div class="tl-dot" style="${ssrRenderStyle(`background: ${unref(colors).accent}`)}" aria-hidden="true" data-v-c0f787bf></div><div class="tl-content" data-v-c0f787bf><div class="tl-header" data-v-c0f787bf><span class="tl-icon" aria-hidden="true" data-v-c0f787bf>`);
        _push(ssrRenderComponent(_component_EventIcon, {
          name: item.icon,
          size: 18
        }, null, _parent));
        _push(`</span><h3 class="tl-title" data-v-c0f787bf>${ssrInterpolate(item.title)}</h3></div>`);
        if (item.description) {
          _push(`<p class="tl-desc" data-v-c0f787bf>${ssrInterpolate(item.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (item.location) {
          _push(`<p class="tl-location" data-v-c0f787bf><svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-c0f787bf><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" data-v-c0f787bf></path><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" data-v-c0f787bf></circle></svg> ${ssrInterpolate(item.location)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></section><section class="event-section" id="bring" data-v-c0f787bf><h2 class="event-section-title" data-v-c0f787bf>What to bring</h2><div class="bring-grid" data-v-c0f787bf><!--[-->`);
      ssrRenderList(unref(event).bringItems, (item, i) => {
        _push(`<div class="bring-item" data-v-c0f787bf><span class="bring-icon" aria-hidden="true" data-v-c0f787bf>`);
        _push(ssrRenderComponent(_component_EventIcon, {
          name: item.icon,
          size: 20
        }, null, _parent));
        _push(`</span><span class="bring-text" data-v-c0f787bf>${ssrInterpolate(item.text)}</span></div>`);
      });
      _push(`<!--]--></div><div class="dress-code-box card-ghost" data-v-c0f787bf><div class="dress-icon" aria-hidden="true" data-v-c0f787bf><svg width="22" height="22" viewBox="0 0 24 24" fill="none" data-v-c0f787bf><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-c0f787bf></path></svg></div><div data-v-c0f787bf><p class="dress-label" data-v-c0f787bf>Dress code</p><p class="dress-code-val" data-v-c0f787bf>${ssrInterpolate(unref(event).dressCode)}</p><p class="dress-tip" data-v-c0f787bf>${ssrInterpolate(unref(event).dressCodeTip)}</p></div></div></section><section class="event-section parents-section" id="parents" data-v-c0f787bf><div class="parents-header" data-v-c0f787bf><span class="parents-emoji" aria-hidden="true" data-v-c0f787bf>`);
      _push(ssrRenderComponent(_component_EventIcon, {
        name: "users",
        size: 34
      }, null, _parent));
      _push(`</span><div data-v-c0f787bf><h2 class="event-section-title" data-v-c0f787bf>${ssrInterpolate(unref(event).parentsTitle)}</h2><p class="event-body-text" data-v-c0f787bf>${ssrInterpolate(unref(event).parentsIntro)}</p></div></div><div class="parents-grid" data-v-c0f787bf><!--[-->`);
      ssrRenderList(unref(event).parentsItems, (item, i) => {
        _push(`<div class="parent-card card-ghost" data-v-c0f787bf><span class="parent-icon" aria-hidden="true" data-v-c0f787bf>`);
        _push(ssrRenderComponent(_component_EventIcon, {
          name: item.icon,
          size: 22
        }, null, _parent));
        _push(`</span><h3 class="parent-title" data-v-c0f787bf>${ssrInterpolate(item.title)}</h3><p class="parent-body" data-v-c0f787bf>${ssrInterpolate(item.body)}</p></div>`);
      });
      _push(`<!--]--></div></section>`);
      if (unref(event).financialAid) {
        _push(`<section class="event-section faid-section" id="aid" data-v-c0f787bf><div class="faid-box card-ghost" data-v-c0f787bf><div class="faid-icon" aria-hidden="true" data-v-c0f787bf><svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-c0f787bf><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c0f787bf></path></svg></div><div class="faid-body" data-v-c0f787bf><h3 class="faid-headline" data-v-c0f787bf>${ssrInterpolate(unref(event).financialAid.headline)}</h3><p class="faid-text" data-v-c0f787bf>${ssrInterpolate(unref(event).financialAid.body)}</p></div><a${ssrRenderAttr("href", unref(event).financialAid.ctaUrl)} target="_blank" rel="noopener" class="btn btn-gold btn-sm" data-v-c0f787bf>${ssrInterpolate(unref(event).financialAid.ctaLabel)}</a></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="event-section" id="faq" data-v-c0f787bf><h2 class="event-section-title" data-v-c0f787bf>Questions &amp; answers</h2><div class="faq-filters no-print" role="tablist" aria-label="Filter FAQ by topic" data-v-c0f787bf><!--[-->`);
      ssrRenderList(faqCategories, (cat) => {
        _push(`<button class="${ssrRenderClass([{ "is-active": unref(activeFaqCat) === cat.key }, "faq-tab"])}" role="tab"${ssrRenderAttr("aria-selected", unref(activeFaqCat) === cat.key)} data-v-c0f787bf>${ssrInterpolate(cat.label)}</button>`);
      });
      _push(`<!--]--></div><div class="faq-list" data-v-c0f787bf><!--[-->`);
      ssrRenderList(unref(filteredFaqs), (faq) => {
        _push(`<div class="faq-item" data-v-c0f787bf><button class="faq-q"${ssrRenderAttr("aria-expanded", unref(openFaq) === faq.q)} data-v-c0f787bf><span data-v-c0f787bf>${ssrInterpolate(faq.q)}</span><svg class="${ssrRenderClass([{ "is-open": unref(openFaq) === faq.q }, "faq-chevron"])}" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-c0f787bf><polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c0f787bf></polyline></svg></button>`);
        if (unref(openFaq) === faq.q) {
          _push(`<div class="faq-a" data-v-c0f787bf><p data-v-c0f787bf>${ssrInterpolate(faq.a)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div><aside class="event-sidebar" data-v-c0f787bf><div class="reg-card card" style="${ssrRenderStyle(`--card-accent: ${unref(colors).accent}`)}" data-v-c0f787bf><div class="reg-card-header" style="${ssrRenderStyle(`background: ${unref(colors).light}`)}" data-v-c0f787bf><p class="reg-date-display" data-v-c0f787bf><span class="reg-weekday" data-v-c0f787bf>${ssrInterpolate((/* @__PURE__ */ new Date(unref(selectedDate) + "T00:00:00")).toLocaleDateString("en-US", { weekday: "long" }))}</span><span class="reg-full" data-v-c0f787bf>${ssrInterpolate((/* @__PURE__ */ new Date(unref(selectedDate) + "T00:00:00")).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))}</span></p><p class="reg-time" data-v-c0f787bf><svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-c0f787bf><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" data-v-c0f787bf></circle><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-c0f787bf></polyline></svg> ${ssrInterpolate(unref(selectedInst).timeStart)} \u2013 ${ssrInterpolate(unref(selectedInst).timeEnd)}</p></div><div class="reg-card-body" data-v-c0f787bf><a${ssrRenderAttr("href", unref(event).registrationUrl)} target="_blank" rel="noopener" class="btn btn-coral btn-full btn-lg" data-v-c0f787bf> Register now \u2014 it&#39;s free </a><a${ssrRenderAttr("href", unref(event).swoopShopUrl)} target="_blank" rel="noopener" class="btn btn-outline btn-full btn-sm" data-v-c0f787bf>`);
      _push(ssrRenderComponent(_component_EventIcon, {
        name: "shopping-bag",
        size: 16
      }, null, _parent));
      _push(` Swoop Shop </a><p class="reg-note" data-v-c0f787bf>No commitment required to register.</p></div></div><div class="badge-generator card" data-v-c0f787bf><h3 class="badge-gen-title" data-v-c0f787bf><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-c0f787bf><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2" data-v-c0f787bf></rect><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="2" data-v-c0f787bf></path></svg> Make your name tag </h3><p class="badge-gen-sub" data-v-c0f787bf>Your name as it will appear on your event badge:</p><div class="field" data-v-c0f787bf><label for="badgeName" data-v-c0f787bf>Your name</label><input id="badgeName"${ssrRenderAttr("value", unref(badgeName))} type="text" placeholder="e.g. Maya Thompson" maxlength="40" data-v-c0f787bf></div>`);
      if (unref(badgeName)) {
        _push(`<div class="badge-preview" style="${ssrRenderStyle(`border-color: ${unref(colors).accent}; background: ${unref(colors).light}`)}" data-v-c0f787bf><p class="badge-preview-label" data-v-c0f787bf>Preview</p><p class="badge-preview-name" data-v-c0f787bf>${ssrInterpolate(unref(badgeName))}</p><p class="badge-preview-event" data-v-c0f787bf>${ssrInterpolate(unref(event).name)} \xB7 ${ssrInterpolate(unref(selectedInst).label)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="contact-card card-ghost" data-v-c0f787bf><h3 class="contact-title" data-v-c0f787bf>Questions?</h3><p class="contact-body" data-v-c0f787bf>Our admissions team replies within one business day.</p><a href="mailto:admissions@northwestu.edu" class="contact-link" data-v-c0f787bf><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-c0f787bf><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" data-v-c0f787bf></path><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-c0f787bf></polyline></svg> admissions@northwestu.edu </a></div></aside></div><div class="print-only-page" data-v-c0f787bf><header class="print-header" data-v-c0f787bf><svg class="print-shield" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-c0f787bf><path d="M32 4L8 14v18c0 14 24 22 24 22s24-8 24-22V14L32 4z" fill="#0068bb" stroke="#fbd945" stroke-width="2" data-v-c0f787bf></path><text x="32" y="38" text-anchor="middle" font-size="14" font-weight="900" fill="#fbd945" font-family="system-ui" data-v-c0f787bf>NU</text></svg><p class="print-event-type" data-v-c0f787bf>Northwest University \xB7 Admissions Event</p><h1 class="print-event-name" data-v-c0f787bf>${ssrInterpolate(unref(event).name)}</h1><p class="print-event-tagline" data-v-c0f787bf>${ssrInterpolate(unref(event).tagline)}</p><div class="print-event-meta" data-v-c0f787bf><div class="print-meta-item" data-v-c0f787bf><div class="print-meta-icon" data-v-c0f787bf><svg viewBox="0 0 24 24" fill="none" data-v-c0f787bf><rect x="3" y="4" width="18" height="18" rx="2" stroke="white" stroke-width="2" data-v-c0f787bf></rect><path d="M16 2v4M8 2v4M3 10h18" stroke="white" stroke-width="2" stroke-linecap="round" data-v-c0f787bf></path></svg></div><div data-v-c0f787bf><p class="print-meta-label" data-v-c0f787bf>Date</p><p class="print-meta-value" data-v-c0f787bf>${ssrInterpolate(unref(selectedInst).label)}</p></div></div><div class="print-meta-item" data-v-c0f787bf><div class="print-meta-icon" data-v-c0f787bf><svg viewBox="0 0 24 24" fill="none" data-v-c0f787bf><circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" data-v-c0f787bf></circle><polyline points="12 6 12 12 16 14" stroke="white" stroke-width="2" stroke-linecap="round" data-v-c0f787bf></polyline></svg></div><div data-v-c0f787bf><p class="print-meta-label" data-v-c0f787bf>Time</p><p class="print-meta-value" data-v-c0f787bf>${ssrInterpolate(unref(selectedInst).timeStart)} \u2013 ${ssrInterpolate(unref(selectedInst).timeEnd)}</p></div></div><div class="print-meta-item" data-v-c0f787bf><div class="print-meta-icon" data-v-c0f787bf><svg viewBox="0 0 24 24" fill="none" data-v-c0f787bf><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" stroke-width="2" data-v-c0f787bf></path><circle cx="12" cy="10" r="3" stroke="white" stroke-width="2" data-v-c0f787bf></circle></svg></div><div data-v-c0f787bf><p class="print-meta-label" data-v-c0f787bf>Location</p><p class="print-meta-value" data-v-c0f787bf>Northwest University, Kirkland WA</p></div></div></div></header><div class="print-body" data-v-c0f787bf><div class="print-reg-box" data-v-c0f787bf><div class="print-qr-placeholder" aria-hidden="true" data-v-c0f787bf><div class="print-qr-placeholder-inner" data-v-c0f787bf></div></div><div data-v-c0f787bf><p class="print-reg-label" data-v-c0f787bf>Register at</p><p class="print-reg-url" data-v-c0f787bf>${ssrInterpolate(unref(event).registrationUrl)}</p></div></div><section data-v-c0f787bf><h2 class="print-section-title" data-v-c0f787bf>Schedule</h2><table class="print-schedule" data-v-c0f787bf><thead data-v-c0f787bf><tr data-v-c0f787bf><th data-v-c0f787bf>Time</th><th data-v-c0f787bf>Activity</th><th data-v-c0f787bf>Details</th></tr></thead><tbody data-v-c0f787bf><!--[-->`);
      ssrRenderList(unref(event).schedule, (item) => {
        _push(`<tr data-v-c0f787bf><td class="print-time" data-v-c0f787bf>${ssrInterpolate(item.time)}</td><td data-v-c0f787bf><p class="print-title" data-v-c0f787bf>${ssrInterpolate(item.title)}</p>`);
        if (item.track && item.track !== "all") {
          _push(`<span class="${ssrRenderClass(`print-track print-track-${item.track}`)}" data-v-c0f787bf>${ssrInterpolate(item.track)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td data-v-c0f787bf><p class="print-desc" data-v-c0f787bf>${ssrInterpolate(item.description)}</p>`);
        if (item.location) {
          _push(`<p class="print-desc" style="${ssrRenderStyle({ "font-style": "italic", "margin-top": "2pt" })}" data-v-c0f787bf>${ssrInterpolate(item.location)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></section><section data-v-c0f787bf><h2 class="print-section-title" data-v-c0f787bf>What to bring</h2><div class="print-bring" data-v-c0f787bf><!--[-->`);
      ssrRenderList(unref(event).bringItems, (item) => {
        _push(`<div class="print-bring-item" data-v-c0f787bf><span class="print-bring-icon" aria-hidden="true" data-v-c0f787bf>`);
        _push(ssrRenderComponent(_component_EventIcon, {
          name: item.icon,
          size: 12
        }, null, _parent));
        _push(`</span><span class="print-bring-text" data-v-c0f787bf>${ssrInterpolate(item.text)}</span></div>`);
      });
      _push(`<!--]--></div></section><section data-v-c0f787bf><h2 class="print-section-title" data-v-c0f787bf>Dress code</h2><div class="print-dress" data-v-c0f787bf><div class="print-dress-icon" aria-hidden="true" data-v-c0f787bf><svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-v-c0f787bf><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" stroke="#0068bb" stroke-width="1.5" data-v-c0f787bf></path></svg></div><div data-v-c0f787bf><p class="print-dress-label" data-v-c0f787bf>Dress code</p><p class="print-dress-value" data-v-c0f787bf>${ssrInterpolate(unref(event).dressCode)}</p><p class="print-dress-tip" data-v-c0f787bf>${ssrInterpolate(unref(event).dressCodeTip)}</p></div></div></section><footer class="print-footer" data-v-c0f787bf><span data-v-c0f787bf>Northwest University \xB7 Kirkland, WA \xB7 northwestu.edu</span><span data-v-c0f787bf>Questions? <a${ssrRenderAttr("href", `mailto:${"admissions@northwestu.edu"}`)} data-v-c0f787bf>admissions@northwestu.edu</a> \xB7 (425) 555-1234</span></footer></div></div>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c0f787bf"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BMiyLK4v.mjs.map
