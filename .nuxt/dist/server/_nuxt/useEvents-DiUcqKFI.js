import { defineComponent, mergeProps, useSSRContext, unref, ref, watch, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = publicAssetsURL("/nu-shield.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "site-header" }, _attrs))}><div class="container header-inner"><a href="/" class="brand" aria-label="Northwest University Admissions home"><img class="brand-mark"${ssrRenderAttr("src", _imports_0)} alt=""><div class="brand-name"> Northwest University <span>Admissions</span></div></a><nav class="header-nav" aria-label="Main navigation"><a href="/#missions">Upcoming events</a><a href="https://www.northwestu.edu/financial-aid" target="_blank" rel="noopener">Financial aid</a><a href="https://www.northwestu.edu/admissions" target="_blank" rel="noopener">Admissions</a><a href="mailto:visit@northwestu.edu">Contact</a></nav><div class="header-actions"><a href="mailto:visit@northwestu.edu" class="btn btn-coral btn-sm"> Register </a></div></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))}><div class="container"><div class="footer-inner"><div class="foot-brand"><img${ssrRenderAttr("src", _imports_0)} alt="Northwest University"><div><strong>Northwest University</strong><p>5520 108th Ave NE, Kirkland, WA 98033</p></div></div><nav class="foot-nav" aria-label="Footer"><a href="https://www.northwestu.edu/admissions" target="_blank" rel="noopener">Admissions</a><a href="https://www.northwestu.edu/financial-aid" target="_blank" rel="noopener">Financial Aid</a><a href="https://nueagles.com" target="_blank" rel="noopener">Athletics</a><a href="https://www.northwestu.edu/about/locations" target="_blank" rel="noopener">Campus Map</a><a href="https://www.northwestu.edu/privacy" target="_blank" rel="noopener">Privacy</a><a href="https://www.northwestu.edu/about/consumer-information" target="_blank" rel="noopener">Title IX</a></nav><div class="foot-social" aria-label="Social media"><a href="https://www.instagram.com/northwestu" target="_blank" rel="noopener" aria-label="Instagram">IG</a><a href="https://www.facebook.com/northwestu" target="_blank" rel="noopener" aria-label="Facebook">FB</a><a href="https://www.youtube.com/northwestuniversity" target="_blank" rel="noopener" aria-label="YouTube">YT</a></div></div><p class="foot-legal"> © ${ssrInterpolate(unref(year))} Northwest University. All rights reserved. · Questions? <a href="mailto:visit@northwestu.edu" style="${ssrRenderStyle({ "color": "rgba(240,244,248,.55)" })}">visit@northwestu.edu</a></p></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        text: props.eventName ? `Hi! I'm your NU Admissions helper. Ask me anything about ${props.eventName} or admissions in general.` : "Hi! I'm your NU Admissions helper. Ask me anything about our events, admissions, or what it's like to be an Eagle 🦅",
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
      }, _attrs))} data-v-cb06e9cf><button class="chat-toggle" aria-label="Open admissions help" data-v-cb06e9cf>`);
      if (!unref(isOpen)) {
        _push(`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-cb06e9cf><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cb06e9cf></path></svg>`);
      } else {
        _push(`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-cb06e9cf><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-cb06e9cf></path></svg>`);
      }
      _push(`<span class="chat-label" data-v-cb06e9cf>Help?</span></button>`);
      if (unref(isOpen)) {
        _push(`<div class="chat-panel" role="dialog" aria-label="Admissions help chatbot" data-v-cb06e9cf><div class="chat-header" data-v-cb06e9cf><div class="chat-header-info" data-v-cb06e9cf><span class="chat-avatar" aria-hidden="true" data-v-cb06e9cf>🦅</span><div data-v-cb06e9cf><p class="chat-header-name" data-v-cb06e9cf>NU Admissions Helper</p><p class="chat-header-sub" data-v-cb06e9cf>Usually replies in minutes</p></div></div><a href="mailto:visit@northwestu.edu" class="chat-email" title="Email us" data-v-cb06e9cf><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-cb06e9cf><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" data-v-cb06e9cf></path><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-cb06e9cf></polyline></svg></a></div><div class="chat-messages" aria-live="polite" data-v-cb06e9cf><!--[-->`);
        ssrRenderList(unref(messages), (msg, i) => {
          _push(`<div class="${ssrRenderClass([`msg-${msg.role}`, "chat-msg"])}" data-v-cb06e9cf>`);
          if (msg.role === "bot") {
            _push(`<span class="msg-avatar" aria-hidden="true" data-v-cb06e9cf>🦅</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="msg-bubble" data-v-cb06e9cf><p data-v-cb06e9cf>${ssrInterpolate(msg.text)}</p><span class="msg-time" data-v-cb06e9cf>${ssrInterpolate(msg.time)}</span></div></div>`);
        });
        _push(`<!--]-->`);
        if (unref(isLoading)) {
          _push(`<div class="chat-msg msg-bot" data-v-cb06e9cf><span class="msg-avatar" aria-hidden="true" data-v-cb06e9cf>🦅</span><div class="msg-bubble typing" data-v-cb06e9cf><span data-v-cb06e9cf></span><span data-v-cb06e9cf></span><span data-v-cb06e9cf></span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(showEscalate)) {
          _push(`<div class="escalate-row" data-v-cb06e9cf><button class="btn btn-coral btn-sm btn-full" data-v-cb06e9cf> ✉️ Email admissions team </button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(escalated)) {
          _push(`<div class="escalate-row" data-v-cb06e9cf><p class="escalate-note" data-v-cb06e9cf> Or call us: <a href="tel:+14255551234" data-v-cb06e9cf>(425) 555-1234</a> · <a href="mailto:visit@northwestu.edu" data-v-cb06e9cf>visit@northwestu.edu</a></p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<form class="chat-input-row" data-v-cb06e9cf><textarea class="chat-input" placeholder="Ask anything..." rows="1" maxlength="300" aria-label="Your message" data-v-cb06e9cf>${ssrInterpolate(unref(inputText))}</textarea><button type="submit" class="chat-send"${ssrIncludeBooleanAttr(!unref(inputText).trim()) ? " disabled" : ""} aria-label="Send message" data-v-cb06e9cf><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-cb06e9cf><line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-cb06e9cf></line><polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cb06e9cf></polygon></svg></button></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqChatbot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb06e9cf"]]);
const useEvents = () => {
  const EVENTS = [
    {
      id: "discover-nu-2026",
      slug: "discover-nu",
      type: "discover",
      name: "Discover NU",
      tagline: "Your first look at what could be home.",
      emoji: "🏔️",
      color: "coral",
      shortDescription: "A guided tour + admissions chat — perfect for first-timers figuring out if NU clicks.",
      description: "Discover NU is our signature open house event. Spend the day on campus, meet professors and current students, and get all your questions answered by our admissions team. Bring the whole crew — parents, guardians, and anyone who wants to know what makes this place special.",
      heroImage: "/events/discover-hero.jpg",
      videoPlaceholder: {
        thumbnail: "/events/discover-video-thumb.jpg",
        label: "What to expect at Discover NU",
        embedUrl: ""
      },
      registrationUrl: "https://www.northwestu.edu/visit/discover-nu",
      swoopShopUrl: "https://shop.northwestu.edu",
      instances: [
        {
          date: "2026-09-18",
          label: "Thursday, September 18, 2026",
          timeStart: "8:30 AM",
          timeEnd: "2:00 PM"
        },
        {
          date: "2026-10-10",
          label: "Saturday, October 10, 2026",
          timeStart: "9:00 AM",
          timeEnd: "1:00 PM"
        }
      ],
      schedule: [
        { time: "8:30 AM", title: "Check-in & Welcome Coffee", description: "Grab your nametag and a caffeine boost. Meet other families exploring NU.", icon: "☕", location: "Larson Hall Lobby" },
        { time: "9:00 AM", title: "Campus Tour", description: "Student-led walk through 56 acres — trails, chapel, labs, dining, the whole vibe.", icon: "🚶", location: "Departs from Larson Hall" },
        { time: "10:30 AM", title: "Academic Fair", description: "Meet faculty from Nursing, Business, Music Production, Psychology, and more.", icon: "📚", location: "University Center" },
        { time: "11:30 AM", title: "Student Life Panel", description: "Real students share the real story — faith, friends, food, and everything in between.", icon: "💬", location: " Chapel" },
        { time: "12:15 PM", title: "Lunch on Us", description: "Feast at Sæter, our campus dining hall. Come hungry.", icon: "🍽️", location: "Sæter Dining Hall" },
        { time: "1:00 PM", title: "Admissions Q&A", description: "Got questions? Our admissions counselors have answers. Bring a list.", icon: "🎓", location: "Larson Hall" },
        { time: "1:45 PM", title: "Optional: Department Visits", description: "Dig deeper into your program of interest.", icon: "🧪", location: "Various" }
      ],
      faqs: [
        { q: "Is parking free?", a: "Yes — parking is free for all Discover NU guests. Pull into any visitor spot and grab a pass at check-in.", category: "logistics" },
        { q: "Can I bring siblings or younger kids?", a: "Totally. While some sessions are aimed at high schoolers, we love having families explore together. Kids are welcome at lunch and the campus tour.", category: "logistics" },
        { q: "What should I wear?", a: "Come as you are. This is PNW casual — jeans and sneakers are totally fine. The tour is partly outdoors so dress for the weather.", category: "logistics" },
        { q: "How do I know if I need to register each family member?", a: "Each guest attending lunch or visiting departments needs their own registration, even if they're coming with a student.", category: "logistics" },
        { q: "What is the cancellation policy?", a: "Life happens — just email visit@northwestu.edu at least 48 hours before your event and we'll move you to another date with no penalty.", category: "logistics" },
        { q: "Will there be someone to talk to about financial aid?", a: "Yes — our financial aid team is at every Discover NU event. You can also ask us anything in the Q&A or swing by the Financial Aid table during the Academic Fair.", category: "cost" },
        { q: "Is my student expected to apply on the day of the event?", a: "Not at all. Discover NU is a no-pressure event. We want you to explore, ask questions, and figure out if NU feels right — no commitment required.", category: "parents" },
        { q: "What if my student is applying to multiple schools?", a: "That's completely normal. We'll give you the full picture of what makes NU unique, but we'll never pressure you. Our job is to help you decide, not to decide for you.", category: "parents" },
        { q: "Can I get a feel for the spiritual environment on campus?", a: "Absolutely. We'll talk openly about faith at NU, including chapel, worship nights, and how spirituality shows up in and out of the classroom. Students will share their own experiences too.", category: "parents" },
        { q: "How competitive is admissions?", a: "We take a holistic approach — your student's character, story, and fit matter as much as grades. Our counselors can talk through your student's profile individually.", category: "general" }
      ],
      bringItems: [
        { icon: "👟", text: "Comfy shoes for the campus tour (partly outdoor, about 45 minutes)" },
        { icon: "🌧️", text: "Layers and a light jacket — Kirkland weather is unpredictable" },
        { icon: "📝", text: "Questions! Bring a list or just wing it" },
        { icon: "📱", text: "Your phone for photos and the campus app" },
        { icon: "💊", text: "Any personal meds / allergy epi-pens (we don't have these on hand)" }
      ],
      dressCode: "PNW Casual",
      dressCodeTip: "Jeans, sneakers, layers — totally fine. Nothing formal needed.",
      parentsTitle: "A note for parents & guardians",
      parentsIntro: "We know you're asking different questions than your student. Here's what matters to you — and how we've got you covered.",
      parentsItems: [
        { icon: "🔒", title: "Safety & wellbeing", body: "Our campus is private, gated, and has 24/7 security. Students and families consistently tell us NU feels safe and like a real community, not just a campus." },
        { icon: "💰", title: "Financial clarity", body: "We'll walk through real scholarship scenarios, out-of-pocket costs, and what financial aid actually looks like for families in different income brackets. No surprises." },
        { icon: "👩‍🏫", title: "Faculty accessibility", body: "Class sizes average 18 students. Your student's professor will know their name by week two. We'll show you exactly how that works in our labs and seminar rooms." },
        { icon: "🚗", title: "Getting here", body: "We're 20 minutes from Seattle, with easy parking on campus. If your student flies in, SEA-TAC is about 35 minutes away. We can help coordinate rideshare splits." }
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
      type: "overnight",
      name: "NU Overnight",
      tagline: "Sleep in a dorm. Eat in the dining hall. Be an NU Eagle for 24 hours.",
      emoji: "🌙",
      color: "teal",
      shortDescription: "Live the overnight experience — stay in a residence hall, attend classes, and see what a day in the life actually looks like.",
      description: "The NU Overnight is the best way to know if this is the right fit. You'll stay in a residence hall with a current student host, eat at Sæter, attend real classes, and get the unfiltered truth about the NU experience. Parents: your student is in good hands — our overnight hosts are trained, vetted, and excited to show off their home.",
      heroImage: "/events/overnight-hero.jpg",
      videoPlaceholder: {
        thumbnail: "/events/overnight-video-thumb.jpg",
        label: "What an NU Overnight actually looks like",
        embedUrl: ""
      },
      registrationUrl: "https://www.northwestu.edu/visit/nu-overnight",
      swoopShopUrl: "https://shop.northwestu.edu",
      instances: [
        { date: "2026-09-24", label: "Thursday, September 24, 2026", timeStart: "6:00 PM", timeEnd: "Next day 4:00 PM" },
        { date: "2026-10-15", label: "Thursday, October 15, 2026", timeStart: "6:00 PM", timeEnd: "Next day 4:00 PM" },
        { date: "2026-11-05", label: "Thursday, November 5, 2026", timeStart: "6:00 PM", timeEnd: "Next day 4:00 PM" },
        { date: "2026-11-19", label: "Thursday, November 19, 2026", timeStart: "6:00 PM", timeEnd: "Next day 4:00 PM" },
        { date: "2026-01-21", label: "Thursday, January 21, 2027", timeStart: "6:00 PM", timeEnd: "Next day 4:00 PM" },
        { date: "2026-02-11", label: "Thursday, February 11, 2027", timeStart: "6:00 PM", timeEnd: "Next day 4:00 PM" }
      ],
      schedule: [
        { time: "6:00 PM", title: "Arrival & Check-in", description: "Meet your student host and get settled in the residence hall.", icon: "🏠", location: "Cascade Hall Lobby" },
        { time: "6:30 PM", title: "Dinner at Sæter", description: "Dine with your host and their friends. First test: the taco bar.", icon: "🌮", location: "Sæter Dining Hall" },
        { time: "7:30 PM", title: "Evening Activity", description: "Hosted game night, worship, or campus event — depends on the night.", icon: "🎮", location: "University Center" },
        { time: "10:00 PM", title: "Wind Down", description: "Head to your host's room. Quiet hours start at 11 PM.", icon: "😴", location: "Residence Hall" },
        { time: "8:00 AM", title: "Breakfast", description: "Fuel up before the morning sessions.", icon: "🥞", location: "Sæter Dining Hall" },
        { time: "9:00 AM", title: "Morning Classes", description: "Sit in on two real NU classes — you pick which ones.", icon: "📖", location: "Academic Buildings" },
        { time: "11:00 AM", title: "Campus Life Chat", description: "Open Q&A with student life staff and current students.", icon: "💬", location: "Student Center" },
        { time: "12:00 PM", title: "Lunch & Goodbyes", description: "One last meal, then wrap up. We'll help arrange rides or transit.", icon: "👋", location: "Sæter Dining Hall" }
      ],
      faqs: [
        { q: "Who will my student be staying with?", a: "We match each guest with a current NU student host who's been trained and vetted. Hosts are selected for their friendliness and ability to give an honest picture of life here.", category: "logistics" },
        { q: "What should they bring for an overnight?", a: "Sleeping essentials (or a sleeping bag if you prefer), a change of clothes, toiletries, and any schoolwork they might want to work on between sessions. We provide pillows and towels.", category: "logistics" },
        { q: "Is it safe overnight?", a: "Yes. Residence halls have secure key-card access, and our Campus Security patrols 24/7. Your student host will go over safety protocols during check-in.", category: "logistics" },
        { q: "My student has a food allergy — will they be okay?", a: "Let us know at registration and we'll connect you with our dining services team. Sæter has allergen-friendly stations clearly labeled. We take this seriously.", category: "logistics" },
        { q: "Can I speak to someone if my student has anxiety about staying overnight?", a: "Of course — email visit@northwestu.edu before registering and we'll work something out. Some students start with a day visit and do an overnight later, and that's fine too.", category: "parents" },
        { q: "What if my student doesn't connect with their host?", a: "It's rare, but if it happens, our student life team is on call overnight. They can move your student to a different room or pair them with a different host for the next morning's activities.", category: "parents" },
        { q: "Do parents need to stay nearby?", a: "Not at all. Our hosts are trained to take great care of overnight guests. That said, some families prefer to stay in the area — we can share hotel recommendations in Kirkland.", category: "parents" },
        { q: "What happens if my student gets homesick?", a: "We handle it with care. Your student's host will check in, and our student life team is available. If needed, we can arrange early checkout with no questions asked.", category: "parents" },
        { q: "Is the overnight free?", a: "Yes — the NU Overnight is completely free, including meals and a bed for the night. Register early as spots fill up quickly.", category: "cost" },
        { q: "What's the cancellation policy for overnights?", a: "Email visit@northwestu.edu at least 5 days before the event and we'll move your registration to another date at no charge. Last-minute cancellations are okay too — just let us know.", category: "logistics" }
      ],
      bringItems: [
        { icon: "🛏️", text: "Sleeping bag or blankets (we provide pillows and towels)" },
        { icon: "👕", text: "Change of clothes + PJ pants for the next morning" },
        { icon: "🧴", text: "Toiletries + anything you need to feel comfortable overnight" },
        { icon: "📱", text: "Phone (charger too — outlets exist)" },
        { icon: "💊", text: "Personal meds or allergy EpiPen if needed" },
        { icon: "🎒", text: "Small backpack for carrying stuff between buildings" }
      ],
      dressCode: "Casual",
      dressCodeTip: "Athleisure, jeans, whatever you'd wear on a casual college day. Classes tomorrow are real classes — your student's host will be dressed normally.",
      parentsTitle: "A note for parents & guardians",
      parentsIntro: "Sending your student to sleep over at a college can feel like a big step. Here's exactly what to expect and how we keep them safe and comfortable.",
      parentsItems: [
        { icon: "🛡️", title: "Vetted student hosts", body: "Every NU Overnight host completes a background check and a multi-day training on safety, inclusion, and student wellbeing. They genuinely want to be hosts — it's not an assignment." },
        { icon: "🏥", title: "Health & dietary support", body: "We accommodate food allergies, medical needs, and dietary restrictions. Register early and include any notes so our team can prepare in advance." },
        { icon: "📱", title: "Always reachable", body: "Your student can use their phone to call or text you anytime. Their host will share the student life on-call number before bed in case of any issues." },
        { icon: "🚪", title: "Easy early exit", body: "If anything doesn't feel right — for any reason — early checkout is available with no questions asked. Your student's comfort and safety come first." }
      ],
      financialAid: {
        headline: "Thinking about cost? You're not alone.",
        body: "Most families have the same conversation. We'll make sure you have a real number — not a ballpark — before your student applies.",
        ctaLabel: "Talk to financial aid →",
        ctaUrl: "https://www.northwestu.edu/financial-aid"
      }
    }
  ];
  const getEvent = (slug) => EVENTS.find((e) => e.slug === slug) ?? null;
  const allEvents = EVENTS;
  return { allEvents, getEvent };
};
export {
  _sfc_main$2 as _,
  _sfc_main$1 as a,
  __nuxt_component_2 as b,
  useEvents as u
};
//# sourceMappingURL=useEvents-DiUcqKFI.js.map
