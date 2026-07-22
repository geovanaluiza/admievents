import { a as _sfc_main$2, _ as _sfc_main$3, b as _sfc_main$4 } from "./SiteFooter-PH1AlZ4m.js";
import { defineComponent, ref, watch, nextTick, mergeProps, unref, useSSRContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, d as useRoute, e as createError } from "../server.mjs";
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
          _push(`<div class="escalate-row" data-v-653f77e6><p class="escalate-note" data-v-653f77e6> Or call us: <a href="tel:+14255551234" data-v-653f77e6>(425) 555-1234</a> · <a href="mailto:visit@northwest.edu" data-v-653f77e6>visit@northwest.edu</a></p></div>`);
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
    shortDescription: "A guided tour + admissions chat — perfect for first-timers figuring out if NU clicks.",
    description: "Discover NU is our signature open house event. Spend the day on campus, meet professors and current students, and get all your questions answered by our admissions team. Bring the whole crew — parents, guardians, and anyone who wants to know what makes this place special.",
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
      { time: "8:15 AM", title: "Check In", description: "Grab your nametag, say hi to the team, and get settled.", icon: "tag", location: "Larson Hall Lobby" },
      { time: "8:30 AM", title: "Welcome", description: "Get oriented — who we are, what the day looks like, and how to make the most of it.", icon: "hand", location: "Larson Hall" },
      { time: "9:00 AM", title: "Discover Campus", description: "Student-led walk through 56 acres — trails, chapel, labs, dining, the whole vibe.", icon: "footprints", location: "Departs from Larson Hall" },
      { time: "10:10 AM", title: "Discover Chapel", description: "See inside our chapel and hear how faith shapes daily life on campus.", icon: "church", location: "Chapel" },
      { time: "11:20 AM", title: "Discover Community", description: "Meet current students and hear what life is actually like at NU.", icon: "message", location: "University Center" },
      { time: "12:00 PM", title: "Send-Off", description: "Quick wrap-up and directions to lunch.", icon: "hand", location: "Larson Hall" },
      { time: "12:30 PM", title: "Choose Your Adventure — Lunch", description: "Eat at Sæter, our campus dining hall. Come hungry.", icon: "utensils", location: "Sæter Dining Hall", track: "all" },
      // Optional afternoon sessions
      { time: "12:30–1:20 PM", title: "Class Visit", description: "Sit in on a real NU class.", icon: "book-open", location: "Academic Buildings", track: "students" },
      { time: "1:30–2:20 PM", title: "Class Visit", description: "Another class you can drop into.", icon: "book-open", location: "Academic Buildings", track: "students" },
      { time: "2:30–3:20 PM", title: "Class Visit", description: "A third class option.", icon: "book-open", location: "Academic Buildings", track: "students" },
      { time: "1:00–4:00 PM", title: "Music Auditions", description: "For prospective Music Production students.", icon: "music", location: "Creatio Studio", track: "students" },
      { time: "2:30 PM", title: "Residence Hall Tour", description: "See what dorm life looks like.", icon: "home", location: "Departs from Larson Hall", track: "all" },
      { time: "3:30 PM", title: "Choralons", description: " NU's auditioned choir — come hear them live.", icon: "mic", location: "Chapel", track: "all" },
      { time: "12:30–4:00 PM", title: "One-on-One Meetings", description: "Meet individually with Admissions or Financial Aid staff.", icon: "briefcase", location: "Larson Hall", track: "all" }
    ],
    faqs: [
      { q: "Is parking free?", a: "Yes — parking is free for all Discover NU guests. Pull into any visitor spot and grab a pass at check-in.", category: "logistics" },
      { q: "What should I wear?", a: "Come as you are. This is PNW casual — jeans and sneakers are totally fine. The tour is partly outdoors so dress for the weather.", category: "logistics" },
      { q: "Can I stay for just part of the day?", a: "Absolutely — you can come for the morning and leave at noon, or just show up for the afternoon sessions. No commitment required.", category: "logistics" },
      { q: "Can I bring younger siblings?", a: "Kids are welcome, especially at lunch and the campus tour. Some afternoon classes may not be appropriate for young children — use your judgment.", category: "logistics" },
      { q: "How do I register each family member?", a: "Each guest attending lunch needs their own registration, even if they're coming with a student.", category: "logistics" },
      { q: "What is the cancellation policy?", a: "Email admissions@northwestu.edu at least 48 hours before your event and we'll move you to another date with no penalty.", category: "logistics" },
      { q: "Is my student expected to apply on the day?", a: "Not at all. Discover NU is a no-pressure event. We want you to explore, ask questions, and figure out if NU feels right.", category: "general" },
      { q: "Will there be someone to talk about financial aid?", a: "Yes — our financial aid team is at every Discover NU event. You can also ask us anything in the Q&A or swing by the table during lunch.", category: "cost" },
      { q: "How competitive is admissions?", a: "We take a holistic approach — your student's character, story, and fit matter as much as grades. Our counselors can talk through your student's profile individually.", category: "general" },
      { q: "Can I get a feel for the spiritual environment?", a: "Absolutely. We'll talk openly about faith at NU, including chapel, worship nights, and how spirituality shows up in and out of the classroom.", category: "parents" },
      { q: "What if my student is applying to multiple schools?", a: "Completely normal. We'll give you the full picture of what makes NU unique, but we'll never pressure you.", category: "parents" }
    ],
    bringItems: [
      { icon: "footprints", text: "Comfy shoes for the campus tour (partly outdoor, about 45 minutes)" },
      { icon: "cloud-rain", text: "Layers and a light jacket — Kirkland weather is unpredictable" },
      { icon: "pen-line", text: "Questions! Bring a list or just wing it" },
      { icon: "smartphone", text: "Your phone for photos and the campus app" },
      { icon: "pill", text: "Any personal meds / allergy epi-pens (we don't have these on hand)" }
    ],
    dressCode: "PNW Casual",
    dressCodeTip: "Jeans, sneakers, layers — totally fine. Nothing formal needed.",
    parentsTitle: "A note for parents & guardians",
    parentsIntro: "We know you're asking different questions than your student. Here's what matters to you — and how we've got you covered.",
    parentsItems: [
      { icon: "lock", title: "Safety & wellbeing", body: "Our campus is private, gated, and has 24/7 security. Students consistently tell us NU feels safe and like a real community." },
      { icon: "dollar-sign", title: "Financial clarity", body: "We'll walk through real scholarship scenarios, out-of-pocket costs, and what financial aid actually looks like. No surprises." },
      { icon: "presentation", title: "Faculty accessibility", body: "Class sizes average 18 students. Your student's professor will know their name by week two." },
      { icon: "car", title: "Getting here", body: "We're 20 minutes from Seattle, with easy parking on campus. SEA-TAC is about 35 minutes away." }
    ],
    financialAid: {
      headline: "Scholarships are part of the conversation.",
      body: "Over 90% of our students receive financial aid. We'll break down grants, scholarships, and work-study so you know what to expect before you apply.",
      ctaLabel: "Explore scholarships →",
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
    description: "NU Overnight is the closest you can get to being a student without enrolling. You'll stay in a residence hall with a trained, background-checked student host, eat dinner and breakfast in Sæter, sit in on real morning classes, and experience chapel and campus life after dark. Six dates across the school year — pick the one that fits your schedule.",
    heroImage: "/events/overnight-hero.jpg",
    videoPlaceholder: {
      thumbnail: "/events/overnight-video-thumb.jpg",
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
      { time: "Day 1 · 4:00 PM", title: "Check In & Meet Your Host", description: "Get your nametag, drop your bag, and meet the student host you'll be staying with tonight.", icon: "tag", location: "Larson Hall Lobby" },
      { time: "Day 1 · 4:30 PM", title: "Campus Tour", description: "Student-led walk through campus — trails, chapel, labs, and the spots students actually hang out.", icon: "footprints", location: "Departs from Larson Hall" },
      { time: "Day 1 · 6:00 PM", title: "Dinner at Sæter", description: "Dinner in our campus dining hall with hosts and other overnight guests. Come hungry.", icon: "utensils", location: "Sæter Dining Hall", track: "all" },
      { time: "Day 1 · 7:30 PM", title: "Evening Activity", description: "Game night, worship night, or a student showcase — depends on the date, always a good time.", icon: "music", location: "University Center", track: "students" },
      { time: "Day 1 · 9:30 PM", title: "Hall Hangout", description: "Snacks, games, and honest conversation with current students in the residence hall lounge.", icon: "message", location: "Residence Hall", track: "students" },
      { time: "Day 1 · 11:00 PM", title: "Lights Out", description: "Settle in with your host. Residence halls are key-card access only, with overnight staff on duty.", icon: "moon", location: "Residence Hall", track: "students" },
      { time: "Day 2 · 7:30 AM", title: "Breakfast at Sæter", description: "The most important meal of the day, dining-hall style.", icon: "utensils", location: "Sæter Dining Hall", track: "all" },
      { time: "Day 2 · 8:30 AM", title: "Class Visit", description: "Sit in on a real NU class in your area of interest.", icon: "book-open", location: "Academic Buildings", track: "students" },
      { time: "Day 2 · 10:00 AM", title: "Admissions Q&A + Wrap-Up", description: "Final questions with the admissions team, plus next steps if NU feels right.", icon: "briefcase", location: "Larson Hall", track: "all" },
      { time: "Day 2 · 11:00 AM", title: "Pick-Up", description: "Parents pick up students at Larson Hall. Stick around for coffee with our team if you'd like.", icon: "car", location: "Larson Hall", track: "all" }
    ],
    faqs: [
      { q: "Who will my student stay with?", a: "Every overnight guest is paired with a trained, background-checked NU student host of the same gender, in a supervised residence hall.", category: "parents" },
      { q: "Do parents stay overnight too?", a: "The overnight portion is students-only — it's designed to feel like real dorm life. Parents join for check-in and pick-up, and Kirkland has several hotels nearby if you're traveling.", category: "parents" },
      { q: "What should my student bring?", a: "A sleeping bag or bedding, pillow, toiletries, and comfy clothes. See the full What to Bring list on this page.", category: "logistics" },
      { q: "Are meals included?", a: "Yes — dinner, evening snacks, and breakfast are all included at no cost.", category: "cost" },
      { q: "Is the event really free?", a: "Completely free. NU Overnight is our gift to students seriously considering NU.", category: "cost" },
      { q: "What if my student has allergies or dietary needs?", a: "Note them on your registration and our dining team will have options ready at every meal.", category: "logistics" },
      { q: "What time is pick-up?", a: "11:00 AM the next morning at Larson Hall. You're welcome to come early for coffee with the admissions team.", category: "logistics" },
      { q: "Can I request a specific host?", a: "If your student knows a current NU student, mention it during registration and we'll do our best to pair them.", category: "general" },
      { q: "What happens if my student feels uncomfortable?", a: "Residence staff are on duty all night, and every host carries a direct line to our team. Your student can call you — or be picked up — at any time.", category: "parents" },
      { q: "Which class will my student visit?", a: "We match class visits to the academic interest listed on your registration. Want a specific class? Email us ahead of time.", category: "general" }
    ],
    bringItems: [
      { icon: "moon", text: "Sleeping bag or bedding + pillow (mattress is provided)" },
      { icon: "briefcase", text: "Toiletries and a towel" },
      { icon: "cloud-rain", text: "Comfy layers — pajamas, and a jacket for the evening walk" },
      { icon: "smartphone", text: "Phone + charger for photos and the campus app" },
      { icon: "pill", text: "Any personal meds / allergy epi-pens (staff don't carry these)" }
    ],
    dressCode: "Sleepover Casual",
    dressCodeTip: "Comfy clothes for day one, pajamas for the night, and something presentable for morning classes.",
    parentsTitle: "A note for parents & guardians",
    parentsIntro: "Sending your student to sleep on a college campus takes trust. Here's exactly how we keep them safe — and keep you in the loop.",
    parentsItems: [
      { icon: "lock", title: "Vetted hosts only", body: "Every student host is background-checked, trained, and supervised by full-time residence life staff." },
      { icon: "home", title: "Secure residence halls", body: "Key-card access only, separated by gender, with overnight staff on duty and a 24/7 campus security line." },
      { icon: "message", title: "Reachable all night", body: "Your student keeps their phone, and our team shares a direct contact number at check-in. You can reach your student at any time." },
      { icon: "car", title: "Simple drop-off & pick-up", body: "Drop off at 4:00 PM Friday, pick up at 11:00 AM Saturday — both at Larson Hall. Free visitor parking." }
    ],
    financialAid: {
      headline: "Thinking about cost? So are we.",
      body: "Over 90% of our students receive financial aid. Ask us about scholarships during the Saturday wrap-up — or before you even arrive.",
      ctaLabel: "Explore scholarships →",
      ctaUrl: "https://www.northwestu.edu/financial-aid"
    }
  }
];
const useEvents = () => {
  const getEvent = (slug) => EVENTS.find((e) => e.slug === slug) ?? null;
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
      title: `${event.value.name} — Northwest University Admissions`,
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
      const _component_SiteHeader = _sfc_main$3;
      const _component_EventIcon = _sfc_main$2;
      const _component_SiteFooter = _sfc_main$4;
      const _component_FaqChatbot = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-582833e2>`);
      _push(ssrRenderComponent(_component_SiteHeader, { event: unref(event) }, null, _parent));
      _push(`<div class="no-print" aria-hidden="true" data-v-582833e2></div><section class="event-hero" style="${ssrRenderStyle(`--event-accent: ${unref(colors).accent}; --event-light: ${unref(colors).light};`)}" data-v-582833e2><div class="hero-bg-img" style="${ssrRenderStyle(`background-image: url('${unref(event).heroImage}')`)}" aria-hidden="true" data-v-582833e2><div class="hero-bg-overlay" data-v-582833e2></div></div><div class="container event-hero-inner" data-v-582833e2><div class="event-hero-copy" data-v-582833e2><div class="event-meta" data-v-582833e2><span class="${ssrRenderClass(`badge ${unref(colors).tag}`)}" data-v-582833e2>`);
      _push(ssrRenderComponent(_component_EventIcon, {
        name: unref(event).icon,
        size: 14
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(event).name)}</span><span class="badge badge-dark" data-v-582833e2>${ssrInterpolate(unref(selectedInst).timeStart)} – ${ssrInterpolate(unref(selectedInst).timeEnd)}</span></div><h1 class="event-title" data-v-582833e2>${ssrInterpolate(unref(event).name)}</h1><p class="event-tagline" data-v-582833e2>${ssrInterpolate(unref(event).tagline)}</p><div class="instance-picker" data-v-582833e2><p class="instance-label" data-v-582833e2><svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-582833e2><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" data-v-582833e2></rect><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-582833e2></path></svg> Pick your date </p><div class="instance-chips" data-v-582833e2><!--[-->`);
      ssrRenderList(unref(event).instances, (inst) => {
        _push(`<button class="${ssrRenderClass([{ "is-active": inst.date === unref(selectedDate) }, "instance-chip"])}" data-v-582833e2><span class="chip-weekday" data-v-582833e2>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).toLocaleDateString("en-US", { weekday: "short" }))}</span><span class="chip-date" data-v-582833e2>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).toLocaleDateString("en-US", { month: "short", day: "numeric" }))}</span><span class="chip-year" data-v-582833e2>${ssrInterpolate((/* @__PURE__ */ new Date(inst.date + "T00:00:00")).getFullYear())}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="event-ctas" data-v-582833e2><a${ssrRenderAttr("href", unref(event).registrationUrl)} target="_blank" rel="noopener" class="btn btn-coral btn-lg" data-v-582833e2><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-582833e2><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-582833e2></path></svg> Register for ${ssrInterpolate(unref(selectedInst).label)}</a><a${ssrRenderAttr("href", unref(event).swoopShopUrl)} target="_blank" rel="noopener" class="btn btn-outline btn-lg" style="${ssrRenderStyle({ "border-color": "rgba(0,104,187,.4)", "color": "#0068bb" })}" data-v-582833e2>`);
      _push(ssrRenderComponent(_component_EventIcon, {
        name: "shopping-bag",
        size: 18
      }, null, _parent));
      _push(` Swoop Shop </a><button class="btn btn-outline btn-lg no-print" style="${ssrRenderStyle({ "border-color": "rgba(0,104,187,.4)", "color": "#0068bb" })}" data-v-582833e2><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-582833e2><polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-582833e2></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-582833e2></path><rect x="6" y="14" width="12" height="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-582833e2></rect></svg> Print event info </button></div></div><div class="video-placeholder" data-v-582833e2><div class="video-thumb" data-v-582833e2><img${ssrRenderAttr("src", unref(event).videoPlaceholder.thumbnail)}${ssrRenderAttr("alt", unref(event).videoPlaceholder.label)} loading="eager" data-v-582833e2><div class="video-overlay" data-v-582833e2><button class="play-ring"${ssrRenderAttr("aria-label", `Play: ${unref(event).videoPlaceholder.label}`)} data-v-582833e2><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-582833e2><path d="M8 5v14l11-7z" data-v-582833e2></path></svg></button></div></div><p class="video-label" data-v-582833e2>${ssrInterpolate(unref(event).videoPlaceholder.label)}</p><span class="video-note badge badge-dark" data-v-582833e2>Placeholder — video coming soon</span></div></div></section><div class="container event-layout" data-v-582833e2><div class="event-main" data-v-582833e2><section class="event-section" id="about" data-v-582833e2><h2 class="event-section-title" data-v-582833e2>What to expect</h2><p class="event-body-text" data-v-582833e2>${ssrInterpolate(unref(event).description)}</p></section><section class="event-section" id="schedule" data-v-582833e2><div class="section-header-row" data-v-582833e2><h2 class="event-section-title" data-v-582833e2>Your day</h2><button class="btn btn-outline btn-sm no-print" data-v-582833e2><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-582833e2><polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-582833e2></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-582833e2></path><rect x="6" y="14" width="12" height="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-582833e2></rect></svg> Print schedule </button></div><div class="schedule-timeline" data-v-582833e2><!--[-->`);
      ssrRenderList(unref(event).schedule, (item, i) => {
        _push(`<div class="timeline-item" data-v-582833e2><div class="tl-time" data-v-582833e2>${ssrInterpolate(item.time)}</div><div class="tl-dot" style="${ssrRenderStyle(`background: ${unref(colors).accent}`)}" aria-hidden="true" data-v-582833e2></div><div class="tl-content" data-v-582833e2><div class="tl-header" data-v-582833e2><span class="tl-icon" aria-hidden="true" data-v-582833e2>`);
        _push(ssrRenderComponent(_component_EventIcon, {
          name: item.icon,
          size: 18
        }, null, _parent));
        _push(`</span><h3 class="tl-title" data-v-582833e2>${ssrInterpolate(item.title)}</h3></div>`);
        if (item.description) {
          _push(`<p class="tl-desc" data-v-582833e2>${ssrInterpolate(item.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (item.location) {
          _push(`<p class="tl-location" data-v-582833e2><svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-582833e2><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" data-v-582833e2></path><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" data-v-582833e2></circle></svg> ${ssrInterpolate(item.location)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></section><section class="event-section" id="bring" data-v-582833e2><h2 class="event-section-title" data-v-582833e2>What to bring</h2><div class="bring-grid" data-v-582833e2><!--[-->`);
      ssrRenderList(unref(event).bringItems, (item, i) => {
        _push(`<div class="bring-item" data-v-582833e2><span class="bring-icon" aria-hidden="true" data-v-582833e2>`);
        _push(ssrRenderComponent(_component_EventIcon, {
          name: item.icon,
          size: 20
        }, null, _parent));
        _push(`</span><span class="bring-text" data-v-582833e2>${ssrInterpolate(item.text)}</span></div>`);
      });
      _push(`<!--]--></div><div class="dress-code-box card-ghost" data-v-582833e2><div class="dress-icon" aria-hidden="true" data-v-582833e2><svg width="22" height="22" viewBox="0 0 24 24" fill="none" data-v-582833e2><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-582833e2></path></svg></div><div data-v-582833e2><p class="dress-label" data-v-582833e2>Dress code</p><p class="dress-code-val" data-v-582833e2>${ssrInterpolate(unref(event).dressCode)}</p><p class="dress-tip" data-v-582833e2>${ssrInterpolate(unref(event).dressCodeTip)}</p></div></div></section><section class="event-section parents-section" id="parents" data-v-582833e2><div class="parents-header" data-v-582833e2><span class="parents-emoji" aria-hidden="true" data-v-582833e2>`);
      _push(ssrRenderComponent(_component_EventIcon, {
        name: "users",
        size: 34
      }, null, _parent));
      _push(`</span><div data-v-582833e2><h2 class="event-section-title" data-v-582833e2>${ssrInterpolate(unref(event).parentsTitle)}</h2><p class="event-body-text" data-v-582833e2>${ssrInterpolate(unref(event).parentsIntro)}</p></div></div><div class="parents-grid" data-v-582833e2><!--[-->`);
      ssrRenderList(unref(event).parentsItems, (item, i) => {
        _push(`<div class="parent-card card-ghost" data-v-582833e2><span class="parent-icon" aria-hidden="true" data-v-582833e2>`);
        _push(ssrRenderComponent(_component_EventIcon, {
          name: item.icon,
          size: 22
        }, null, _parent));
        _push(`</span><h3 class="parent-title" data-v-582833e2>${ssrInterpolate(item.title)}</h3><p class="parent-body" data-v-582833e2>${ssrInterpolate(item.body)}</p></div>`);
      });
      _push(`<!--]--></div></section>`);
      if (unref(event).financialAid) {
        _push(`<section class="event-section faid-section" id="aid" data-v-582833e2><div class="faid-box card-ghost" data-v-582833e2><div class="faid-icon" aria-hidden="true" data-v-582833e2><svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-582833e2><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-582833e2></path></svg></div><div class="faid-body" data-v-582833e2><h3 class="faid-headline" data-v-582833e2>${ssrInterpolate(unref(event).financialAid.headline)}</h3><p class="faid-text" data-v-582833e2>${ssrInterpolate(unref(event).financialAid.body)}</p></div><a${ssrRenderAttr("href", unref(event).financialAid.ctaUrl)} target="_blank" rel="noopener" class="btn btn-gold btn-sm" data-v-582833e2>${ssrInterpolate(unref(event).financialAid.ctaLabel)}</a></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="event-section" id="faq" data-v-582833e2><h2 class="event-section-title" data-v-582833e2>Questions &amp; answers</h2><div class="faq-filters no-print" role="tablist" aria-label="Filter FAQ by topic" data-v-582833e2><!--[-->`);
      ssrRenderList(faqCategories, (cat) => {
        _push(`<button class="${ssrRenderClass([{ "is-active": unref(activeFaqCat) === cat.key }, "faq-tab"])}" role="tab"${ssrRenderAttr("aria-selected", unref(activeFaqCat) === cat.key)} data-v-582833e2>${ssrInterpolate(cat.label)}</button>`);
      });
      _push(`<!--]--></div><div class="faq-list" data-v-582833e2><!--[-->`);
      ssrRenderList(unref(filteredFaqs), (faq) => {
        _push(`<div class="faq-item" data-v-582833e2><button class="faq-q"${ssrRenderAttr("aria-expanded", unref(openFaq) === faq.q)} data-v-582833e2><span data-v-582833e2>${ssrInterpolate(faq.q)}</span><svg class="${ssrRenderClass([{ "is-open": unref(openFaq) === faq.q }, "faq-chevron"])}" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-582833e2><polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-582833e2></polyline></svg></button>`);
        if (unref(openFaq) === faq.q) {
          _push(`<div class="faq-a" data-v-582833e2><p data-v-582833e2>${ssrInterpolate(faq.a)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div><aside class="event-sidebar" data-v-582833e2><div class="reg-card card" style="${ssrRenderStyle(`--card-accent: ${unref(colors).accent}`)}" data-v-582833e2><div class="reg-card-header" style="${ssrRenderStyle(`background: ${unref(colors).light}`)}" data-v-582833e2><p class="reg-date-display" data-v-582833e2><span class="reg-weekday" data-v-582833e2>${ssrInterpolate((/* @__PURE__ */ new Date(unref(selectedDate) + "T00:00:00")).toLocaleDateString("en-US", { weekday: "long" }))}</span><span class="reg-full" data-v-582833e2>${ssrInterpolate((/* @__PURE__ */ new Date(unref(selectedDate) + "T00:00:00")).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))}</span></p><p class="reg-time" data-v-582833e2><svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-582833e2><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" data-v-582833e2></circle><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-582833e2></polyline></svg> ${ssrInterpolate(unref(selectedInst).timeStart)} – ${ssrInterpolate(unref(selectedInst).timeEnd)}</p></div><div class="reg-card-body" data-v-582833e2><a${ssrRenderAttr("href", unref(event).registrationUrl)} target="_blank" rel="noopener" class="btn btn-coral btn-full btn-lg" data-v-582833e2> Register now — it&#39;s free </a><a${ssrRenderAttr("href", unref(event).swoopShopUrl)} target="_blank" rel="noopener" class="btn btn-outline btn-full btn-sm" data-v-582833e2>`);
      _push(ssrRenderComponent(_component_EventIcon, {
        name: "shopping-bag",
        size: 16
      }, null, _parent));
      _push(` Swoop Shop </a><p class="reg-note" data-v-582833e2>No commitment required to register.</p></div></div><div class="badge-generator card" data-v-582833e2><h3 class="badge-gen-title" data-v-582833e2><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-582833e2><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2" data-v-582833e2></rect><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="2" data-v-582833e2></path></svg> Make your name tag </h3><p class="badge-gen-sub" data-v-582833e2>Your name as it will appear on your event badge:</p><div class="field" data-v-582833e2><label for="badgeName" data-v-582833e2>Your name</label><input id="badgeName"${ssrRenderAttr("value", unref(badgeName))} type="text" placeholder="e.g. Maya Thompson" maxlength="40" data-v-582833e2></div>`);
      if (unref(badgeName)) {
        _push(`<div class="badge-preview" style="${ssrRenderStyle(`border-color: ${unref(colors).accent}; background: ${unref(colors).light}`)}" data-v-582833e2><p class="badge-preview-label" data-v-582833e2>Preview</p><p class="badge-preview-name" data-v-582833e2>${ssrInterpolate(unref(badgeName))}</p><p class="badge-preview-event" data-v-582833e2>${ssrInterpolate(unref(event).name)} · ${ssrInterpolate(unref(selectedInst).label)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="contact-card card-ghost" data-v-582833e2><h3 class="contact-title" data-v-582833e2>Questions?</h3><p class="contact-body" data-v-582833e2>Our admissions team replies within one business day.</p><a href="mailto:admissions@northwestu.edu" class="contact-link" data-v-582833e2><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-582833e2><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" data-v-582833e2></path><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-582833e2></polyline></svg> admissions@northwestu.edu </a></div></aside></div><div class="print-only-page" data-v-582833e2><header class="print-header" data-v-582833e2><svg class="print-shield" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-582833e2><path d="M32 4L8 14v18c0 14 24 22 24 22s24-8 24-22V14L32 4z" fill="#0068bb" stroke="#fbd945" stroke-width="2" data-v-582833e2></path><text x="32" y="38" text-anchor="middle" font-size="14" font-weight="900" fill="#fbd945" font-family="system-ui" data-v-582833e2>NU</text></svg><p class="print-event-type" data-v-582833e2>Northwest University · Admissions Event</p><h1 class="print-event-name" data-v-582833e2>${ssrInterpolate(unref(event).name)}</h1><p class="print-event-tagline" data-v-582833e2>${ssrInterpolate(unref(event).tagline)}</p><div class="print-event-meta" data-v-582833e2><div class="print-meta-item" data-v-582833e2><div class="print-meta-icon" data-v-582833e2><svg viewBox="0 0 24 24" fill="none" data-v-582833e2><rect x="3" y="4" width="18" height="18" rx="2" stroke="white" stroke-width="2" data-v-582833e2></rect><path d="M16 2v4M8 2v4M3 10h18" stroke="white" stroke-width="2" stroke-linecap="round" data-v-582833e2></path></svg></div><div data-v-582833e2><p class="print-meta-label" data-v-582833e2>Date</p><p class="print-meta-value" data-v-582833e2>${ssrInterpolate(unref(selectedInst).label)}</p></div></div><div class="print-meta-item" data-v-582833e2><div class="print-meta-icon" data-v-582833e2><svg viewBox="0 0 24 24" fill="none" data-v-582833e2><circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" data-v-582833e2></circle><polyline points="12 6 12 12 16 14" stroke="white" stroke-width="2" stroke-linecap="round" data-v-582833e2></polyline></svg></div><div data-v-582833e2><p class="print-meta-label" data-v-582833e2>Time</p><p class="print-meta-value" data-v-582833e2>${ssrInterpolate(unref(selectedInst).timeStart)} – ${ssrInterpolate(unref(selectedInst).timeEnd)}</p></div></div><div class="print-meta-item" data-v-582833e2><div class="print-meta-icon" data-v-582833e2><svg viewBox="0 0 24 24" fill="none" data-v-582833e2><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" stroke-width="2" data-v-582833e2></path><circle cx="12" cy="10" r="3" stroke="white" stroke-width="2" data-v-582833e2></circle></svg></div><div data-v-582833e2><p class="print-meta-label" data-v-582833e2>Location</p><p class="print-meta-value" data-v-582833e2>Northwest University, Kirkland WA</p></div></div></div></header><div class="print-body" data-v-582833e2><div class="print-reg-box" data-v-582833e2><div class="print-qr-placeholder" aria-hidden="true" data-v-582833e2><div class="print-qr-placeholder-inner" data-v-582833e2></div></div><div data-v-582833e2><p class="print-reg-label" data-v-582833e2>Register at</p><p class="print-reg-url" data-v-582833e2>${ssrInterpolate(unref(event).registrationUrl)}</p></div></div><section data-v-582833e2><h2 class="print-section-title" data-v-582833e2>Schedule</h2><table class="print-schedule" data-v-582833e2><thead data-v-582833e2><tr data-v-582833e2><th data-v-582833e2>Time</th><th data-v-582833e2>Activity</th><th data-v-582833e2>Details</th></tr></thead><tbody data-v-582833e2><!--[-->`);
      ssrRenderList(unref(event).schedule, (item) => {
        _push(`<tr data-v-582833e2><td class="print-time" data-v-582833e2>${ssrInterpolate(item.time)}</td><td data-v-582833e2><p class="print-title" data-v-582833e2>${ssrInterpolate(item.title)}</p>`);
        if (item.track && item.track !== "all") {
          _push(`<span class="${ssrRenderClass(`print-track print-track-${item.track}`)}" data-v-582833e2>${ssrInterpolate(item.track)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td data-v-582833e2><p class="print-desc" data-v-582833e2>${ssrInterpolate(item.description)}</p>`);
        if (item.location) {
          _push(`<p class="print-desc" style="${ssrRenderStyle({ "font-style": "italic", "margin-top": "2pt" })}" data-v-582833e2>${ssrInterpolate(item.location)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></section><section data-v-582833e2><h2 class="print-section-title" data-v-582833e2>What to bring</h2><div class="print-bring" data-v-582833e2><!--[-->`);
      ssrRenderList(unref(event).bringItems, (item) => {
        _push(`<div class="print-bring-item" data-v-582833e2><span class="print-bring-icon" aria-hidden="true" data-v-582833e2>`);
        _push(ssrRenderComponent(_component_EventIcon, {
          name: item.icon,
          size: 12
        }, null, _parent));
        _push(`</span><span class="print-bring-text" data-v-582833e2>${ssrInterpolate(item.text)}</span></div>`);
      });
      _push(`<!--]--></div></section><section data-v-582833e2><h2 class="print-section-title" data-v-582833e2>Dress code</h2><div class="print-dress" data-v-582833e2><div class="print-dress-icon" aria-hidden="true" data-v-582833e2><svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-v-582833e2><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" stroke="#0068bb" stroke-width="1.5" data-v-582833e2></path></svg></div><div data-v-582833e2><p class="print-dress-label" data-v-582833e2>Dress code</p><p class="print-dress-value" data-v-582833e2>${ssrInterpolate(unref(event).dressCode)}</p><p class="print-dress-tip" data-v-582833e2>${ssrInterpolate(unref(event).dressCodeTip)}</p></div></div></section><footer class="print-footer" data-v-582833e2><span data-v-582833e2>Northwest University · Kirkland, WA · northwestu.edu</span><span data-v-582833e2>Questions? <a${ssrRenderAttr("href", `mailto:${"admissions@northwestu.edu"}`)} data-v-582833e2>admissions@northwestu.edu</a> · (425) 555-1234</span></footer></div></div>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-582833e2"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-DWb5Dsll.js.map
